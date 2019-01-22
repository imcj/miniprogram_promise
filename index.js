// try {
// if (undefined === wx) {
//     var wx = {
//         login: {}
//     }
// }
// } catch (e) {
//     // wx.login = {}
// }

function wrapper(target) {
    return function (options) {
        if (!options) {
            options = {}
        }
        return new Promise(function (resolve, reject) {
            var self = this
            options.success = function() {
                resolve.apply(self, Array.prototype.slice.call(arguments))
            }
            options.fail = function() {
                reject.apply(null, arguments)
            }
            target(options)
        })
    }
    
}

module.exports = (wx) => {
    return {
        _wrapper: wrapper,
    
        getSetting: wrapper(wx.getSetting),
        login: wrapper(wx.login),
    
        getUserInfo: wrapper(wx.getUserInfo)
    }
} 