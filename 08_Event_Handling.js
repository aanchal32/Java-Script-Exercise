const events = [
  { id: 1, name: "Jazz Evening", category: "Music", seats: 10 },
  { id: 2, name: "Sketch Workshop", category: "Art", seats: 8 },
  { id: 3, name: "Baking Class", category: "Food", seats: 0 },
  { id: 4, name: "Guitar Night", category: "Music", seats: 15 },
  { id: 5, name: "Watercolor Session", category: "Art", seats: 5 },
];

const container = document.querySelector("#event-container");
const categoryFilter = document.querySelector("#category-filter");
const searchInput = document.querySelector("#search-input");

function renderEvents(eventList) {
  container.innerHTML = "";

  if (eventList.length === 0) {
    container.innerHTML = "<p>No events found.</p>";
    return;
  }

  eventList.forEach((event) => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Seats: ${event.seats}</p>
      <button 
        id="register-${event.id}" 
        ${event.seats === 0 ? "disabled" : ""}
      >
        ${event.seats === 0 ? "Fully Booked" : "Register"}
      </button>
    `;

    const btn = card.querySelector(`#register-${event.id}`);
    btn.onclick = function () {
      if (event.seats > 0) {
        event.seats--;
        alert(`✅ Registered for "${event.name}"! Seats left: ${event.seats}`);
        renderEvents(getFilteredEvents());
      }
    };

    container.appendChild(card);
  });
}

function getFilteredEvents() {
  const category = categoryFilter.value;
  const keyword = searchInput.value.toLowerCase();

  return events.filter((e) => {
    const matchesCategory = category === "all" || e.category === category;
    const matchesSearch = e.name.toLowerCase().includes(keyword);
    return matchesCategory && matchesSearch;
  });
}

categoryFilter.onchange = function () {
  renderEvents(getFilteredEvents());
};

searchInput.addEventListener("keydown", function (e) {

  renderEvents(getFilteredEvents());

  if (e.key === "Enter") {
    console.log(`Searching for: "${searchInput.value}"`);
  }
});

renderEvents(events);
