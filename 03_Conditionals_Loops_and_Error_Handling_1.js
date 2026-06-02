const today = new Date();

const events = [
  { name: "Art Workshop", date: new Date("2025-08-10"), seats: 10 },
  { name: "Old Music Fest", date: new Date("2023-03-01"), seats: 5 },
  { name: "Coding Bootcamp", date: new Date("2025-09-20"), seats: 0 },
  { name: "Food Carnival", date: new Date("2025-10-05"), seats: 30 },
];


console.log("=== Upcoming Events with Available Seats ===");
events.forEach((event) => {
  if (event.date < today) {
    console.log(`[HIDDEN] "${event.name}" is a past event.`);
  } else if (event.seats === 0) {
    console.log(`[HIDDEN] "${event.name}" is fully booked.`);
  } else {
    console.log(`[VISIBLE] ${event.name} on ${event.date.toDateString()} — ${event.seats} seats left.`);
  }
});

function registerForEvent(event, userName) {
  try {
    if (!userName || typeof userName !== "string") {
      throw new Error("Invalid user name provided.");
    }
    if (event.date < today) {
      throw new Error(`Cannot register: "${event.name}" has already passed.`);
    }
    if (event.seats <= 0) {
      throw new Error(`Cannot register: "${event.name}" is fully booked.`);
    }

    event.seats--;
    console.log(`\n✅ ${userName} successfully registered for "${event.name}". Seats left: ${event.seats}`);
  } catch (error) {
    console.error(`\n❌ Registration failed: ${error.message}`);
  }
}

registerForEvent(events[0], "Alice");       
registerForEvent(events[1], "Bob");         
registerForEvent(events[2], "Charlie");    
registerForEvent(events[3], null);         
