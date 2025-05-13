// DAILY REMINDER SETUP
chrome.runtime.onInstalled.addListener(() => {
  // Create a repeating alarm called "dailyReminder" that fires every 24 hours
  chrome.alarms.create("dailyReminder", {
    when: Date.now() + 1000, // First trigger after 1 second (initial install)
    periodInMinutes: 1440    // Then every 1440 minutes (24 hours)
  });
});

// TRIGGER NOTIFICATION WHEN ALARM FIRES
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dailyReminder") {
    chrome.notifications.create("habitReminder", {
      type: "basic",
      iconUrl: "icon.png",
      title: "Habit Reminder",
      message: "Time to check off your habits!",
      buttons: [
        { title: "Snooze 10 min" },
        { title: "Remind me later (1h)" }
      ],
      priority: 2
    });
  }
});

// HANDLE NOTIFICATION BUTTON CLICKS
chrome.notifications.onButtonClicked.addListener((notifId, btnIdx) => {
  if (notifId === "habitReminder") {
    // If "Snooze 10 min" clicked (btnIdx = 0), delay by 10 mins
    // If "Remind me later (1h)" clicked (btnIdx = 1), delay by 60 mins
    let delayMinutes = btnIdx === 0 ? 10 : 60;
    chrome.alarms.create("dailyReminder", {
      when: Date.now() + delayMinutes * 60 * 1000
    });
  }
});

// OFFLINE HABIT SYNC WHEN BACK ONLINE
chrome.runtime.onStartup.addListener(() => {
  // When browser starts up, check if there are any locally saved habits to sync
  chrome.storage.local.get("pendingHabits", (result) => {
    if (result.pendingHabits) {
      chrome.storage.sync.set({ habits: result.pendingHabits }, () => {
        chrome.storage.local.remove("pendingHabits"); // clear local cache
        console.log("Offline habits synced to Chrome storage.");
      });
    }
  });
});
