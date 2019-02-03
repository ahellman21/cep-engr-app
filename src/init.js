// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var personal_info = {
  firstName: "Aaron",
  lastName: "Hellman",
  jobTitle: "Data Analyst",
  homeOffice: "Domain D2"
}

// using jQuery and the object above, display the information as the appropriate button is clicked
// document.getElementById("firstName").innerText = personal_info.firstName;
// function FNchange()
// {
//     var elem = document.getElementById("firstName");
//     if (elem.value=="Aaron") elem.value = "First Name";
//     else elem.value = "Aaron";
// }

function FNchange()
{
  var btn = document.getElementById("firstName");
  if (btn.value=="First Name") {
      document.getElementById("firstName").innerText = personal_info.firstName;
      document.getElementById("firstName").value = personal_info.firstName;
  }
  else {
      document.getElementById("firstName").innerText = "First Name";
      document.getElementById("firstName").value = "First Name";
  }
}

function LNchange()
{
  var btn = document.getElementById("lastName");
  if (btn.value=="Last Name") {
      document.getElementById("lastName").innerText = personal_info.lastName;
      document.getElementById("lastName").value = personal_info.lastName;
  }
  else {
      document.getElementById("lastName").innerText = "Last Name";
      document.getElementById("lastName").value = "Last Name";
  }
}

function JTchange()
{
  var btn = document.getElementById("jobTitle");
  if (btn.value=="Job Title") {
      document.getElementById("jobTitle").innerText = personal_info.jobTitle;
      document.getElementById("jobTitle").value = personal_info.jobTitle;
  }
  else {
      document.getElementById("jobTitle").innerText = "Job Title";
      document.getElementById("jobTitle").value = "Job Title";
  }
}

function HOchange()
{
  var btn = document.getElementById("homeOffice");
  if (btn.value=="Home Office") {
      document.getElementById("homeOffice").innerText = personal_info.homeOffice;
      document.getElementById("homeOffice").value = personal_info.homeOffice;
  }
  else {
      document.getElementById("homeOffice").innerText = "Home Office";
      document.getElementById("homeOffice").value = "Home Office";
  }
}
