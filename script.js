const container = document.querySelector(".container");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
    container.classList.add("show-nav");
    // openBtn.style.transform = "rotate(90deg)";
    // openBtn.style.transformOrigin = "top left";
    // closeBtn.style.transform = "rotate(0deg)";
    // closeBtn.style.left = "60%";
    // closeBtn.style.top = "46%";
})

closeBtn.addEventListener("click", () => {
    container.classList.remove("show-nav");
})