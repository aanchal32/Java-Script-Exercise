const events = [
  { id: 1, name: "Jazz Evening", category: "Music", date: "2025-08-10", seats: 20 },
  { id: 2, name: "Sketch Workshop", category: "Art", date: "2025-09-05", seats: 8 },
  { id: 3, name: "Baking Class", category: "Food", date: "2025-09-18", seats: 15 },
  { id: 4, name: "Guitar Night", category: "Music", date: "2025-10-01", seats: 0 },
];

function getEventSummary(event, label = "Event") {
  return `${label}: ${event.name} on ${event.date} (${event.seats} seats)`;
}

console.log("=== Default Parameters ===");
console.log(getEventSummary(events[0]));
console.log(getEventSummary(events[1], "Featured"));


console.log("\n=== Destructuring ===");

const { name, category, date, seats } = events[0];
console.log(`Name: ${name}, Category: ${category}, Date: ${date}, Seats: ${seats}`);

function displayEvent({ name, category, seats }) {
  console.log(`📋 ${name} [${category}] — ${seats > 0 ? `${seats} seats left` : "Fully Booked"}`);
}

events.forEach(displayEvent);


const [firstEvent, secondEvent] = events;
console.log(`\nFirst event: ${firstEvent.name}`);
console.log(`Second event: ${secondEvent.name}`);


console.log("\n=== Spread Operator (Safe Clone + Filter) ===");

const clonedEvents = [...events];

const musicEvents = clonedEvents.filter((e) => e.category === "Music");
console.log("Music events (from cloned array):");
musicEvents.forEach((e) => console.log(` - ${e.name}`));

const newEvents = [
  { id: 5, name: "Open Mic Night", category: "Music", date: "2025-11-01", seats: 30 },
];
const allEvents = [...events, ...newEvents];
console.log(`\nMerged event count: ${allEvents.length}`);

const updatedEvent = { ...events[0], seats: events[0].seats - 1 };
console.log(`\nOriginal seats: ${events[0].seats}`);
console.log(`Updated copy seats: ${updatedEvent.seats}`);
