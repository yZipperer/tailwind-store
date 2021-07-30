const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
    console.log("hello");
    mobileMenu.hidden = !mobileMenu.hidden;
});

const profileMenuButton = document.getElementById("profileMenuButton");
const profileMenu = document.getElementById("profileMenu");

profileMenuButton.addEventListener("click", () => {
    profileMenu.hidden = !profileMenu.hidden;
});