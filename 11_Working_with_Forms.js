const form = document.querySelector("#registration-form");
const successMessage = document.querySelector("#success-message");

function showError(id, message) {
  document.querySelector(`#${id}`).textContent = message;
}

function clearError(id) {
  document.querySelector(`#${id}`).textContent = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = form.elements["userName"].value.trim();
  const email = form.elements["email"].value.trim();
  const selectedEvent = form.elements["selectedEvent"].value;

  clearError("name-error");
  clearError("email-error");
  clearError("event-error");
  successMessage.textContent = "";

  let isValid = true;

  if (!userName) {
    showError("name-error", "⚠️ Name is required.");
    isValid = false;
  } else if (userName.length < 2) {
    showError("name-error", "⚠️ Name must be at least 2 characters.");
    isValid = false;
  }

  if (!email) {
    showError("email-error", "⚠️ Email is required.");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email-error", "⚠️ Enter a valid email address.");
    isValid = false;
  }

  if (!selectedEvent) {
    showError("event-error", "⚠️ Please select an event.");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = `🎉 Thank you, ${userName}! You've registered for "${selectedEvent}". Confirmation sent to ${email}.`;
    form.reset();
    console.log("Form submitted:", { userName, email, selectedEvent });
  }
});
