const resultInput = document.getElementById('result');
const btnEle = document.querySelectorAll('.button button');
btnEle.forEach(function(button) {
    button.addEventListener('click', function() {

        btnEle.forEach(function(btn){
            btn.classList.remove('active')
        });
        button.classList.add('active');

        const value = button.textContent;

        if(value === 'ac'){
            resultInput.value = '';
        } else if(value === '=') {
            try{
                resultInput.value = eval(resultInput.value);
            } catch(error){
                resultInput.value = 'Error';
            }
        }else{
            resultInput.value += value;
        }
    });
});