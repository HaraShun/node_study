var jscafe = require('./jscafe_http');

jscafe.request('http://www.cresco.co.jp', function(e, res){
  if (e) { console.error(e); }
  console.log(res);
});
