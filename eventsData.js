// ---------------- EVENTS ----------------

let positiveEvents = [
  {
    emoji: "🌅",
    image: "nospendweekend.jpg",
    text: "Low Cost Weekend",
    effect: 45,
    severity: "normal",
    count:0,
    scenario: "You go hiking with friends and entertained yourself without spending money. Choosing low-cost activities helped you save."
  },
  {
    emoji: "🚍",
    image: "freeride.png",
    text: "Free Ride",
    effect: 35,
    severity: "normal",
    count:0,
    scenario: "A friend gave you a ride this week, so you didn’t have to spend on gas or transit. Small savings like this help stretch your budget."
  },
  {
    emoji: "🧑‍💻",
    image: "freelance.webp",
    text: "Freelance Job",
    effect: 200,
    severity: "high",
    count:0,
    scenario: "You completed a freelance project on the side and got paid. This extra income gives your finances a boost."
  },{
    emoji: "🏠",
    image: "rentreduction.jpg",
    text: "Lower Rent",
    effect: 175,
    severity: "high",
    count:0,
    scenario: "Your rent was temporarily reduced due to a lease adjustment. Lower housing costs give you breathing room in your budget."
  },
  {
    emoji: "🏡",
    image: "inheritance.webp",
    text: "Inheritance",
    effect: 300,
    severity: "high",
    count:0,
    scenario: "A relative left you an unexpected inheritance. You weren’t counting on it at all. This gives you a major financial boost and new opportunities."
  },
   {
    emoji: "📈",
    image: "investmentgain.jpg",
    text: "Investment gain",
    effect: 150,
    severity: "normal",
    count:0,
    scenario: "One of your investments performed better than expected. You decide to cash out part of the gains. The return gives your finances a noticeable boost."
  },
  {
    emoji: "💰",
    image: "bonuscheck.jpg",
    text: "Bonus paycheck",
    effect: 100,
    severity: "normal",
    count:0,
    scenario: "You work hard this quarter. Your manager thanks you for putting in the extra effort towards meeting the company's goals. Your paycheck ends up being higher than expected."
  },
  {
    emoji: "🎁",
    image: "gift.webp",
    text: "Cash Gift",
    effect: 50,
    severity: "high",
    count:0,
    scenario: "You received a generous cash gift from family. This unexpected support can make a major impact on your financial progress."
  },
  {
    emoji: "🧾",
    image: "taxrefund.jpg",
    text: "Tax refund",
    effect: 75,
    severity: "normal",
    count:0,
    scenario: "You filed your taxes and got a small refund. You had forgotten about it until the money hit your account. It gives you a little extra breathing room this month."
  },
  {
    emoji: "🕒",
    image: "extrashift.webp",
    text: "Extra work hours",
    effect: 40,
    severity: "normal",
    count:0,
    scenario: "A coworker asked you to cover their shift. You decided to take it for some extra cash. The additional hours increased your earnings for the month."
  },
  {
    emoji: "🚗",
    image: "gasgoesdown.jpg",
    text: "Less on gas",
    effect: 20,
    severity: "normal",
    count:0,
    scenario: "Gas prices dropped more than expected this month. You also combined trips to save fuel. You end up spending less than usual on transportation."
  },
  {
    emoji: "🏆",
    image: "raffle.webp",
    text: "Won a small prize",
    effect: 25,
    severity: "normal",
    count:0,
    scenario: "You entered a small raffle. Surprisingly, you ended up winning a small cash prize. It’s not huge, but it definitely helps."
  },
  {
    emoji: "🍽️",
    image: "freemeal.jpg",
    text: "Free meal",
    effect: 15,
    severity: "normal",
    count:0,
    scenario: "The company hosted an event this week that included catered food. You didn’t have to spend money on food like you normally would. That savings adds up over time."
  },
  {
    emoji: "🏷️",
    image: "coupons.webp",
    text: "Coupon savings",
    effect: 35,
    severity: "normal",
    count:0,
    scenario: "You took advantage of coupons and store deals while shopping. Saving money on everyday purchases gives your budget some breathing room."
  },
];

let negativeEvents = [
   {
    emoji: "🦷",
    image: "dentist.jpg",
    text: "Dental expense",
    effect: -110,
    severity: "normal",
    count:0,
    scenario: "A routine cleaning revealed a small cavity. Even with insurance, the out-of-pocket co-pay was higher than you anticipated."
  },
  {
    emoji: "📺",
    image: "forgottensubscription.jpg",
    text: "Forgotten subscription",
    effect: -55,
    count:0,
    scenario: "An annual software subscription you forgot to cancel automatically renewed. It’s a service you barely use, making the cost extra annoying.",
    severity: "normal"
  },
  {
    emoji: "🐾",
    image: "vetvisit.webp",
    text: "Vet bill",
    effect: -95,
    severity: "normal",
    count:0,
    scenario: "Your pet needed a quick checkup and some routine meds. It’s a necessary expense, but it definitely pinches the wallet this month."
  },
  {
    emoji: "📉",
    image: "investmentloss.webp",
    text: "Investment loss",
    effect: -250,
    severity: "high",
    count:0,
    scenario: "A risky investment didn’t go as planned. The value dropped significantly before you could react. You’re left absorbing a large loss."
  },
  {
    emoji: "💻",
    image: "laptoprepair.jpg",
    text: "Laptop repair",
    effect: -225,
    severity: "high",
    count:0,
    scenario: "Your computer suddenly stopped working. Since you rely on it, you had to replace it quickly. The expense wasn’t planned and hits hard."
  },
  {
    emoji: "⚖️",
    image: "legalfees.jpeg",
    text: "Legal fees",
    effect: -175,
    severity: "high",
    count:0,
    scenario: "You had to deal with an unexpected legal matter. Hiring help and handling paperwork comes with high costs. It puts a serious dent in your finances."
  },
  {
    emoji: "🚓",
    image: "trafficviolation.jpg",
    text: "Traffic violation",
    effect: -125,
    severity: "high",
    count:0,
    scenario: "You were pulled over for a traffic violation. The fine is higher than you expected. Now you have to adjust your budget to cover the cost."
  },
  {
    emoji: "🚗",
    image: "gasgoesup.jpg",
    text: "More on gas",
    effect: -50,
    severity: "normal",
    count:0,
    scenario: "Gas prices were higher than expected this month. You had to use your car more this month. You end up spending more than usual on transportation."
  },
  {
    emoji: "🏥",
    image: "medicalemergency.jpg",
    text: "Medical expense",
    effect: -200,
    severity: "high",
    count:0,
    scenario: "You had to visit urgent care unexpectedly. Even with insurance, there are out-of-pocket costs. The bill takes a big hit on your finances this month."
  },
  {
    emoji: "🔧",
    image: "carrepair.jpg",
    text: "Car repair",
    effect: -175,
    severity: "high",
    count:0,
    scenario: "Your car started making a strange noise. A mechanic confirms something needs fixing right away. You have to pay to keep your car running safely."
  },
  {
    emoji: "📱",
    image: "phonerepair.webp",
    text: "Phone replacement",
    effect: -100,
    severity: "normal",
    count:0,
    scenario: "Your phone was damaged. You rely on it daily, so replacing it isn’t optional. The cost wasn’t planned for in your budget."
  },
  {
    emoji: "🛒",
    image: "overspentshopping.webp",
    text: "Overspent shopping",
    effect: -60,
    severity: "normal",
    count:0,
    scenario: "You went shopping and bought more than you intended. Small purchases added up quickly. By the time you realized, you had already gone over budget."
  },
  {
    emoji: "🎮",
    image: "impulseshopping.webp",
    text: "Impulse purchase",
    effect: -85,
    severity: "normal",
    count:0,
    scenario: "You saw something online and bought it without thinking. At the time it felt like a good idea. Later, you realize it wasn’t really necessary."
  },
  {
    emoji: "💡",
    image: "utilities.webp",
    text: "Utility bill spike",
    effect: -75,
    severity: "normal",
    count:0,
    scenario: "Your utility bill came in higher than usual. Maybe it was due to weather or increased usage. Either way, you now have to cover the unexpected increase."
  }
];
