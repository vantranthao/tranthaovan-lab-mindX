var timeSheetData = [{
        project: 'Learn front-end',
        task: 'Learn HTML',
        time_spent: 6
    },
    {
        project: 'Learn front-end',
        task: 'Learn CSS',
        time_spent: 8
    },
    {
        project: 'Learn front-end',
        task: 'Learn JS var and operator types',
        time_spent: 6
    },
    {
        project: 'Learn git',
        task: 'Learn git basics',
        time_spent: 2
    },
];

// task 1
timeSheetData.forEach((value, index) => {
    console.log(index + 1);
    console.log(`Project: ${value.project}`);
    console.log(`Task: ${value.task}`);
    console.log(`Time spent: ${value.time_spent}`);
});

// task 3
console.log('\n')
var bodyTable = document.getElementById('table-body');
console.dir(bodyTable.innerText);
console.dir(bodyTable.innerHTML);

// task 4

timeSheetData.forEach((value, index) => {

    let html = `
        <tbody id="table-body">
            <tr>
                <td>${value.project}</td>
                <td>${value.task}</td>
                <td>${value.time_spent}</td>
                <td> <button id = 'line-${index}'> X </button> </td> 
            </tr>
        </tbody>
    `
    bodyTable.innerHTML += html;
});

// task 5 + 6
// input => value _ DOM
var addButton = document.getElementById('add-button');
var inputProject = document.getElementById('project');
var inputTask = document.getElementById('task');
var inputTimeSheet = document.getElementById('timesheet');
console.dir(inputProject);
addButton.addEventListener('click', () => {
    let addContentHTML = `
        <tbody id="table-body">
            <tr>
                <td>${inputProject.value}</td>
                <td>${inputTask.value}</td>
                <td>${inputTimeSheet.value}</td>
            </tr>
        </tbody>
    `
    // += la vi no con giu lai gia tri cu truoc kia cua no!
    bodyTable.innerHTML += addContentHTML;
})

// task 8

console.dir(bodyTable.children)
// console.dir(bodyTable.children[0].children[0].innerHTML);

// console.dir(bodyTable.children[0]);
var one = bodyTable.children;


// for (let i = 0; i < bodyTable.children.length; i++) {
//     console.log(bodyTable.children[i]);
// }

// var oneRun = bodyTable.;
// oneRun.forEach((value, index) => {
//     console.log(value)
// })


timeSheetData.forEach((value, index) => {

    let innerHTML_Here = `
        <tbody id="table-body">
            <tr>
                <td>${value.project}</td>
                <td>${value.task}</td>
                <td>${value.time_spent}</td>
                <td>    
                    <td> <button id = 'line-${index}-Delete'> X </button> </td>
                    <td> <button id = 'line-${index}-Update'> U </button> </td>
                </td>
            </tr>
        </tbody>
    `
    bodyTable.innerHTML += innerHTML_Here;
});

