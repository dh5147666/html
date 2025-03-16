const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};


const companyInfoDiv = document.getElementById("company-info");


companyInfoDiv.innerHTML = `<h2>Tên công ty: ${company.name}</h2>`;


let employeeList = "<ul>";
company.employees.forEach(employee => {
    employeeList += `<li>${employee.name} - ${employee.position}</li>`;
});
employeeList += "</ul>";


companyInfoDiv.innerHTML += employeeList;