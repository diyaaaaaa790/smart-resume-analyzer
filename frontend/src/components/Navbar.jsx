import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <strong>Resume Analyzer</strong>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <span>Dashboard</span>
        <span>Jobs</span>
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
