let count = 0;

let decrease = document.getElementById('decrease');
let increase = document.getElementById('increase');
let numberCount = document.getElementById('count');
//console.dir(numberCount);

decrease.addEventListener('click', () => {
    count = count - 1;
    numberCount.innerHTML = count;
})

increase.addEventListener('click', () => {
    count = count + 1;
    numberCount.innerHTML = count
})
// hello