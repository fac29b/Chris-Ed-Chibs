function displayText() {
    // Get the text from the textarea
    var inputText = document.getElementById('inputText').value;

    // Get the element where you want to display the text
    var displayArea = document.getElementById('displayArea');

    // Set the text content of the display area
    displayArea.textContent = inputText;
  }