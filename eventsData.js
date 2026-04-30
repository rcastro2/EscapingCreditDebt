// ---------------- EVENTS ----------------

let positiveEvents = [
  {
    emoji: "💰",
    image: "bonuscheck.jpg",
    text: "Bonus paycheck",
    effect: 100,
    scenario: "You work hard this quarter. Your manager thanks you for putting in the extra effort towards meeting the company's goals. Your paycheck ends up being higher than expected."
  },
  {
    emoji: "🎁",
    image: "birthdaygift.webp",
    text: "Birthday gift",
    effect: 50,
    scenario: "A family member gives you money for your birthday. You weren’t expecting anything this year. It’s a nice surprise that boosts your budget."
  },
  {
    emoji: "🧾",
    image: "taxrefund.jpg",
    text: "Tax refund",
    effect: 75,
    scenario: "You filed your taxes and got a small refund. You had forgotten about it until the money hit your account. It gives you a little extra breathing room this month."
  },
  {
    emoji: "🕒",
    image: "extrashift.webp",
    text: "Extra work hours",
    effect: 40,
    scenario: "A coworker asked you to cover their shift. You decided to take it for some extra cash. The additional hours increased your earnings for the month."
  },
  {
    emoji: "🚗",
    image: "gasgoesdown.jpg",
    text: "Less on gas",
    effect: 20,
    scenario: "Gas prices dropped more than expected this month. You also combined trips to save fuel. You end up spending less than usual on transportation."
  },
  {
    emoji: "🏆",
    image: "raffle.webp",
    text: "Won a small prize",
    effect: 25,
    scenario: "You entered a small raffle. Surprisingly, you ended up winning a small cash prize. It’s not huge, but it definitely helps."
  },
  {
    emoji: "🍽️",
    image: "freemeal.jpg",
    text: "Free meal",
    effect: 15,
    scenario: "The company hosted an event this week that included catered food. You didn’t have to spend money on food like you normally would. That savings adds up over time."
  }
];

let negativeEvents = [
  {
    emoji: "🚓",
    image: "trafficviolation.jpg",
    text: "Traffic violation",
    effect: -150,
    scenario: "You were pulled over for a traffic violation. The fine is higher than you expected. Now you have to adjust your budget to cover the cost."
  },
  {
    emoji: "🚗",
    image: "gasgoesup.jpg",
    text: "More on gas",
    effect: -50,
    scenario: "Gas prices were higher than expected this month. You had to use your car more this month. You end up spending more than usual on transportation."
  },
  {
    emoji: "🏥",
    image: "medicalemergency.jpg",
    text: "Medical expense",
    effect: -200,
    scenario: "You had to visit urgent care unexpectedly. Even with insurance, there are out-of-pocket costs. The bill takes a big hit on your finances this month."
  },
  {
    emoji: "🔧",
    image: "carrepair.jpg",
    text: "Car repair",
    effect: -175,
    scenario: "Your car started making a strange noise. A mechanic confirms something needs fixing right away. You have to pay to keep your car running safely."
  },
  {
    emoji: "📱",
    image: "phonerepair.webp",
    text: "Phone replacement",
    effect: -100,
    scenario: "Your phone was damaged. You rely on it daily, so replacing it isn’t optional. The cost wasn’t planned for in your budget."
  },
  {
    emoji: "🛒",
    image: "overspentshopping.webp",
    text: "Overspent shopping",
    effect: -60,
    scenario: "You went shopping and bought more than you intended. Small purchases added up quickly. By the time you realized, you had already gone over budget."
  },
  {
    emoji: "🎮",
    image: "impulseshopping.webp",
    text: "Impulse purchase",
    effect: -85,
    scenario: "You saw something online and bought it without thinking. At the time it felt like a good idea. Later, you realize it wasn’t really necessary."
  },
  {
    emoji: "💡",
    image: "utilities.webp",
    text: "Utility bill spike",
    effect: -75,
    scenario: "Your utility bill came in higher than usual. Maybe it was due to weather or increased usage. Either way, you now have to cover the unexpected increase."
  }
];
