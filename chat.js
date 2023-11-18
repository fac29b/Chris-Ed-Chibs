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

  // Display a warning for learning purposes
  console.warn('This API key is stored in a local variable for learning purposes only. Do not use in production.');

  // You can now use the localApiKey variable in your application
  console.log('API Key stored:', localApiKey);
}

function fetchData(apiEndpoint, apiKey) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  });
  const response = fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [''],
      stream: false,
    }),
  })
  return response;
  fetch(apiEndpoint, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    })
}

// Example usage
const apiUrl = "https://api.openai.com/v1/chat/completions"; // OpenAI API endpoint
const apiKey = "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"; // Replace with your actual API key
fetchData(apiUrl, apiKey)
  .then(data => {
    console.log("Data:", data);
    // Process the fetched data as needed
  })
  .catch(error => {
    console.error("Error:", error);
  });
