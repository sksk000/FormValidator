var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");
var confirmvalidtext = document.getElementById("confirmvalidtext");

//入力された内容が正しいか確認を行う
function isFormValidate() {
  //ユーザー名
  if (username.value.length < 3) {
    username.classList.add("is-invalid");
  } else {
    username.classList.remove("is-invalid");
    username.classList.add("is-valid");
  }

  //メールアドレス
  if (!email.value.match(/.+@.+\..+/) || email.value.length < 0) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }

  //パスワード
  if (password.value.length < 6) {
    password.classList.add("is-invalid");
  } else {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  }

  //パスワード再入力
  if (password.value.length <= 0) {
    confirmpassword.classList.add("is-invalid");
    confirmvalidtext.textContent = "Password2 is required";
  } else if (password.value !== confirmpassword.value) {
    confirmpassword.classList.add("is-invalid");
    confirmvalidtext.textContent = "Passwords do not match";
  } else {
    confirmpassword.classList.remove("is-invalid");
    confirmpassword.classList.add("is-valid");
  }
}
