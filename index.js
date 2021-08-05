const hamburguerButton = document.querySelector("#hamburger");
const navList = document.querySelector("#nav-list");

const toggleButton = () => {
  navList.classList.toggle("show");
};

hamburguerButton.addEventListener("click", toggleButton);
