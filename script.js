$(Onready);

let totalMonthly = [];
function Onready() {
    console.log('Is this working')

    $('#employeeButton').on('click', addEmployee);
    $('#employeeBody').on('click', '.delete-button', deleteEmployee)

}

function addEmployee() {
    let firstName = $('#employeeFirst').val();
    let lastName = $('#employeeLast').val();
    let id = $('#employeeID').val();
    let title = $('#employeeTitle').val();
    let annualSalary = $('#employeeSalary').val();



    console.log(firstName, lastName, id, title, annualSalary);

    $('#employeeBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td class="annual-salary">${annualSalary}</td>
            <td><button class="delete-button">Delete</button></td>
        </tr>
    `);
    $('#employeeFirst').val('');
    $('#employeeLast').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#employeeSalary').val('');

    totalMonthly.push(annualSalary)
    let sum = 0
    for (let i = 0; i < totalMonthly.length; i++) {
        sum += Number(totalMonthly[i])
    }
    $('.monthlySum').text(sum);

    
    if(sum > 20000){
        $('.balance').css("color", 'red')
    }
}

function deleteEmployee(event) {
    $(event.target).closest('tr').remove();
}
// function showTotalMonthly(){
//     let sum = 0;
//     totalMonthly.push(annualSalary);
//     for(let i=0; i<totalMonthly; i++){
//         sum += totalMonthly[i]
//     }
//     $('#monthlySum').text(sum);
// }


