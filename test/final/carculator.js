const resultInput = document.getElementById('result');
const btnEle = document.querySelectorAll('.button button');

for (let i = 0; i < btnEle.length; i++) {
    const button = btnEle[i];
    button.addEventListener('click', function () {
        for (let j = 0; j < btnEle.length; j++) {
            btnEle[j].style.backgroundColor = '';
        }
        button.style.backgroundColor = 'yellow';

        const value = btnEle[i].textContent;
        if (value === 'AC') {
            resultInput.value = '';
        } else if (value === '=') {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = 'Error';
            }
        } else {
            resultInput.value += value;
        }
    });
}
