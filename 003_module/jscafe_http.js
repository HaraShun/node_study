var http = require('http');

var module_http = {

  request: function(url, callback) {

    http.get(url, function(res) {

      res.setEncoding('utf-8');

      var buffer = '';

      res.on('readable', function() {
        buffer += res.read();
      });

      //レスポンスがすべて帰ったらコールバックを呼ぶ
      res.on('end', function() {
        callback(null, buffer);
      });

      //エラーが起こったとき
      res.on('error', function(e) {
        console.log('Got error:' + e.message);
        callback(e, buffer);
      });

    });

  }
}

module.exports = module_http;