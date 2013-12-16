var JSCafe = require('./jscafe_http2');
var jscafe = new JSCafe();

jscafe.request('http://www.cresco.co.jp')
.on('end', function(page){
  console.log(page);
})
.on('error', function(e){
  console.error(e);
});
