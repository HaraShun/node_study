var messages = [];

exports.bbs = function(req, res) {

	//POSTの内容はbodyに入ってくる
	var message = req.body.message;

	if (message) {
		messages.push(message);
	}

	//jadeをコンパイルしてHTMLを返す
	res.render('bbs', {title: 'BBS', messages: messages});

};

exports.message = function(socket){

	//broadcastは全体に配信する
	socket.on('message', function(message){
		messages.push(message);
		socket.broadcast.emit('message', message);
	});

};
