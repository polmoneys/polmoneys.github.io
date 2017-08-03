import spinnerstyles from "./parts/spinner.css";
import appstyles from "./app.css";
import { Interface } from "./sections/projects";
import { Hero } from "./sections/hero";
// import { Intro } from "./sections/intro";




if (module.hot) {
  module.hot.accept();
}


const App = () =>
  `<div class="app-ctn">
  ${Interface()}
  </div>
   ${Hero}`;
  

document.addEventListener("DOMContentLoaded", function() {
  const app = document.querySelector("#app"),
    spinner = document.querySelector(".spinner");

  setTimeout(() => {
    spinner.remove();

    app.innerHTML = App();
    

  }, 1500);
});
