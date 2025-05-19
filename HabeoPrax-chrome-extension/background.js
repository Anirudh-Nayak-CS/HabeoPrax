chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("dailyReminder", {
    when: Date.now() + 1000,
    periodInMinutes: 1440
  });
});

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

chrome.notifications.onButtonClicked.addListener((notifId, btnIdx) => {
  if (notifId === "habitReminder") {
    let delayMinutes = btnIdx === 0 ? 10 : 60;
    chrome.alarms.create("dailyReminder", {
      when: Date.now() + delayMinutes * 60 * 1000
    });
  }
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get("pendingHabits", (result) => {
    if (result.pendingHabits) {
      chrome.storage.sync.set({ habits: result.pendingHabits }, () => {
        chrome.storage.local.remove("pendingHabits");
        console.log("Offline habits synced to Chrome storage.");
      });
    }
  });
});
