const bfBtn = document.getElementById('get-bf');
const bfBox = document.getElementById('what-having');

const getBreakfast = e => {
    e.preventDefault();
    const choices = ['Pancakes', 'Waffles', 'Veggie Scramble', 'Egg Sandwich', 'Scrambled Eggs w/ Bacon', 'Potato Scramble', 'Omlets', 'Swedish Pancakes', 'Oatmeal', 'Cereal', 'Puffy Pancake']
    const i = Math.floor(Math.random() * choices.length);
    bfBox.textContent = choices[i]
}

bfBtn.addEventListener('click', getBreakfast);