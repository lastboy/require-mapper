

function Test1() {

    console.log("***** Test 1 \n");

    var rmapper = require("./rmapper.js");

    if (rmapper) {
        rmapper.init({
            basepath: "./src",
            data:{
                "test.module": "TestModule.js"
            }
        });
    }

    var test = _require("test.module");
    console.log("test:...", test());
}

function Test2() {

    console.log("\n\n***** Test 2 \n");


    var rmapper = require("./rmapper.js");

    if (rmapper) {
        rmapper.destroy();
        rmapper.map({
            "test.module": "./src/TestModule.js"
        });
    }

    var test = _require("test.module");
    console.log("test:...", test());
}


function Test3() {

    console.log("\n\n***** Test 3 \n");

    var rmapper = require("./rmapper.js");

    if (rmapper) {
        rmapper.destroy();
        rmapper.init({
            basepath: __dirname,
            data:{
                "test.module": "src/TestModule.js"
            }
        });
    }

    var test = _require("test.module");
    console.log("test:...", test());
}

Test1();
Test2();
Test3();