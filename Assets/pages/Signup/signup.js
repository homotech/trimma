let fname = document.querySelector("#fnames");
let password = document.querySelector("#password");
let ChoiceEmployer = document.querySelector("#ChoiceEmployer");
let ChoiceEmployee = document.querySelector("#ChoiceEmployee");
let employerform = document.querySelector("#employer");
let employeeform = document.querySelector("#employee");
const fullname = () => {
  document.querySelector(".info").innerHTML = "or Company's name";
};
const fullnameout = () => {
  document.querySelector(".info").innerHTML = "";
};
const passwordcheck = () => {
  // alert("Hello world");
};
const passwordcheckout = () => {
  // alert("hi world");
};
const makeChoice = (id) => {
  if (id == "ChoiceEmployer") {
    employerform.classList.remove("hide");
    employeeform.classList.add("hide");
    ChoiceEmployer.classList.remove("button-notactive");
    ChoiceEmployee.classList.add("button-notactive");
  } else {
    employerform.classList.add("hide");
    employeeform.classList.remove("hide");
    ChoiceEmployer.classList.add("button-notactive");
    ChoiceEmployee.classList.remove("button-notactive");
  }
};
fname.addEventListener("focus", fullname);
fname.addEventListener("focusout", fullnameout);
password.addEventListener("focus", passwordcheck);
password.addEventListener("focusout", passwordcheckout);
ChoiceEmployer.addEventListener("click", () =>
  makeChoice(this.ChoiceEmployer.id)
);
ChoiceEmployee.addEventListener("click", () =>
  makeChoice(this.ChoiceEmployee.id)
);

//CODE BELOW IS FOR THE PHP AND BACKEND
//Employee's registration section
function regEmployee() {
  let pass = document.querySelector("#passwordE");
  let cpass = document.querySelector("#CpasswordE");
  let age = document.querySelector("#age");
  let work = document.querySelector("#work");
  let company = document.querySelector("#companysname");
  let address = document.querySelector("#addressE");
  let mail = document.querySelector("#emailE");
  if (
    fname !== "" &&
    cpass.value !== "" &&
    pass.value !== "" &&
    age.value !== "" &&
    work.value !== "" &&
    company.value !== "" &&
    address.value !== "" &&
    mail.value !== ""
  ) {
    // if (pass.value == cpass.value) {

    var obj =
      "name=" +
      fname.value +
      "&company=" +
      company.value +
      "&age=" +
      age.value +
      "&Iwork=" +
      work.value +
      "&add=" +
      address.value +
      "&mail=" +
      mail.value +
      "&password=" +
      pass.value;
    // AJAX code to submit the users information to backend
    $.ajax({
      type: "POST",
      url: "signupE.php",
      data: obj,
      cache: false,
      success: (res) => {
        document.querySelector("#response").innerText = res;
      },
    });
    // }else{
    //   document.querySelector("#response").innerHTML = "<p class='error'>All fields must not be empty..</p>";
    // }
  } else {
    document.querySelector(".helppassmatch").innerHTML =
      "<p class='error'>password does'nt match.</p>";
  }
  return false;
}

//Employers section
regEmployer = () => {
  let cpass = document.querySelector("#Cpassword");
  let company = document.querySelector("#cnames");
  let address = document.querySelector("#address");
  let mail = document.querySelector("#email");
  if (
    cpass.value !== "" &&
    company.value !== "" &&
    address.value !== "" &&
    mail.value !== "" &&
    password.value !== ""
  ) {
    // if (password.value == cpass.value) {
    var info =
      "name=" +
      company.value +
      "&pass=" +
      password.value +
      "&address=" +
      address.value +
      "&mail=" +
      mail.value;
    //Sending iformation to the backend
    $.ajax({
      type: "POST",
      url: "signup.php",
      data: info,
      cache: false,
      success: (res) => {
        document.querySelector("#response").innerHTML =
          "<p class='success'>Employer successfully registered.</p>";
      },
    });
    // } else {
    //   document.querySelector(".help passmatch").innerHTML = "<p class='error'>password does'nt match.</p>";
    // }
    return false;
  } else {
    document.querySelector("#response").innerHTML =
      "<p class='error'>All fields must not be empty..</p>";
  }
};
//CODE BELOW THIS LINE SETS THE ACTIVE INDICATOR FOR THE SIGNUP
document.querySelector("#signup").classList.add("signupnav");
