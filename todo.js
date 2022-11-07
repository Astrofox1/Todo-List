var li = document.querySelectorAll("li");
var input = document.querySelector("#input");
var ul = document.querySelector("#ul");


input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && input.value != 0) {
      
      var l = document.createElement("li");
      l.appendChild(document.createTextNode(input.value));
      ul.appendChild(l);

      l.addEventListener('click', function(){
        this.classList.toggle("done");
      })

      l.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        this.remove();
      });

      this.value = '';
    }
});
