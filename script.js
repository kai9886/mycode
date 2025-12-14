function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  document.getElementById("snowfall").appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}
setInterval(createSnowflake, 100);

// Show message function
function showMessage() {
  const giftBox = document.getElementById("gift-box");
  const message = document.getElementById("message");

  // Hide the gift box
  giftBox.style.display = "none";

  // Show the message
  message.style.display = "block";

  // You can customize the duration the message is displayed
  setTimeout(() => {
    // Show the gift box again
    giftBox.style.display = "block";
    message.style.display = "none";
  }, 5000);
}

document.getElementById("gift-box").addEventListener("click", showMessage);
