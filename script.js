const contactContainer = document.querySelector(".contactForm");
const sendButt = contactContainer.querySelector("button");
const emailInput = contactContainer.querySelector("input");
const message = document.querySelector(".formMessage");

sendButt.addEventListener("click", function () {
  const email = emailInput.value;
  message.className = "formMessage";
  if (!email.includes("@")) {
    message.textContent = "Invalid email.";
    message.classList.add("error");
    return;
  }
  message.textContent = "Message sent.";
  message.classList.add("success");
  emailInput.value = "";
});
