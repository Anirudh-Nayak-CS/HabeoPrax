import React from 'react';
import { useEffect, useState } from 'react';
import { FaChrome, FaCheckCircle } from 'react-icons/fa';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
 let token = localStorage.getItem('token');
 if (!token.startsWith('Bearer ')) {
  token = `Bearer ${token}`;
}
      const res = await fetch('http://localhost:5000/notifications', {
         method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: token,
        }
      });
      if (!res.ok) {
        const errorText = await res.text(); // Read response as text to avoid JSON parse error
        throw new Error(`Error ${res.status}: ${errorText}`);
      }
      const data = await res.json();
      setNotifications(data);
    }
catch (err) {
      console.error("Failed to fetch notifications:", err.message);
};
      }
     
    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-50 relative overflow-hidden px-6 py-10">
      {/* Header */}
      <div className="text-3xl font-bold text-purple-700 mb-10">Notifications</div>

      {/* Main Content - Centered */}

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center text-gray-600 text-lg">
            🎉 You're all caught up! No new notifications for now.
          </div>
        ) : (
          notifications.map((n, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow text-gray-800">
              <p>{n.message}</p>
              <small className="text-gray-500">{new Date(n.timestamp).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>

      {/* Chrome Extension Card - Fixed on the right */}
      <div className="hidden lg:block fixed top-20 right-10 w-[340px] backdrop-blur-lg bg-white/80 border border-blue-100 shadow-xl rounded-2xl p-6">
        {/* Icon + Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-3 rounded-full text-purple-600 text-xl">
            <FaChrome />
          </div>
          <div className="text-sm font-bold uppercase text-purple-500 tracking-wide">
            New Extension
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 leading-snug">
          Chrome Extension Now Available!
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Instantly access focus tools from your browser. Stay on track, get reminders, and celebrate your daily wins—all without switching tabs.
        </p>

        {/* Buttons */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-lg transition">
          Add to Chrome
        </button>
        <button className="w-full mt-2 border border-blue-300 text-purple-600 font-medium py-2.5 rounded-lg hover:bg-blue-50 transition">
          Maybe Later
        </button>

        {/* Footer Info */}
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <FaCheckCircle className="mr-2 text-green-500" />
          1,213+ users already installed
        </div>
      </div>

      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-full px-6 py-3 flex items-center gap-8">
        <button title="Home" onClick={() => window.location.href = "/home"}>🏠</button>
        <button title="Weekly Report" onClick={() => window.location.href = "/weekly-report"}>📈</button>
        <button title="Reminders" onClick={() => window.location.href = "/notifications"}>🔔</button>
        <button title="Settings">⚙️</button>
      </nav>
    </div>
  );
};

export default NotificationPage;