const fs = require('fs')
const path = require('path')
const dirw = require('dirw')
const debug = require('debug')('mount2')

module.exports = function (app, opts) {
    dirw.dir('./src', function (dir_path, dir_name) {
        if (dir_name == 'bin' || dir_name == '.bin') {
            return
        }

        let file = dir_path + '/router.js'
        fs.exists(file, (exists) => {
            if (exists) {
                debug(exists ? 'it\'s there' : 'no exist!')
                debug(dir_path)
                debug(dir_name)
                const r = require(file)
                app.use(r.routes(), r.allowedMethods())
            } else {
                debug(file + 'not exist')
            }
        })
    })
}
