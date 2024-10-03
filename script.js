const submitBtn = document.getElementById("btn");

const popup = document.getElementById("popup");

const close = document.getElementById("close");

const ok = document.getElementById("ok");
submitBtn.onclick = () => {
  popup.classList.add("open-popup");
};

close.onclick = () => {
  popup.classList.remove("open-popup");
};

ok.onclick = () => {
  popup.classList.remove("open-popup");
};

document.onkeydown = (key) => {
  if (key.keyCode === 27) {
    popup.classList.remove("open-popup");
  }
};
