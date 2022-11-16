const btnSubmit = document.querySelector('#btn');

btnSubmit.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input');
    let result = [];
    document.querySelector('.error').innerHTML = '';
    for (let input of inputs) {
        if (input.value == '') {
            document.querySelector('.error').innerHTML += 'Введите данные';
        }
        cleanedData = input.value.trim();
        formatedData = cleanedData[0].toUpperCase() + cleanedData.slice(1).toLowerCase();
        result.push(formatedData);
    }
    document.querySelector('.outputResult').innerHTML += result.join(' ');
    })