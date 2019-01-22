const promise = require('../index')

function whoAreYou(options) {
    options.success('cj', 1)
}

describe('wrapper', function() {

    it.only('w1', () => {
        var f1 = function() {
            console.debug(arguments)
        }

        f1.apply(null, [1, 2]);
    })

    it.only('wrapper', function() {
        promise._wrapper(function(options) {
            options.success(options.name, 'a')
        })({name: 'cj'}).then(function(name, a) {
            console.debug(arguments)
            console.debug(name)
            console.debug(a)
        })
    })

    it('wrapper', function() {
        promise._wrapper((options) => {
            console.debug("mock fail")
            options.fail(new Error("error"))
        })({})
        .then(() => {
            console.debug('then')
        })
        .catch((e) => {
            console.debug(e.message)
            console.debug('done')
        })
    })
})