function getBotReply(message) {
  const text = message.toLowerCase().trim();

  if (text.includes("hello") || text === "hi" || text.startsWith("hey")) {
    return "Hey gamer! 🎮 Welcome to Gamers-Node. How can I help you level up?";
  }

  if (text.includes("join") || text.includes("register")) {
    return 'Awesome! 💜 Visit our registration page: register.html';
  }

  if (text.includes("game")) {
    return "We welcome mobile gamers, PC gamers, and competitive players! 🕹️";
  }

  if (text.includes("tournament")) {
    return "🏆 Tournament information is coming soon. Stay tuned!";
  }

  if (text.includes("community")) {
    return "Connect. Compete. Grow. 💜 Join our community and meet fellow gamers!";
  }

  if (text.includes("help")) {
    return "Ask me about joining, games, tournaments, or our community. What would you like to know?";
  }

  return "I'm still learning! 🎮 Try asking about joining, games, tournaments, or our community.";
}

const chat = document.getElementById("gn-chat");
const toggle = document.getElementById("gn-chat-toggle");
const closeButton = document.getElementById("gn-chat-close");
const form = document.getElementById("gn-chat-form");
const input = document.getElementById("gn-chat-input");
const messages = document.getElementById("gn-chat-messages");

if (chat && toggle && closeButton && form && input && messages) {
  toggle.addEventListener("click", () => {
    chat.classList.add("gn-open");
    input.focus();
  });

  closeButton.addEventListener("click", () => {
    chat.classList.remove("gn-open");
    toggle.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = input.value.trim();
    if (!message) return;

    const userMessage = document.createElement("div");
    userMessage.className = "gn-message gn-user-message";
    userMessage.textContent = message;
    messages.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.className = "gn-message gn-bot-message";
    botMessage.textContent = getBotReply(message);
    messages.appendChild(botMessage);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
    input.focus();
  });
}
