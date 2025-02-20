"use client";

import React, { useState } from 'react';
import AdminAddUser from './AdminAddUser';
import AdminEditUser from './AdminEditUser';
import { inter } from './DateDropdown';

function AdminTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Добавить', content: <AdminAddUser /> },
    { title: 'Редактировать', content: <AdminEditUser /> },
  ];

  return (
    <div className="w-full">
        
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-100">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 border-b-2 text-sm ${inter.className} font-medium text-gray-700 focus:outline-none ${
              activeTab === index ? ' border-[#0052ff] text-blue-600' : 'border-transparent'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 ">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default AdminTabs;
