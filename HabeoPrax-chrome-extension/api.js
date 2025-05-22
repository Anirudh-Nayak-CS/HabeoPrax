// api.js - Backend API calls

import { getToken } from "./auth.js";

const BASE_URL = "http://localhost:5000"; // Change to your backend URL in production

// Fetch habits from backend
export async function fetchHabits() {
  const token = await getToken();
  const res = await fetch(`${BASE_URL}/habitdata`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch habits");
  }
  return res.json();
}

// Add/update habits in backend
export async function addHabits(habitsArray) {
  const token = await getToken();
  const res = await fetch(`${BASE_URL}/habitdata`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ habits: habitsArray }),
  });
  if (!res.ok) {
    throw new Error("Failed to add habits");
  }
  return res.json();
}
