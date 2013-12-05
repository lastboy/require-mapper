
module.exports = function() {

    var Mapper = require("../rmapper.js"),
        rmapper = new Mapper();

    return {
        
        test: function(arg) {

            console.log("\n\n***** Test ", arg, " \n");

            if (rmapper) {
                rmapper.init({
                    basepath: __dirname,
                    methodname: "requirexxx",
                    data:{
                        "test.module": "../src/TestModule.js"
                    }
                });
            }

            var test = requirexxx("test.module");
            console.log("test", arg, ":...", test());
        }
    }

}();