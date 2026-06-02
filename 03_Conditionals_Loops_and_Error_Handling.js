/**
 * ============================================================
 * Module 1 - Exercise 3: Conditionals, Loops, and Error Handling
 * Project Theme: Local Community Event Portal
 * ============================================================
 *
 * Scenario:
 *   Only show valid events and limit registrations.
 *
 * Objective:
 *   Apply conditions and handle invalid data.
 *
 * User Story:
 *   As a user, I want only upcoming events with seats to be displayed.
 *
 * Tasks:
 *   - Use if-else to hide past or full events
 *   - Loop through the event list and display using forEach()
 *   - Wrap registration logic in try-catch to handle errors
 * ============================================================
 */

const today = new Date();

const events = [
  { name: "Art Workshop", date: new Date("2025-08-10"), seats: 10 },
  { name: "Old Music Fest", date: new Date("2023-03-01"), seats: 5 },
  { name: "Coding Bootcamp", date: new Date("2025-09-20"), seats: 0 },
  { name: "Food Carnival", date: new Date("2025-10-05"), seats: 30 },
];

// Task 1 & 2: Loop through events and use if-else to filter past or full events
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

// Task 3: Wrap registration logic in try-catch
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

// Test registrations
registerForEvent(events[0], "Alice");       // Should succeed
registerForEvent(events[1], "Bob");         // Should fail (past event)
registerForEvent(events[2], "Charlie");     // Should fail (no seats)
registerForEvent(events[3], null);          // Should fail (invalid name)
