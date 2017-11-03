var fs = require('fs')
var path = require('path')
var dirw = require('dirw')

module.exports = function (app, opts) {
    dirw.dir('./src', function (dir_path, dir_name) {
        if (dir_name == 'bin' || dir_name == '.bin') {
            return
        }

        let file = dir_path + '/router.js'
        fs.exists(file, (exists) => {
            if (exists) {
                console.log(exists ? 'it\'s there' : 'no exist!')
                console.log(dir_path)
                console.log(dir_name)
                const r = require(file)
                app.use(r.routes(), r.allowedMethods())
            } else {
                console.log(file + 'not exist')
            }
            
        })
    })
}