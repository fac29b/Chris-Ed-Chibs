const apiUrl = "https://api.openai.com/v1/chat/completions";
let localApiKey;

function displayText() {
  // Get the text from the textarea
  var inputText = document.getElementById('inputText').value;

  // Get the element where you want to display the text
  var displayArea = document.getElementById('displayArea');

  // Set the text content of the display area
  displayArea.textContent = inputText;
}


// api-key.js

function storeApiKey() {

  const apiKeyInput = document.getElementById('apiKey');
  const apiKey = apiKeyInput.value;

  // Validate apiKey if needed

  // Store in a local variable
  localApiKey = apiKey;

  fetchData(apiUrl, localApiKey);
  // Display a warning for learning purposes
  console.warn('This API key is stored in a local variable for learning purposes only. Do not use in production.');

  // You can now use the localApiKey variable in your application
  console.log('API Key stored:', localApiKey);
}

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
      console.log("Data:", data);

  } catch (error) {
      console.error("Error:", error);
  }
}

// Example usage