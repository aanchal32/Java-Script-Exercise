const MOCK_POST_URL = "https://jsonplaceholder.typicode.com/posts";

function showMessage(message, isError = false) {
  
  if (isError) {
    console.error("❌ " + message);
  } else {
    console.log("✅ " + message);
  }
}

function submitRegistrationWithPromise(userData) {
  console.log("\n--- Submitting via Promise ---");

  fetch(MOCK_POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      showMessage(`Registration successful! Server assigned ID: ${data.id}`);
      console.log("Server response:", data);
    })
    .catch((error) => {
      showMessage(`Registration failed: ${error.message}`, true);
    });
}

function submitWithSimulatedDelay(userData) {
  console.log("\n--- Submitting with Simulated Delay ---");
  console.log("⏳ Processing your registration...");

  setTimeout(() => {
    fetch(MOCK_POST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        showMessage(`Delayed response received. ID: ${data.id}`);
      })
      .catch((err) => {
        showMessage(`Delayed request failed: ${err.message}`, true);
      });
  }, 2000); 
}

async function submitRegistrationAsync(userData) {
  console.log("\n--- Submitting via Async/Await ---");

  try {
    const response = await fetch(MOCK_POST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const data = await response.json();
    showMessage(`Async submission successful! ID: ${data.id}`);
    console.log("Response payload:", data);
  } catch (error) {
    showMessage(`Async submission failed: ${error.message}`, true);
  }
}


const registrationData = {
  userName: "Alice Johnson",
  email: "alice@example.com",
  selectedEvent: "Jazz Evening",
};

submitRegistrationWithPromise(registrationData);
submitWithSimulatedDelay(registrationData);
submitRegistrationAsync(registrationData);
