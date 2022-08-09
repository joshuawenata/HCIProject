var id = null;
function walk() {
    // console.log("hello");
  var cat = document.getElementById("cat");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 700) {
      pos = 0;
      cat.style.left = 0 + 'px';
    }
    pos++; 
    cat.style.left = pos + 'px'; 
  }
}

var loader = setInterval(function () {
    if(document.readyState !== "complete") return;
    clearInterval(loader);
    walk();
 }, 300);