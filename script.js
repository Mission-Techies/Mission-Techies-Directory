/*global $*/
var api_key = 'keykHpW6aYRPLUkNi';
var employeeRecords =  'https://api.airtable.com/v0/app8L37OgKQFawcvR/Employee%20Directory?api_key=' + api_key;

function renderRecords(data) {
    $(data.records).each(function(index, employee) {
      var employeeNames = employee.fields['Name'];
      var employeePhoneNumber = employee.fields['Phone #'];
      var employeeEmails = employee.fields['Email'];
      var employeeBirthdays = employee.fields['Birthday'];
      var employeeZipCodes = employee.fields['Zip Code'];
      var employeePic = employee.fields['Pictures'];
      var employeeInfo = '';
      
      if (employeeNames) {
        employeeInfo +=`<li>`;
                
        if (employeePic) {
          $.each(employeePic, function(i, pic){
            employeeInfo +=`<img src="${pic.url}">`;
          });
        }
        employeeInfo += ` Name: ${employeeNames} <br> Phone #: ${employeePhoneNumber}<br> Email: ${employeeEmails}<br> Birthday: ${employeeBirthdays}<br> Zip Codes: ${employeeZipCodes}`;
        employeeInfo +=`</li>`;
      }
      $('.employees').append(employeeInfo);
    });
}

$.get(employeeRecords, renderRecords);