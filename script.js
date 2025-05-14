// Simulate OTP flow for now, replace with actual OTP service later
function sendOTP(event) {
    event.preventDefault();
    // In real-world, send OTP via Firebase or custom backend
    document.getElementById("otpForm").style.display = "none";
    document.getElementById("verifyOTPForm").style.display = "block";
}

function verifyOTP(event) {
    event.preventDefault();
    // In real-world, verify OTP here
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}

function showSection(section) {
    document.getElementById("guildTest").style.display = "none";
    document.getElementById("rewards").style.display = "none";
    document.getElementById("profile").style.display = "none";

    document.getElementById(section).style.display = "block";
}

// Guild Test Submission
function submitGuildTest(event) {
    event.preventDefault();
    const uid = document.getElementById("uid").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const role = document.getElementById("role").value;

    // Save data to Firebase or custom backend here
    alert("Guild Test Data Submitted: " + uid + " " + phoneNumber + " " + role);
}

// Rewards Submission
function submitRewards(event) {
    event.preventDefault();
    const gameName = document.getElementById("gameName").value;
    const gloryGiven = document.getElementById("gloryGiven").value;

    // Logic for calculating rewards, and showing the special code
    const specialCode = gameName.slice(0, 6); // Example special code (6 letters of UID)
    alert(`Your special code: ${specialCode}`);

    // Optionally send the code to Instagram profile
    alert("Claim your reward @emoxplays");
}

// Profile Save
function saveProfile() {
    const userName = document.getElementById("userName").value;
    const profilePic = document.getElementById("profilePic").files[0];

    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("userData").innerHTML = `<p>Name: ${userName}</p><img src="${e.target.result}" alt="Profile Pic" style="width:100px;">`;
        };
        reader.readAsDataURL(profilePic);
    }

    // Save profile data to Firebase or custom backend here
    alert("Profile Saved: " + userName);
}