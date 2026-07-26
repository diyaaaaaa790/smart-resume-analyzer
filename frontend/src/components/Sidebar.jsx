import React from 'react';

const Sidebar = () => {
  return (
    <aside style={{ width: '220px', padding: '1rem', borderRight: '1px solid #e5e7eb', minHeight: '100vh' }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '0.5rem' }}>Resume</li>
        <li style={{ marginBottom: '0.5rem' }}>Jobs</li>
        <li style={{ marginBottom: '0.5rem' }}>AI Analysis</li>
        <li>Profile</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
