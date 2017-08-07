
import ripplestyles from "./ripple.css";

function Ripple(selector){
var surfaces = document.querySelectorAll(selector);
  [].forEach.call(surfaces, e => {
    e.innerHTML += '<div class="material-ripple-container"></div>';
    e.addEventListener("mousedown", ev => {
      if (!ev.button) {
        e.dataset.mouse = 1;
        var elem = document.createElement("div");
        elem.classList.add("material-ripple");
        e.querySelector('.material-ripple-container').appendChild(elem);
        
        var offsetY = e.offsetTop === undefined ? ev.pageY - ev.layerY : ev.pageY - e.offsetTop;
        var offsetX = e.offsetLeft === undefined ? ev.pageX - ev.layerX : ev.pageX - e.offsetLeft;

        elem.style.left = offsetX + "px";
        elem.style.top = offsetY + "px";
        elem.style.transform = "scale(15)";
        console.log('down')
      }
    });
    e.addEventListener("mouseup", ev => {
      e.dataset.mouse = 0;
      var o = [];
      [].forEach.call(e.querySelector('.material-ripple-container').children, el => {
        o.push(el);
      });
      o.reverse()[0].style.opacity = 0;
      setTimeout(() => {
        [].forEach.call(e.querySelector('.material-ripple-container').children,el => {
          el.parentNode.removeChild(el);
        });
      }, 16000);
    });
    e.addEventListener("mouseleave", ev => {
      var o = [];
      [].forEach.call(e.querySelector('.material-ripple-container').children, el => {
        o.push(el);
      });
      if(e.dataset.mouse === '1'){
        o.reverse()[0].style.opacity = 0;
      }
      setTimeout(() => {
        [].forEach.call(e.querySelector('.material-ripple-container').children,el => {
          el.parentNode.removeChild(el);
        });
      }, 16000);
    });
  });
}

export {Ripple};

// USE AS 
// Ripple(".btn-ripple");
