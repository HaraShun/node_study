(function(){

  var socket = io.connect();
  var list = document.getElementById('list');
  var submit = document.getElementById('submit');
  var textarea = document.getElementById('message');

  socket.on('connect', function(){

    //messageイベントを受けたらlistに追加する
    socket.on('message', function(message){
      appendMessage(message);
    });

    //メッセージをリストに追加する関数
    function appendMessage(message){
      var li = document.createElement('li');
      var text = document.createTextNode(message);

      li.appendChild(text);
      list.appendChild(li);
    }

    //submitした時の処理
    submit.addEventListener('click', function(e){
      e.preventDefault();

      var message = textarea.value;
      if(message && socket){
        //自分の所に追加してからwebsocketで通知する
        appendMessage(message);
        socket.emit('message', message);  
      }

    });

  });

})();