

function changeToNumber(str) {
    let number;
    str.includes('.') ? number = parseFloat(str) : number = parseInt(str);
    return number;
}

function display(val) {
    const el = document.querySelector(".display");
    val === null ? el.innerHTML = '' : el.innerHTML += val;
}

export { changeToNumber, display }