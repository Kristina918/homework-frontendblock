let formSignUp = document.getElementById("signupForm");

// Событие submit

formSignUp.addEventListener("submit", function (event) {
  event.preventDefault();

  // Список полей
  let usernameInput = document.getElementById("username");
  let username = document.getElementById("username").value;
  let emailInput = document.getElementById("email");
  let email = document.getElementById("email").value;
  let passwordInput = document.getElementById("password");
  let password = document.getElementById("password").value;
  let confirmPasswordInput = document.getElementById("confirmPassword");
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Блок для ошибок

  let usernameError = document.getElementById("usernameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");

  // Сброс текста в ошибке
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  // Условия для поля username

  if (!username) {
    usernameError.textContent = "Введите имя пользователя";
    usernameInput.style.borderColor = "red";
    isValid = false;
  } else {
    usernameInput.style.borderColor = "green";
  }
  if (username.length < 4) {
    usernameError.textContent =
      "Имя пользователя должно быть не менее 4 символов";
    usernameInput.style.borderColor = "red";
    isValid = false;
  } else {
    usernameInput.style.borderColor = "green";
  }

  // Условия для поля email

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    emailError.textContent = "Введите email";
    isValid = false;
    emailInput.style.borderColor = "red";
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Некорректный email";
    isValid = false;
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "green";
  }

  // Условия для поля password

  if (!password) {
    passwordError.textContent = "Введите пароль";
    isValid = false;
    passwordInput.style.borderColor = "red";
  } else if (password.length < 6) {
    passwordError.textContent = "Пароль должен быть не менее 6 символов";
    isValid = false;
    passwordInput.style.borderColor = "red";
  } else {
    passwordInput.style.borderColor = "green";
  }

  // Условия для поля confirm password

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Пароли не совпадают";
    isValid = false;
    confirmPasswordInput.style.borderColor = "red";
  }
  if (confirmPassword.length < 1) {
    confirmPasswordError.textContent = "Установите пароль";
    isValid = false;
    confirmPasswordInput.style.borderColor = "red";
  } else {
    confirmPasswordInput.style.borderColor = "green";
  }

  // Проверка формы на true по всем условиям выше

  if (isValid) {
    alert("Форма отправлена успешно!");
  }
});
