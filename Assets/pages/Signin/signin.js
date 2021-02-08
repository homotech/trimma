// User Login
signIn = () => {
  let mail, pass, rMe;
  mail = document.querySelector("#email");
  pass = document.querySelector("#password");
  rMe = document.querySelector("#remme");

  if (mail.value !== "" && pass.value !== "") {
    let datas = "mail=" + mail.value + "&password=" + pass.value;
    $.ajax({
      type: "POST",
      url: "signIn.php",
      data: datas,
      cache: false,
      success: (res) => {
        console.log(res);
      },
    });
    return false;
  } else {
    document.querySelector("#response").innerHTML =
      "<p class='error'>You inputted the wrong Email or Password.</p>";
  }
};
document.querySelector("#login").classList.add("loginnav");
