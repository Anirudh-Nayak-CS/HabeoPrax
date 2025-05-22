const apiUrl = "http://localhost:5000";
const loginSection = document.getElementById("loginSection");
const mainSection = document.getElementById("mainSection");
const habitList = document.getElementById("habitList");
const addHabitForm = document.getElementById("addHabitForm");
const rewards = ["🎉", "👏", "🌟", "💪", "🔥"];
let habitsCache = [];

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (data.token) {
      chrome.storage.local.set({ token: data.token });
      localStorage.setItem("token", data.token); // Allows website to access token
      loginSection.style.display = "none";
      mainSection.style.display = "block";
      await loadHabits(data.token);
    }
  } catch (err) {
    console.error("Login error:", err);
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  chrome.storage.local.remove("token");
  localStorage.removeItem("token");
  loginSection.style.display = "block";
  mainSection.style.display = "none";
  habitList.innerHTML = "";
});

document.getElementById("showAddHabitBtn").addEventListener("click", () => {
  addHabitForm.style.display = addHabitForm.style.display === "none" ? "block" : "none";
});

addHabitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newHabit = {
    title: document.getElementById("title").value,
    icon: document.getElementById("icon").value,
    duration: document.getElementById("duration").value,
    time: document.getElementById("time").value,
    day: [document.getElementById("day").value],
    done: false,
    setReminder: document.getElementById("setReminder").checked,
    streakcount: 0,
    points: 0
  };

  chrome.storage.local.get("token", async ({ token }) => {
    if (!token) return;

    try {
      // Fetch latest habits from DB to avoid overwriting
      const res = await fetch(`${apiUrl}/habitdata`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await res.json();
      const latestHabits = data.habits || [];

      // Add new habit to the latest list
      latestHabits.push(newHabit);

      // Save updated habits back to DB
      await fetch(`${apiUrl}/habitdata`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ habits: latestHabits })
      });

      // Update local cache and UI
      habitsCache = latestHabits;
      displayHabits(habitsCache);
      addHabitForm.reset();
      addHabitForm.style.display = "none";
    } catch (err) {
      console.error("Error adding habit:", err);
    }
  });
});

async function loadHabits(token) {
  try {
    const res = await fetch(`${apiUrl}/habitdata`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    habitsCache = data.habits || [];
    displayHabits(habitsCache);
  } catch (err) {
    console.error("Error loading habits:", err);
  }
}

function displayHabits(habits) {
  habitList.innerHTML = "";
  habits.forEach((habit, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${habit.icon || ""} ${habit.title || "Untitled"} - ${habit.done ? "✅ Done" : "❌ Not Done"}<br/>
      <br/>🔥 Streak: ${habit.streakcount || 0} days
      <br/>
      <label>
        <input type="checkbox" data-index="${index}" ${habit.done ? "checked" : ""}/> Mark Done
      </label>
      <span class="reward-emoji" id="reward-${index}"></span>
    `;
    habitList.appendChild(li);

    li.querySelector("input[type='checkbox']").addEventListener("change", () => toggleDone(index));
  });
}

async function toggleDone(index) {
  habitsCache[index].done = !habitsCache[index].done;

  chrome.storage.local.get("token", async ({ token }) => {
    try {
      await fetch(`${apiUrl}/habitdata`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ habits: habitsCache })
      });

      displayHabits(habitsCache);
      if (habitsCache[index].done) showReward(index);
    } catch (err) {
      console.error("Error toggling done:", err);
    }
  });
}

function showReward(index) {
  const rewardSpan = document.getElementById(`reward-${index}`);
  const emoji = rewards[Math.floor(Math.random() * rewards.length)];
  rewardSpan.textContent = `${emoji} Great Job!`;
  rewardSpan.style.opacity = "1";

  setTimeout(() => {
    rewardSpan.style.opacity = "0";
    rewardSpan.textContent = "";
  }, 2000);
}

// Auto-login if token exists
chrome.storage.local.get("token", ({ token }) => {
  if (token) {
    loginSection.style.display = "none";
    mainSection.style.display = "block";
    loadHabits(token);
  }
});