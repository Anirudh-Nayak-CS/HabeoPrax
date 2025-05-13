const quotes = [
  "Keep going! You're doing great!",
  "One day at a time.",
  "Small steps lead to big changes!"
];
const rewardEmojis = ["🎉", "🔥", "✅", "🌟", "💪"];
const emojiWidgetEmojis = ["😄", "🚀", "✨", "💡", "🎯", "🏁", "🏆", "😊"];

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  const container = document.getElementById("habit-list");

  function loadHabits(callback) {
    if (navigator.onLine) {
      chrome.storage.sync.get(["habits"], (result) => {
        const habits = result.habits || [];
        callback(habits);
        localStorage.setItem("habits_backup", JSON.stringify(habits));
      });
    } else {
      const habits = JSON.parse(localStorage.getItem("habits_backup") || "[]");
      callback(habits);
    }
  }

  function saveHabits(habits, reload = true) {
    if (navigator.onLine) {
      chrome.storage.sync.set({ habits }, () => {
        localStorage.setItem("habits_backup", JSON.stringify(habits));
        if (reload) window.location.reload();
      });
    } else {
      localStorage.setItem("habits_backup", JSON.stringify(habits));
      if (reload) window.location.reload();
    }
  }

  function showEmojiWidget() {
    const emojiWidget = document.createElement("div");
    emojiWidget.textContent = `Great Job ${emojiWidgetEmojis[Math.floor(Math.random() * emojiWidgetEmojis.length)]}`;
    emojiWidget.style.textAlign = "center";
    emojiWidget.style.fontSize = "1.5em";
    emojiWidget.style.marginTop = "10px";
    emojiWidget.id = "emoji-widget";
    document.body.appendChild(emojiWidget);

    // Remove widget after 2 seconds
    setTimeout(() => {
      emojiWidget.remove();
    }, 2000);
  }

  loadHabits((habits) => {
    habits = habits.map(habit => {
      if (habit.lastCompleted !== today) {
        habit.doneToday = false;
      }
      return habit;
    });

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    container.insertAdjacentHTML("beforebegin", `
      <div style="margin-bottom: 10px;">
        <h3 style="margin: 0; color: #6a1b9a;">Motivation of the Day</h3>
        <p style="font-style: italic; color: #444;">"${quote}"</p>
      </div>
    `);

    habits.forEach((habit, i) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <label style="font-size:1.2em; font-weight:bold; color:hsl(273, 54%, 72%)">
          <input type="checkbox" ${habit.doneToday ? "checked" : ""} data-index="${i}">
          ${habit.name}
        </label>
        <div style="font-size: 0.8em; color: gray;">🔥 Streak: ${habit.streak || 0} ${habit.doneToday ? rewardEmojis[Math.floor(Math.random() * rewardEmojis.length)] : ""}</div>
        ${habit.note ? `<div style="font-size: 0.75em; color: #444;">📝 Note: ${habit.note}</div>` : ""}
        <button class="edit-btn" data-index="${i}" style="background-color:hsl(273, 64%, 65%);color:white; font-size:0.8em">✏️ Edit</button>
        <button class="delete-btn" data-index="${i}" style="background-color:hsl(273, 64%, 65%);color:white; font-size:0.8em">🗑️ Delete</button>
        <hr>
      `;
      container.appendChild(div);
    });

    container.addEventListener("change", (e) => {
      const index = e.target.getAttribute("data-index");
      const checked = e.target.checked;
      if (index !== null) {
        if (checked && habits[index].lastCompleted !== today) {
          habits[index].streak = (habits[index].streak || 0) + 1;
          habits[index].lastCompleted = today;
          habits[index].doneToday = true;
          saveHabits(habits, false);
          showEmojiWidget(); // Show widget on check
        } else if (!checked) {
          habits[index].streak = Math.max(0, (habits[index].streak || 0) - 1);
          habits[index].lastCompleted = "";
          habits[index].doneToday = false;
          saveHabits(habits, false);
        }
      }
    });

    container.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      if (index === null) return;

      if (e.target.classList.contains("delete-btn")) {
        habits.splice(index, 1);
        saveHabits(habits);
      }

      if (e.target.classList.contains("edit-btn")) {
        const habit = habits[index];
        const name = prompt("Edit habit name:", habit.name);
        if (name === null) return;
        const frequency = prompt("Edit frequency (daily/weekly):", habit.frequency || "daily");
        if (frequency === null) return;
        const note = prompt("Edit note (optional):", habit.note || "");
        if (note === null) return;

        habits[index] = {
          ...habit,
          name: name.trim(),
          frequency: frequency.trim(),
          note: note.trim()
        };
        saveHabits(habits);
      }
    });
  });

  document.getElementById("add-habit-btn").addEventListener("click", () => {
    const form = document.getElementById("habit-form-container");
    form.style.display = form.style.display === "none" ? "block" : "none";
  });

  document.getElementById("add-habit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("habit-name").value.trim();
    const frequency = document.getElementById("habit-frequency").value;
    const note = document.getElementById("habit-note").value.trim();
    if (!name) return;

    loadHabits((habits) => {
      habits.push({
        name,
        frequency,
        note,
        doneToday: false,
        streak: 0,
        lastCompleted: ""
      });
      saveHabits(habits);
    });
  });
});
