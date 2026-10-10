function getBotReply(message) {
  const text = message.toLowerCase().trim();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hey gamer! 🎮 Welcome to Gamers-Node. How can I help you level up?";
  }

  if (text.includes("join") || text.includes("register")) {
    return 'Awesome! 💜 Click "Join the Community" to register: register.html';
  }

  if (text.includes("game")) {
    return "We welcome mobile gamers, PC gamers, and competitive players! 🕹️";
  }

  if (text.includes("tournament")) {
    return "🏆 Tournament information is coming soon. Stay tuned to Gamers-Node!";
  }

  if (text.includes("community")) {
    return "Connect. Compete. Grow. 💜 Join our gaming community and meet fellow gamers!";
  }

  if (text.includes("help")) {
    return "I can help with joining, games, tournaments, and our community. What would you like to know?";
  }

  return "I'm still learning! 🎮 Try asking about joining, games, tournaments, or our community.";
}
