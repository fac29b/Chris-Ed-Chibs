const apiUrl = "https://api.openai.com/v1/chat/completions";
// Variables
let submitMessageClass;
let textToDisplay;
let userMessage = [{ role: 'user', content: "Can you welcome me in the style of a friendly north of england style and ask if you can help me?" }];
let apiKeyStored;

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
              messages: userMessage,
              stream: false,
          }),
      });

      if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      userMessage.push({ role: 'system', content: data.choices[0].message.content });
      DisplayChatGPTMessage(data.choices[0].message.content);
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
  apiKeyStored = document.getElementById("apiKeyInput").value;
  fetchData(apiUrl, apiKeyStored);
}

// Show the login modal when the page loads (for demonstration purposes)
window.onload = function() {
  submitMessageClass = document.querySelector(".message-input");
  textToDisplay = document.querySelector(".chat-container")
  showLoginModal();
};

// Submit your message
function SubmitMessage(){
  userMessage.push({ role: 'user', content: submitMessageClass.value });
  fetchData(apiUrl, document.getElementById("apiKeyInput").value);
  textToDisplay.insertAdjacentHTML('beforeend', `
  <div class="chat-message user-message">
      <div class="message-content">`
          + submitMessageClass.value +
      `</div>
</div>`);
}


// display chatGPT message
function DisplayChatGPTMessage(text){
  textToDisplay.insertAdjacentHTML('beforeend', `
  <div class="chat-message assistant-message">
      <div class="message-content">`
          + text +
      `</div>
</div>`);
}