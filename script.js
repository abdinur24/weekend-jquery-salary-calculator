$(Onready);

let totalMonthly = [0];
function Onready(){
    console.log('Is this working')

    $('#employeeButton').on('click', addEmployee);

}

function addEmployee(){
    let firstName = $('#employeeFirst').val();
    let lastName = $('#employeeLast').val();
    let id = $('#employeeID').val();
    let title = $('#employeeTitle').val();
    let annualSalary = $('#employeeSalary').val();
    annualSalary

    console.log(firstName, lastName, id,title, annualSalary);

    $('#employeeBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td id="anny">${annualSalary}</td>
            <td><button class="delete-button">Delete</button></td>
        </tr>
    `);
    $('#employeeFirst').val('');
    $('#employeeLast').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#employeeSalary').val('');


    let sum = 0
    for(let i=0; i<annualSalary.length; i++){
        totalMonthly += Number(annualSalary[i])
        
    }
    $('#monthlySum').text(totalMonthly);

   
}

// function calculatingSum(){
//     for(let i=0; i<annualSalary.length; i++){
//         totalMonthly += annualSalary[i]
//     }
//     $('#monthlySum').text(totalMonthly);
// }


