function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
  
document.getElementById("canvas").onclick = function(event) {
    var coords = canvas.relMouseCoords(event);
    document.getElementById("text_x").value = coords.x;
    document.getElementById("text_y").value = coords.y;
}