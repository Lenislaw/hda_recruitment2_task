// UI functions
// Show Alert function
const showAlert = (msg, className) => {
  console.log("Show Alert type:", className, ", msg:", msg);
  // Create div
  const div = document.createElement("div");
  // Add class
  div.classList = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(msg));
  // Get element
  const container = document.getElementById("alert-box");
  container.appendChild(div);
  // Timeout after 3 sec
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};
// Show Results function
const showResults = (users, fetch) => {
  console.log("Show results");
  // get list
  const ul = document.getElementById("result");
  // Init variable let for inner HTML
  let results = "";
  // if statement for define ul inner HTML
  if (users.length > 0 && fetch) {
    users.forEach((user) => {
      results += `<li>${user.name} - ${user.age}</li>`;
    });
  } else if (users.length === 0 && fetch) {
    results = "Nothing found!";
  } else {
    results = "Nothing to find!";
  }
  // ul inner HTML replacement
  ul.innerHTML = results;
};
// Clear fields function
const clearFields = () => {
  console.log("Clear fields");
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
};
// FETCH functions

// Create member function
const createMember = (name, age) => {
  const member = { name, age };
  return member;
};

let delay;

// Get members function  FETCH GET
const setDelayFetch = (text) => {
  if (text === "") {
    showResults([0], false);
  } else {
    delay = setTimeout(async () => {
      console.log("Start FETCH/get");
      try {
        const membersResponse = await fetch(
          `http://localhost:5000/api/members/${text}`
        );
        if (membersResponse.ok) {
          const members = await membersResponse.json();
          showResults(members, true);
        } else {
          throw new Error(`Http error: ${memberResponse.status}`);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }, 500);
  }
};
// Clear Timer function
const clearTimer = () => {
  console.log("Stop before FETCHING");
  clearTimeout(delay);
};

// Add member function  FETCH POST
const addMember = async (member) => {
  try {
    // Try send member to DB
    console.log("Start FETCH/post");
    const addMember = await fetch("http://localhost:5000/api/members", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(member),
    });
    // If member added
    if (addMember.ok) {
      const success = await addMember.json();

      if (success.success) {
        showAlert("SUCCESS: Added to DB", "success");
      } else {
        // Show error alert
        showAlert("ERROR: something went wrong! Try again later!", "error");
      }
    }
  } catch (error) {
    showAlert("ERROR: something went wrong! Try again later!", "error");
  }
};

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
  console.log("DomContentLoad");
  // Event listener for find member/-s
  document.getElementById("find-member").addEventListener("input", (e) => {
    console.log("Typing in search input:", e.target.value);
    e.preventDefault();
    // Variable with value to search
    const valueToSearch = e.target.value;

    clearTimer();
    setDelayFetch(valueToSearch);

    // Listener for show results box
  });
  document.getElementById("find-member").addEventListener("focus", () => {
    document.getElementById("result-box").classList.remove("hide");
  });

  // Event Listeners for add member
  document.getElementById("add-member").addEventListener("submit", (e) => {
    console.log("Add clicked");
    // Get form values
    e.preventDefault();

    // Get values from inputs
    const nameValue = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    // Convert name input value into name format to string. "first letter big and rest is small ex. John"
    const name =
      nameValue.charAt(0).toUpperCase() + nameValue.slice(1).toLowerCase();

    // Create new member from constructor
    const member = createMember(name, age);

    // Validate inputs
    if (name === "" || age === "") {
      // Error alert
      showAlert("ERROR: Age or Name is not defiend!", "error");
    } else {
      // FETCH POST REQUEST
      addMember(member);

      //Clear fields
      clearFields();
    }
  });
});
