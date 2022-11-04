const colorThemes = document.querySelectorAll('[name="theme"]');

//storing theme
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
} 

colorThemes.forEach((themeOption) =>{
    themeOption.addEventListener("click", () => {
        storeTheme(themeOption.id);
    })
})


//apply theme 

const getTheme = function() {
    const currentTheme =  localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if(themeOption.id === currentTheme) {
            themeOption.checked = true;
        }
    })
}
document.onload = getTheme();