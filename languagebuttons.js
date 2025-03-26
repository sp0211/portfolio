import textData from "/text.json" with {"type" : "json"};


function setLanguage(event, val) {
    clearLanguage();

    if (event) {
        event.currentTarget.className += " active";
    }
    else {
        let targetBtn = document.getElementById(`${val.toLowerCase()}Button`);
        targetBtn.className += " active";
    }

    updateText(val);
}

function clearLanguage() {
    let langButtons = document.getElementsByClassName("langbtn");
    for (let b = 0; b < langButtons.length; b++) {
        langButtons[b].className = langButtons[b].className.replace(" active", "");
    }
}

function updateText(lang) {
    let translationTable = textData[lang];

    if (!translationTable) {
        console.error("Attempting to set text to unrecognized language");
    }

    let langFont = textData[lang]["font"];

    let translatableElements = document.getElementsByClassName("translatable");
    for (let i = 0; i < translatableElements.length; i++) {
        let key = translatableElements[i].id;
        console.log(key);
        let val = textData[lang][key];
        console.log(val);
        
        if (val) {
            translatableElements[i].innerHTML = val;
            translatableElements[i].style["font-family"] = langFont;
        }
    }
}

export {setLanguage}
