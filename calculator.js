function insert(value){
    const textview = document.form1.textview.value;

    document.form1.textview.value = textview + value
}
function clearscreen(){
    document.form1.textview.value = '';
}

function equal(){
    try {
        let total = document.form1.textview.value;
        
        if(total){
            total = eval(total);
            document.form1.textview.value = total;
        } else {
            document.form1.textview.value = 'error';
        }
    } catch(error) {
        document.form1.textview.value = 'error';
    }
}
function backspace(){
    let total =  document.form1.textview.value;

    total = total.slice(0, -1);

    document.form1.textview.value = total;

}

function sqt(){
    let total =  document.form1.textview.value;

    total = Math.sqrt(eval(total));

    document.form1.textview.value = total;
}

function sqd(){
    let total =  document.form1.textview.value;

    total = eval(total) * eval(total)

    document.form1.textview.value = total;
}

function cbt(){
    let total =  document.form1.textview.value;

    total = document.form1.textview.value = Math.cbrt(eval(document.form1.textview.value));
    
    document.form1.textview.value = total;
}

function cbd(){
    let total =  document.form1.textview.value;

    total = document.form1.textview.value = eval(document.form1.textview.value) ** 3;

    document.form1.textview.value = total;
}