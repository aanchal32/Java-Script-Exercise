const MOCK_API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

function fetchEventsWithPromise() {
  console.log("Fetching events using .then()/.catch()...");

  fetch(MOCK_API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Events fetched successfully (Promise):");
      data.forEach((item) => console.log(` - ${item.title}`));
    })
    .catch((error) => {
      console.error("Failed to fetch events:", error.message);
    });
}


function showSpinner() {

  console.log("⏳ Loading events...");
}

function hideSpinner() {

  console.log("✅ Done loading.");
}

async function fetchEventsAsync() {
  showSpinner();

  try {
    const response = await fetch(MOCK_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("\nEvents fetched successfully (async/await):");
    data.forEach((item) => console.log(` - ${item.title}`));
  } catch (error) {
    console.error("Error fetching events:", error.message);
  } finally {
    hideSpinner();
  }
}

fetchEventsWithPromise();
fetchEventsAsync();
