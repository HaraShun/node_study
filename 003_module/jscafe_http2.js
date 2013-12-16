var http = require('http');
var emitter = require('events').EventEmitter;
var util = require('util');

//コンストラクタ
function Module_http() {
  emitter.call(this);
}

//module_httpがEventEmitterを継承する
util.inherits(Module_http, emitter);

Module_http.prototype.request = function(url) {

  var self = this;

  http.get(url, function(res) {

    res.setEncoding('utf-8');

    var buffer = '';

    res.on('readable', function() {
      buffer += res.read();
    });

    //レスポンスがすべて帰ったらコールバックを呼ぶ
    res.on('end', function() {
      //callback(null, buffer);
      self.emit('end', buffer);
    });

    //エラーが起こったとき
    res.on('error', function(e) {
      console.log('Got error:' + e);
      // callback(e, buffer);
      self.emit('error', e);
    });

  });
  return self;
};

module.exports = Module_http;