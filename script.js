$(Onready);

// emepty array to catch the employee annual salary
let totalMonthly = [];

// onReady function has two click events one to add the inputs onto the table and one to delete a certain row of the table
function Onready() {
    console.log('Is this working')

    $('#employeeButton').on('click', addEmployee);
    $('#employeeBody').on('click', '.delete-button', deleteEmployee)

}

// addEmployee 
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

    totalMonthly.push(annualSalary);
    showTotalMonthly();
    // let sum = 0
    // for (let i = 0; i < totalMonthly.length; i++) {
    //     sum += Number(totalMonthly[i])
    // }
    // $('.monthlySum').data(sum);


    // if(sum > 20000){
    //     $('.balance').css("color", 'red')
    // }    
}


function showTotalMonthly() {
    let sum = 0;
    for (let i = 0; i < totalMonthly.length; i++) {
        sum += Number(totalMonthly[i])
        $('.monthlySum').text(sum);
    }
    $('.monthlySum').text(sum);
    if (sum > 20000) {
        $('.balance').css("color", 'red')
    }
}




function deleteEmployee(event) {
    $(event.target).closest('tr').remove();

    // for (let i = 0; i < totalMonthly.length; i++) {
    //     // deletedTotal = totalMonthly
    //     totalMonthly.pop(totalMonthly[i]);
    //     sum2 += totalMonthly[i]
    //     $('.monthlySum').text(sum2)
    // }
    // showTotalMonthly();
    // $('.monthlySum').remove(totalMonthly)
    // $('.monthlySum').text(totalMonthly)

}





