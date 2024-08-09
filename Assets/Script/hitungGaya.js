function getInput(key){
    const formData = new FormData(document.getElementById("formHitungGaya"));
    let value = Number(formData.get(key));
    return value;
}

function calculateMass(mass, acceleration){ 
    return mass*acceleration;
}

function setResult(result){
    const hasil = document.getElementById("hasil");
    hasil.innerText += ` ${result} Newton`;
}

//beri event untuk menghitung Gaya
const calculate = document.getElementById("calculate");
calculate.addEventListener('click',function(evt){
    setResult(calculateMass(getInput("mass"),getInput("acceleration")));
});