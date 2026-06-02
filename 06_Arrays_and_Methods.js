let events = [
  { name: "Jazz Evening", category: "Music", date: "2025-08-10", seats: 20 },
  { name: "Baking Workshop", category: "Food", date: "2025-08-18", seats: 15 },
  { name: "Guitar Masterclass", category: "Music", date: "2025-09-01", seats: 10 },
  { name: "Oil Painting Class", category: "Art", date: "2025-09-14", seats: 8 },
];

events.push({ name: "Drum Circle", category: "Music", date: "2025-10-05", seats: 25 });
console.log("=== All Events After Push ===");
events.forEach((e) => console.log(` - ${e.name} [${e.category}]`));

const musicEvents = events.filter((e) => e.category === "Music");
console.log("\n=== Music Events Only ===");
musicEvents.forEach((e) => console.log(` - ${e.name}`));

const displayCards = events.map((e) => {
  if (e.category === "Food") return `Workshop on ${e.name.replace("Workshop", "").trim()}`;
  if (e.category === "Music") return `Live Music: ${e.name}`;
  if (e.category === "Art") return `Art Session: ${e.name}`;
  return e.name;
});

console.log("\n=== Formatted Display Cards ===");
displayCards.forEach((card) => console.log(` 🎟  ${card}`));

const musicCards = events
  .filter((e) => e.category === "Music")
  .map((e) => `🎵 ${e.name} — ${e.seats} seats on ${e.date}`);

console.log("\n=== Music Event Cards (filter + map) ===");
musicCards.forEach((card) => console.log(` ${card}`));
