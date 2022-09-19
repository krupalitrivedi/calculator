function disp(val) {

    document.getElementById('ip').value += val;

}

function ev() {

    let y = eval(document.getElementById('ip').value);

    document.getElementById('ip').value = y;

}

function clrscr() {
    document.getElementById("ip").value = "";
}
