function Event(name, category, date, seats) {
  this.name = name;
  this.category = category;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  if (this.seats > 0) {
    return `"${this.name}" has ${this.seats} seat(s) available.`;
  } else {
    return `"${this.name}" is fully booked.`;
  }
};

class EventClass {
  constructor(name, category, date, seats) {
    this.name = name;
    this.category = category;
    this.date = date;
    this.seats = seats;
  }

  checkAvailability() {
    return this.seats > 0
      ? `"${this.name}" has ${this.seats} seat(s) available.`
      : `"${this.name}" is fully booked.`;
  }
}

const event1 = new Event("Photography Walk", "Art", "2025-08-20", 12);
const event2 = new Event("Open Mic Night", "Music", "2025-09-05", 0);

console.log("=== Using Constructor Function + Prototype ===");
console.log(event1.checkAvailability());
console.log(event2.checkAvailability());

console.log("\n=== Object.entries() — Event Details ===");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});

console.log("\n=== Using ES6 Class ===");
const event3 = new EventClass("Yoga in the Park", "Wellness", "2025-10-01", 25);
console.log(event3.checkAvailability());

console.log("\n=== Object.entries() — event3 ===");
Object.entries(event3).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});
