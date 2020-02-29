var one = Math.floor(Math.random()*100+1);
var two = Math.floor(Math.random()*100+1);

var operator = ['+', '-', 'x', ':'];
operator.forEach((value, index) => {
    console.log(value);
});

var randomOperator = Math.floor(Math.random()*operator.length+1);
console.log(randomOperator);