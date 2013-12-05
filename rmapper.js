var _mapper = require("./src/Mapper.js");

module.exports = function() {

    return {
        init: _mapper.init,

        map: _mapper.map,

        destroy: function() {
            _mapper.destroy();
        }
    };

}();