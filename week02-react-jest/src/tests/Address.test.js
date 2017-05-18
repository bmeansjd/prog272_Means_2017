/**
 * Created by bcuser on 4/19/17.
 */








// http://stackoverflow.com/a/32911774/253576
beforeEach(function() {
    const localStorageMock = (function() {
        let storage = {};
        return {
            getItem: function(key) {
                return storage[key];
            },
            setItem: function(key, value) {
                storage[key] = value.toString();
            },
            clear: function() {
                storage = {};
            }
        };
    })();
    Object.defineProperty(global, 'localStorage', {value: localStorageMock});

});