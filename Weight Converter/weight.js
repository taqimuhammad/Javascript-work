document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsinput').addEventListener('input',input);

function input(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    //convert pounds to grams
    document.getElementById('gramsOutput').innerHTML = lbs/0.002206; 
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;

}
