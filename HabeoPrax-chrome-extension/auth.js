// auth.js - Handles saving and retrieving JWT token from chrome storage

export function saveToken(token) {
  chrome.storage.local.set({ token });
}

export function getToken() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["token"], (result) => {
      resolve(result.token || null);
    });
  });
}
