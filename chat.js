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
