function setNav(event, val) {
    clearNav();

    if (event) {
        event.currentTarget.className += " active";
    }
    else {
        let targetBtn = document.getElementById(`${val.toLowerCase()}Button`);
        targetBtn.className += " active";
    }
}

function clearNav() {
    let navButtons = document.getElementsByClassName("navbtn");
    for (let b = 0; b < navButtons.length; b++) {
        navButtons[b].className = navButtons[b].className.replace(" active", "");
    }
}

export {setNav}