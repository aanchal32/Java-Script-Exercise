const events = [
  { id: 1, name: "Photography Walk", category: "Art", date: "2025-08-20", seats: 12 },
  { id: 2, name: "Jazz Evening", category: "Music", date: "2025-09-05", seats: 5 },
  { id: 3, name: "Baking Workshop", category: "Food", date: "2025-09-18", seats: 0 },
];

const container = document.querySelector("#event-container");
const statusMessage = document.querySelector("#status-message");

function renderEvents(eventList) {
  container.innerHTML = "";

  eventList.forEach((event) => {
    
    const card = document.createElement("div");
    card.className = "event-card";
    card.setAttribute("data-id", event.id);

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Date: ${event.date}</p>
      <p class="seats">Seats Available: <strong>${event.seats}</strong></p>
      <button class="register-btn" data-id="${event.id}" ${event.seats === 0 ? "disabled" : ""}>
        ${event.seats === 0 ? "Fully Booked" : "Register"}
      </button>
      <button class="cancel-btn" data-id="${event.id}">Cancel</button>
    `;

    container.appendChild(card);
  });
}

function handleRegister(eventId) {
  const event = events.find((e) => e.id === eventId);
  if (!event || event.seats <= 0) return;

  event.seats--;
  renderEvents(events);
  showStatus(`✅ Successfully registered for "${event.name}"!`);
}

function handleCancel(eventId) {
  const event = events.find((e) => e.id === eventId);
  if (!event) return;

  event.seats++;
  renderEvents(events);
  showStatus(`🔄 Registration cancelled for "${event.name}". Seat freed.`);
}

function showStatus(message) {
  statusMessage.textContent = message;
  setTimeout(() => (statusMessage.textContent = ""), 3000);
}

container.addEventListener("click", (e) => {
  const id = parseInt(e.target.getAttribute("data-id"));

  if (e.target.classList.contains("register-btn")) {
    handleRegister(id);
  } else if (e.target.classList.contains("cancel-btn")) {
    handleCancel(id);
  }
});

renderEvents(events);
