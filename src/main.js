import { setNav } from "./navbuttons.js";
import { setLanguage } from "./languagebuttons.js";

setLanguage(null, "en");
setNav(null, "bio");

// Make the functions callable in the global scope
window.setNav = setNav;
window.setLanguage = setLanguage;
