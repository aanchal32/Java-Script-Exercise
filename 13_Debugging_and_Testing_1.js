function logStep(step, data = null) {
  console.groupCollapsed(`🔍 Step: ${step}`);
  if (data) console.log("Data:", data);
  console.trace();
  console.groupEnd();
}

function getBuggyFormData(form) {
  return {
    usrName: form.elements["userName"]?.value,
    email: form.elements["email"]?.value,
    selectedEvent: form.elements["selectedEvent"]?.value,
  };
}

function getFormData(form) {
  return {
    userName: form.elements["userName"]?.value.trim(),
    email: form.elements["email"]?.value.trim(),
    selectedEvent: form.elements["selectedEvent"]?.value,
  };
}

async function submitRegistrationDebug(form) {
  logStep("1 - Form submission started");

  const formData = getFormData(form);
  logStep("2 - Form data captured", formData);

  // Validate before sending
  if (!formData.userName || !formData.email || !formData.selectedEvent) {
    console.error("❌ Validation failed — missing fields:", formData);
    return;
  }
  logStep("3 - Validation passed");

  const payload = JSON.stringify(formData);
  logStep("4 - Payload prepared", payload);

  try {
    logStep("5 - Sending fetch request to API");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });

    logStep("6 - Response received", { status: response.status, ok: response.ok });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const result = await response.json();
    logStep("7 - Response parsed", result);

    console.log("✅ Registration successful:", result);
  } catch (error) {
    console.error("❌ Fetch failed at step. Error:", error);
    console.error("Stack trace:", error.stack);
  }
}  

const sampleEvents = [
  { name: "Jazz Evening", seats: 10 },
  { name: "Baking Class", seats: 0 },
];
console.table(sampleEvents);
