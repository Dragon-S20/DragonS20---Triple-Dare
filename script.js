"use strict"
const modeInput = document.getElementById("flexSwitchCheckChecked")
modeInput.addEventListener("change", () => {
    console.log(modeInput.checked)
    if (modeInput.checked) {
        document.body.classList.add("bg-dark", "text-white")
    } else {
        document.body.classList.remove("bg-dark", "text-white")
    }
} )