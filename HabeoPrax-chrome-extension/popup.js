const apiUrl = "http://localhost:5000";

const loginSection = document.getElementById("login-section");
const habitSection = document.getElementById("habit-section");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");
const motivationDiv = document.getElementById("motivation");
const offlineBanner = document.getElementById("offlineBanner");

const toggleAddFormBtn = document.getElementById("toggleAddFormBtn");
const addHabitForm = document.getElementById("addHabitForm");

const habitList = document.getElementById("habitList");

let habitsCache = []; // cache habits locally for offline
let tokenGlobal = null;

// Quotes for Phase 4
const quotes = [
  "The journey of a thousand miles begins with one step.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Motivation gets you started. Habit keeps you going.",
  "Every day is a chance to get better."
];

// Reward emojis/GIFs for Phase 4
const rewards = ["🎉", "💪", "🏆", "✨", "🔥", "🥳"];

// Show motivation quote
function showMotivation() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  motivationDiv.textContent = `"${quote}"`;
}

// Show offline banner if offline
function updateOnlineStatus() {
  if (!navigator.onLine) {
    offlineBanner.style.display = "block";
  } else {
    offlineBanner.style.display = "none";
    // Try syncing offline changes
    syncOfflineHabits();
  }
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (data.success) {
    const token = data.token;
    tokenGlobal = token;
    chrome.storage.local.set({ token }, () => {
      loginMessage.textContent = "Login successful!";
      loginSection.style.display = "none";
      habitSection.style.display = "block";
      showMotivation();
      loadHabits(token);
      updateOnlineStatus();
    });
  } else {
    loginMessage.textContent = "Login failed. Try again.";
  }
});

function loadHabits(token) {
  fetch(`${apiUrl}/habitdata`, {
    headers: { Authorization: token }
  })
    .then(res => res.json())
    .then(data => {
      habitsCache = data.habits; // Cache habits locally
      displayHabits(habitsCache);
    })
    .catch(() => {
      // If offline or server error, load from local storage if available
      chrome.storage.local.get("offlineHabits", (result) => {
        if (result.offlineHabits) {
          habitsCache = result.offlineHabits;
          displayHabits(habitsCache);
        }
      });
    });
}

function displayHabits(habits) {
  habitList.innerHTML = "";
  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${habit.icon} ${habit.title} - ${habit.done ? "✅ Done" : "❌ Not Done"}
      <button data-index="${index}">${habit.done ? "Undo" : "Mark Done"}</button>
      <span class="reward-emoji" id="reward-${index}"></span>
    `;
    habitList.appendChild(li);

    li.querySelector("button").addEventListener("click", () => toggleDone(index));
  });
}

function toggleDone(index) {
  habitsCache[index].done = !habitsCache[index].done;

  if (navigator.onLine) {
    // Online: update backend immediately
    fetch(`${apiUrl}/habitdata`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenGlobal
      },
      body: JSON.stringify({ habits: habitsCache })
    })
    .then(() => {
      displayHabits(habitsCache);
      showReward(index);
    })
    .catch(() => {
      // On failure, save offline
      saveHabitsOffline();
      displayHabits(habitsCache);
      showReward(index);
    });
  } else {
    // Offline: save change locally
    saveHabitsOffline();
    displayHabits(habitsCache);
    showReward(index);
  }
}

// Show reward emoji briefly when habit marked done
function showReward(index) {
  if (!habitsCache[index].done) return; // only show when marked done

  const rewardSpan = document.getElementById(`reward-${index}`);
  const emoji = rewards[Math.floor(Math.random() * rewards.length)];
  rewardSpan.textContent = emoji;
  rewardSpan.style.opacity = "1";

  setTimeout(() => {
    rewardSpan.style.opacity = "0";
    rewardSpan.textContent = "";
  }, 1500);
}

// Save habits to local storage (offline)
function saveHabitsOffline() {
  chrome.storage.local.set({ offlineHabits: habitsCache, pendingSync: true });
}

// Sync offline habits to backend when online
function syncOfflineHabits() {
  chrome.storage.local.get(["offlineHabits", "pendingSync", "token"], ({ offlineHabits, pendingSync, token }) => {
    if (pendingSync && offlineHabits && token) {
      fetch(`${apiUrl}/habitdata`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify({ habits: offlineHabits })
      })
      .then(() => {
        chrome.storage.local.set({ pendingSync: false });
        // reload habits from backend to make sure fresh
        loadHabits(token);
      })
      .catch(() => {
        // Fail silently, will retry on next online event
      });
    }
  });
}

toggleAddFormBtn.addEventListener("click", () => {
  addHabitForm.style.display = addHabitForm.style.display === "none" ? "block" : "none";
});

addHabitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newHabit = {
    title: document.getElementById("title").value,
    icon: document.getElementById("icon").value,
    duration: document.getElementById("duration").value,
    time: document.getElementById("time").value,
    day: document.getElementById("day").value.split(",").map(day => day.trim()),
    done: false,
    setReminder: document.getElementById("setReminder").checked,
    streakcount: 0,
    points: 0
  };

  chrome.storage.local.get("token", ({ token }) => {
    fetch(`${apiUrl}/habitdata`, {
      method: "GET",
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => {
        const updatedHabits = [...data.habits, newHabit];
        return fetch(`${apiUrl}/habitdata`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          body: JSON.stringify({ habits: updatedHabits })
        });
      })
      .then(() => {
        loadHabits(token);
        addHabitForm.reset();
        addHabitForm.style.display = "none";
      });
  });
});

// Check if logged in on popup open
chrome.storage.local.get("token", ({ token }) => {
  if (token) {
    tokenGlobal = token;
    loginSection.style.display = "none";
    habitSection.style.display = "block";
    showMotivation();
    loadHabits(token);
    updateOnlineStatus();
  }
});
