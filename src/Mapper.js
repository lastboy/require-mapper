var _path = require("path");

module.exports = function() {

    var _ENUM = {
        MAP_KEY: "require-mapper"

    }, _map = {},
        _module,
        _methodname = "_require",
        _basepath = ".",
        _me;

    function _setGlobal(key, value) {
        global[key] = value;
    }

    function _getGlobal(key) {
        return global[key];
    }

    _me = {

        destroy: function() {
            _map = {};
            _methodname = "_require";
            _basepath = ".";

        },

        init: function(config) {

            var data;
            if (config) {
                _basepath = (config.basepath || _basepath);
                data = ("data" in config ? config.data : undefined);
                _methodname = ("methodname" in config ? config.methodname : _methodname);
            }

            /**
             * Get the require module from the mapper
             *
             * @param module The module name
             * @returns {*} Forward the original's require return value
             * @private
             */
            _module = function (module) {
                var catconfig = _map,
                    modulepath;
                if (catconfig) {
                    modulepath = ( catconfig[module] || module );
                    modulepath = _path.resolve(_basepath, modulepath);
                }
                return modulepath;
            };

            // Map index for CAT modules
            _map = {};

            /**
             * Mapper's require implementation
             *
             * @param module The module key
             * @returns {*}
             */
            _setGlobal(_methodname, function (module) {

                return require(_module(module));
            });

            _me.map(data);

        },

        /**
         * Set the data to the mapper
         *
         * Behaves like a Map object, if the key already exists
         *  the last will override the existing
         *
         * @param data
         */
        map: function(data) {

            var map = _map,
                key;

            if (map && data) {
                for (key in data) {
                    if (key && data.hasOwnProperty(key)) {
                        _map[key] = data[key];
                    }
                }
            }

        }

    };

    return _me;

};