let resultOne = document.querySelector('.resultOne');
let btnNumber = document.querySelector('.btn-info');

function getValue() {
    let inputValue = document.querySelector('.oneInput').value;
    /**/
    let str = inputValue;
    let regexp = /[1-9]/.test(str);
    console.log(regexp);
    /**/
    if (regexp == true && Number(inputValue)){
        return inputValue;
    } else {
        return false;
    }
}

function iterarion() {
    let prepare = getValue();
    let buildDiv = '';
    maxVidth = Number(prepare);
    console.log(maxVidth);
    if (maxVidth > 0 && maxVidth < 50) {
        for (let i = 0; i < prepare ; i++){
            buildDiv = `${buildDiv}<div class="res">${i}</div>`;
        }
    } else {
        buildDiv = 'string or zero';
    }
    resultOne.innerHTML = buildDiv;
}
btnNumber.addEventListener('click', iterarion);
/*let inputValue = document.querySelector('.oneInput');
btnNumber.onclick = () => {
    let value = +inputValue.value;
    console.log(value+2);
    switch (value) {
        case 10:
        console.log('no');
        break;
    }
}*/
/**********************************************/
let resultTwo = document.querySelector('.resultTwo');
let btnWords = document.querySelector('.btn-warning');
let arr = [];

function wordsArray() {
    let inputWords = document.querySelector('.twoInput').value;
    let answer = '';
    if (inputWords.length > 0){
        answer = '';
        arr.push(inputWords);
        answer = `${resultTwo.innerHTML}<div class="res">${inputWords}</div>`;
    }
    if (arr.length > 0){
        findLength = arr.length;
        for (let i = 0;  i < findLength ; i++){
            console.log(`Index - ${i}, value - ${arr[i]}`);
        }  
    }

    resultTwo.innerHTML = answer;
    
}

btnWords.addEventListener('click', wordsArray);
