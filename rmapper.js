var _Mapper = require("./src/Mapper.js");

module.exports = function () {

    var mapper = new _Mapper();

    this.init = mapper.init;
    this.map = mapper.map;
    this.destroy = function () {
        mapper.destroy();
    }

};