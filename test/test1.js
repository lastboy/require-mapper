
module.exports = function() {

    var Mapper = require("../rmapper.js"),
        rmapper = new Mapper();

    return {

        test: function(arg) {

            console.log("***** Test ", arg, " \n");

            if (rmapper) {
                rmapper.init({
                    basepath: "./src",
                    data:{
                        "test.module": "TestModule.js"
                    }
                });
            }

            var test = _require("test.module");
            console.log("test", arg, ":...", test());

        }
    }

}();