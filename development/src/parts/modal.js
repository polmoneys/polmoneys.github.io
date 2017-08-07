import { css } from "glamor";

let rule = css({
  cursor: "pointer",
  width: "35vw",
  height: "35vw",
  padding: "1rem",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ddd",
  boxShadow: " 0px 0px 20px rgba(0, 0, 0, .3)"
});

function Modal(theme, message) {
  return `<div class='modal ${rule} ${theme}'>
    <p>${message}</p>
          </div>`;
}

function OpenModal(e) {
  if (document.querySelector(".modal")) {
    return;
  }

  const message = e.target.dataset.message,
    theme = e.target.dataset.theme;


  const string = Modal(theme, message);
  var placeholder = document.createElement("div");
  placeholder.innerHTML = string;
  document.body.append(placeholder);

  var modal = document.querySelector(".modal");
  modal.addEventListener("click", DestroyModal);
}

function DestroyModal() {
  var modal = document.querySelector(".modal");
  modal.remove();
}

export { OpenModal, DestroyModal };
