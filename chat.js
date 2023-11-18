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



//chatGPT answer

// Function to send text to OpenAI API
// function sendToOpenAI(textToSend) {
//   const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
//   const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'; // You might need to adjust the engine and endpoint
  
//   // Request payload
//   const requestBody = {
//     prompt: textToSend,
//     max_tokens: 150 // Adjust as needed based on the desired response length
//   };

//   // Fetch request configuration
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`
//     },
//     body: JSON.stringify(requestBody)
//   };

//   // Send the request to OpenAI API
//   fetch(apiUrl, requestOptions)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Handle the API response here
//       console.log('OpenAI API Response:', data);
//       // Perform actions with the data received
//     })
//     .catch(error => {
//       // Handle errors
//       console.error('There was a problem with the fetch operation:', error);
//     });
// }

// // Example usage
// const text = "Write your text here.";
// sendToOpenAI(text);

////Make sure to replace 'YOUR_API_KEY_HERE' with your actual OpenAI API key. 
//Also, adjust the prompt and other parameters in requestBody according to your requirements. 
//This example uses the davinci engine and the completions endpoint; you might need to change these based on your specific use case.

//Remember to handle the API response within the .then() block where 
// Handle the API response here comment is placed. 
//You can perform actions with the data received from the OpenAI API inside that block.