let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle")

// check if darkmode is enabled
// if it`s enabled, turn it off
// if it`s disabled turn it on

const enableDarkmode = () => {
    // 1. add the class darkmode to body
    document.body.classList.add("darkmode");
    // 2. update darkMode in the local storage
    localStorage.setItem("darkMode", "enabled");
};
const disableDarkmode = () => {
    // 1. add the class darkmode to body
    document.body.classList.remove("darkmode");
    // 2. update darkMode in the local storage
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkmode();
}

darkModeToggle.addEventListener("click", () =>{
    darkMode = localStorage.getItem("darkMode");
   if (darkMode !== "enabled") {
    enableDarkmode();
    console.log(darkMode);
   } else {
    disableDarkmode ();
    console.log(darkMode);
   }
})