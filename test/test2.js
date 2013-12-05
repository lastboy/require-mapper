
module.exports = function() {

    var Mapper = require("../rmapper.js"),
        rmapper = new Mapper();

    return {
        
        test: function(arg) {

            console.log("\n\n***** Test", arg, " \n");

            if (rmapper) {
                rmapper.map({
                    "test.module": "./src/TestModule.js"
                });
            }

            var test = _require("test.module");
            console.log("test", arg, ":...", test());
        }
    }

}();