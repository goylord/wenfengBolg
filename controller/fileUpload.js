var multer = require('multer')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/upload')
    },
    filename: function(req, file, cb) {
        let filename = Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]
        req.uploadFileName = filename
        cb(null, filename)
    }
})
var upload = multer({storage: storage})
exports.uploadWare = upload.single('logo')
exports.uploadFile = (req, res, next) => {
    res.json({
        status: '200',
        message: '文件上传成功',
        filePath: `/upload/${req.uploadFileName}`
    })
}