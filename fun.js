function disp(val){

    document.getElementById('ip').value += val;

    return val;

}

function evaluate(){

    let x = document.getElementById('ip').value

    let y = eval(x);

    document.getElementById('ip').value = y

    return y

}  

 function clr() {
            document.getElementById("ip").value = ""
        }