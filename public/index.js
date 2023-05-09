document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const coolButton = document.getElementById("coolButton");
  
    const responses = [
      "Clickity click",
      "Clickity click",
      "Clickity click",
      "Clickity click",
      "Clickity click",
      "You clicked me!",
      "You clicked me!",
      "Yup, that's a click...",
      "Yup, that's a click...",
      "Didn't expect this, did ya?",
    ];
  
    function getRandomResponse() {
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }
  
    function getRandomColor() {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 50%, 75%)`;
    }
  
    function changeBackgroundColor() {
      document.body.style.backgroundColor = getRandomColor();
    }
  
    coolButton.addEventListener("click", () => {
      const newElement = document.createElement("p");
      newElement.innerText = getRandomResponse();
      content.appendChild(newElement);
  
      changeBackgroundColor();
    });
  });
  