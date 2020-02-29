var inputUser = document.getElementById('text-here');
var startButton = document.getElementById('start');
var endButton = document.getElementById('end');
var numCount = document.getElementById('count');

console.dir(inputUser);

// inputUser.value

startButton.addEventListener('click', () => {
    numCount.innerHTML = inputUser.value;
    oneCount = Number(inputUser.value);
    
    myCount = setInterval(f, 1000);
    function f() {
        oneCount = oneCount - 1;
        console.log(oneCount);
        numCount.innerHTML = oneCount;
    }
})

endButton.addEventListener('click', () => {
    clearInterval(myCount);
})