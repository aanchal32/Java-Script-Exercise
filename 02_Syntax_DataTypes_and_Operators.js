
const eventName = "Community Music Night";
const eventDate = "2025-07-15";
let availableSeats = 50;

const eventInfo = `Event: ${eventName} | Date: ${eventDate} | Seats Available: ${availableSeats}`;
console.log(eventInfo);

availableSeats--;
console.log(`After registration: ${availableSeats} seats remaining.`);

availableSeats++;
console.log(`After cancellation: ${availableSeats} seats available.`);
