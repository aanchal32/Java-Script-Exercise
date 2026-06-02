let events = [];


function addEvent(name, category, date, seats) {
  const event = { name, category, date, seats };
  events.push(event);
  console.log(`Event added: "${name}" [${category}]`);
}


function registerUser(userName, eventName) {
  const event = events.find((e) => e.name === eventName);
  if (!event) {
    console.log(`❌ Event "${eventName}" not found.`);
    return;
  }
  if (event.seats <= 0) {
    console.log(`❌ No seats available for "${eventName}".`);
    return;
  }
  event.seats--;
  console.log(`✅ ${userName} registered for "${eventName}". Seats left: ${event.seats}`);
}


function filterEventsByCategory(category, callback) {
  const filtered = events.filter((e) => e.category === category);
  return callback(filtered);
}

function createCategoryTracker(category) {

  let totalRegistrations = 0;

  return {
    register: function () {
      totalRegistrations++;
      console.log(`Total registrations for "${category}": ${totalRegistrations}`);
    },
    getCount: function () {
      return totalRegistrations;
    },
  };
}


function searchEvents(keyword, callback) {
  const results = events.filter((e) =>
    e.name.toLowerCase().includes(keyword.toLowerCase())
  );
  callback(results);
}


addEvent("Guitar Night", "Music", "2025-08-01", 20);
addEvent("Paint & Sip", "Art", "2025-08-15", 15);
addEvent("Jazz Evening", "Music", "2025-09-10", 10);
addEvent("Sketch Workshop", "Art", "2025-09-25", 8);

console.log("\n--- Registrations ---");
registerUser("Alice", "Guitar Night");
registerUser("Bob", "Guitar Night");

console.log("\n--- Filter Music Events ---");
filterEventsByCategory("Music", (results) => {
  results.forEach((e) => console.log(` - ${e.name} (${e.seats} seats left)`));
});

console.log("\n--- Category Tracker (Closure) ---");
const musicTracker = createCategoryTracker("Music");
musicTracker.register();
musicTracker.register();
console.log("Count:", musicTracker.getCount());

console.log("\n--- Dynamic Search ---");
searchEvents("night", (results) => {
  console.log(`Search results for "night":`);
  results.forEach((e) => console.log(` - ${e.name}`));
});
