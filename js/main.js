


function test(){
    return alert('test!');
    
}

window.onload = function(){
    var canvas = document.getElementById("game");
    var canvasContext = canvas.getContext('2d');
    test();
    console.log(canvasContext);
}