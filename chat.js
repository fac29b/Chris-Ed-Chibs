const apiUrl = "https://api.openai.com/v1/chat/completions";

async function fetchData(apiUrl, apiKey) {
  try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [{ role: 'user', content: 'You are a helpful assistant.' }],
              stream: false,
          }),
      });

      if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      //Close log in if you get data
      closeLoginModal();
      console.log("Data:", data);

  } catch (error) {
      console.error("Error:", error);
  }
};

  // Function to show the login modal
function showLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

// Function to close the login modal
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Function to handle login
function login() {
  // Add your login logic here
  //document.getElementById("apiKeyInput").value;
  console.log(document.getElementById("apiKeyInput").value);
  // For simplicity, let's just close the modal for now
  fetchData(apiUrl, document.getElementById("apiKeyInput").value);
}

// Show the login modal when the page loads (for demonstration purposes)
window.onload = function() {
  showLoginModal();
};