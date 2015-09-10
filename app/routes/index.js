var express = require('express');
var guid = require('node-guid');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //20150910 删除原有的调用视图渲染的代码
  //res.render('index', { title: 'Express' });
  
  //20150910 增加返回GUID的代码
  var val = guid.new();
  res.type('text/plain');
  res.json(val);
});

module.exports = router;
