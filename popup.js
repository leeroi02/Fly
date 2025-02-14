document.addEventListener("DOMContentLoaded", function () {
 
    const phrases = [
        "You are amazing just the way you are! 🌸",
        "You got this babe! ✨",
        "You are your number one fan 💪",
        "Little one and I are rooting for you! 💖",
        "You are stronger than you think! 🌻",
        "Are we a capacitor and resistor? Because together, we make the perfect circuit! 🔄",
        "If love were an algorithm, you’d be my perfect output! 💻",
        "Are you a microprocessor? Because you’re controlling my heart 💘",
       "You are worthy of all the love and happiness life has to offer. 💖",
        "Every day, you are growing stronger, wiser, and more confident. 🌱",
        "Your potential is limitless—believe in your abilities. 🚀",
        "You are enough, just as you are. 💫",
        "Today is full of new opportunities, and you are ready to embrace them. 🌞",
        "You attract positivity and good energy wherever you go. ✨",
        "You have the power to create your own happiness. 💪",
        "Your thoughts create your reality—choose them wisely. 🧠",
        "You are deserving of success, peace, and all things good. 🌈",
        "You are resilient, and you can overcome any challenges that come your way. 💥",
        "Your kindness and generosity make the world a better place. 🌍",
        "Goodluck my handsome boy 🌟",
        "Today, you choose to be happy and focused on the present moment. 💖",
        "You are proud of the progress you've made, and you are excited for what's ahead. 💥",
        "You are not defined by your mistakes; you learn and grow from them. 📚",
        "Your dreams are valid, and you are capable of achieving them. ✨",
        "You are worthy of self-care and time to recharge. 🛁",
        "You have everything you need to succeed within you. 🔑",
        "You are a magnet for love, abundance, and positivity. 💎",
        "You have the courage to pursue your passions and live your dreams. 🌻"
    ];

    const randomIndex = Math.floor(Math.random() * phrases.length);


    document.querySelector('p').textContent = phrases[randomIndex];
   
    window.resizeTo(600, 400); 
  
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    let left = (screenWidth - 600) / 2;
    let top = (screenHeight - 400) / 2;
    window.moveTo(left, top);
});
