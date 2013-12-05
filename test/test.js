

(function() {

    var tests = [1, 2, 3];

    tests.forEach(function(test) {
        require(["./test", test, ".js"].join("")).test(test);
    });

})();
