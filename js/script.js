const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

emailjs.init({
  publicKey: "0SBFDRL3fyyiKZdwz",
});
function sendMessage(event) {
  event.preventDefault();

  const button = document.querySelector(".contact-form button");
  const message = document.getElementById("form-message");

  button.disabled = true;
  button.textContent = "Sending...";

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_kjzbsk9", "template_tlec5x7", params)
    .then(() => {
      message.style.color = "#4ade80";
      message.textContent = "✅ Your message has been sent successfully to Josh's email! Please wait for a response. Thankyou for reaching out :)";

      document.querySelector(".contact-form").reset();
    })
    .catch((error) => {
      console.error(error);

      message.style.color = "#ef4444";
      message.textContent =
        "Message failed to sned. Please try again.";
    })
    .finally(() => {
      button.disabled = false;
      button.textContent = "Send Message ↗";
    });
}
