      (function() {

  var preload = document.getElementById("preload");
  var loading = 0;
  var id = setInterval(frame,64);

    function frame() {
      if(loading == 70) {
        clearInterval(id);
        window.open("register.html", "_self");
      }
      else {
        loading = loading + 1;
          if(loading == 80) {
            preload.style.animation = "fadeout is ease";
          }
      }
    }

})(); 