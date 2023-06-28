var originalPosition = 0;

function moveHandle() {
  var img = document.getElementById("handle");
  var box = document.getElementById("box");
  var nozzle = document.getElementById("nozzle");
  
  box.style.height = (box.offsetHeight - 12) + "px";
  box.style.width = (box.offsetWidth + 23) + "px";
  box.style.bottom = (parseInt(box.style.bottom) + 3) + "px";
  nozzle.style.bottom = (parseInt(box.style.bottom) + 3) + "px";
  box.style.right = (parseInt(box.style.right) - 11) + "px";

  if (img.style.top === "") {
    originalPosition = img.offsetTop;
  }
  
  img.style.top = (originalPosition + 100) + "px";
  
  setTimeout(function() {
    img.style.top = originalPosition + "px";
    box.style.height= "217px";
    box.style.width= "217px";
    box.style.bottom= "40px";
    box.style.right= "81px";

  }, 200);
}
