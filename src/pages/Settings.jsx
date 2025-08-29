import React, { useState } from "react";

const tabs = ["Account", "Privacy", "Notifications", "Payment History"];

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [displayName, setDisplayName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      {/* Tabs */}
      <div className="flex mb-8">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-6 py-2 font-semibold border-b-2 transition ${activeTab === i ? "border-[#190a64] text-[#190a64] bg-gray-100" : "border-transparent text-gray-600"}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Account Tab */}
      {activeTab === 0 && (
        <div className="space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-xl shadow p-8 mb-6">
            <h2 className="text-lg font-semibold mb-2">Basic Information</h2>
            <p className="text-gray-600 mb-4">Update your display name and email address.</p>
            <div className="mb-4">
              <label className="block font-medium mb-1">Display Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mb-2"
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 mb-2"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button className="bg-[#190a64] text-white px-4 py-2 rounded">Save Changes</button>
          </div>
          {/* Change Password */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-lg font-semibold mb-2">Change Password</h2>
            <p className="text-gray-600 mb-4">Ensure your account is secure by using a strong, unique password.</p>
            <div className="mb-4">
              <label className="block font-medium mb-1">Current Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 mb-2"
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">New Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 mb-2"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Confirm New Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 mb-2"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="bg-[#190a64] text-white px-4 py-2 rounded">Update Password</button>
          </div>
        </div>
      )}
      {/* Other Tabs Placeholder */}
      {activeTab !== 0 && (
        <div className="bg-white rounded-xl shadow p-8 text-gray-500">This section is under construction.</div>
      )}
    </div>
  );
};

export default Settings;
