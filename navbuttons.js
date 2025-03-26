function setNav(event, val) {
    clearNav();

    if (event) {
        event.currentTarget.className += " active";
    }
    else {
        let targetBtn = document.getElementById(`${val.toLowerCase()}Button`);
        targetBtn.className += " active";
    }

    document.getElementById(val).style.display = "block";
}

function clearNav() {
    let navButtons = document.getElementsByClassName("navbtn");
    for (let b = 0; b < navButtons.length; b++) {
        navButtons[b].className = navButtons[b].className.replace(" active", "");
    }

    let tabs = document.getElementsByClassName("navtab");
    for (let t = 0; t < tabs.length; t++) {
        tabs[t].style.display = "none";
    }
}

export {setNav}