// Feature 1: Wellness Tip Generator
function showTip() {
    const tips = [
        "Take a short walk.",
        "Drink water.",
        "Talk to a friend.",
        "Take deep breaths.",
        "Rest for a few minutes."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").textContent = randomTip;
}

// Feature 2: Toggle Tips
function toggleTips() {
    const tips = document.getElementById("tips");

    if (tips.style.display === "none") {
        tips.style.display = "block";
    } else {
        tips.style.display = "none";
    }
}

// Feature 3: Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("error").textContent = "Please fill in all fields.";
        return false;
    }

    return true;
}
function checkMood() {
    const mood = document.getElementById("mood").value;
    let message = "";

    if (mood === "happy") {
        message = "That's great! Keep doing what you're doing 😊";
    } 
    else if (mood === "sad") {
        message = "It's okay to feel sad. Try talking to someone you trust.";
    } 
    else if (mood === "stressed") {
        message = "Take a break and breathe. Try managing tasks step by step.";
    } 
    else if (mood === "anxious") {
        message = "Focus on your breathing and stay present.";
    } 
    else {
        message = "Please select a mood.";
    }

    document.getElementById("moodResult").textContent = message;
}
function startBreathing() {
    const text = document.getElementById("breathingText");

    text.textContent = "Breathe in...";
    
    setTimeout(() => {
        text.textContent = "Hold...";
    }, 2000);

    setTimeout(() => {
        text.textContent = "Breathe out...";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Repeat 🌿";
    }, 6000);
}
function calculateStress() {
    const q1 = parseInt(document.getElementById("q1").value);
    const q2 = parseInt(document.getElementById("q2").value);

    const total = q1 + q2;
    let result = "";

    if (total <= 1) {
        result = "Low stress 👍 Keep maintaining your routine.";
    } 
    else if (total === 2) {
        result = "Moderate stress ⚠️ Consider taking breaks and resting.";
    } 
    else {
        result = "High stress ❗ Please seek support or talk to someone.";
    }

    document.getElementById("stressResult").textContent = result;
}