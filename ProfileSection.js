import React, { useState, useEffect } from 'react';

const ProfileSection = () => {
  const [profileSection, setProfileSection] = useState({
    name: '',
    items: [], // Update the initial value to an empty array
    gold: 0,
    exp: 0,
  });

  useEffect(() => {
    const storedProfileData = localStorage.getItem('profileData');
    if (storedProfileData) {
      setProfileSection(JSON.parse(storedProfileData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profileSection));
  }, [profileSection]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileSection((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleItemAddition = () => {
    if (profileSection.items.includes('')) return;
    setProfileSection((prevState) => ({
      ...prevState,
      items: [...prevState.items, ''],
    }));
  };

  const handleItemChange = (event, index) => {
    const { value } = event.target;
    setProfileSection((prevState) => ({
      ...prevState,
      items: prevState.items.map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleItemDeletion = (index) => {
    setProfileSection((prevState) => ({
      ...prevState,
      items: prevState.items.filter((item, i) => i !== index),
    }));
  };

  return (
    <div>
      <h2>Profile Section</h2>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={profileSection.name} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <div style={{alignItems: 'center' }}>
            <label style={{ marginRight: '7rem' }}>Items:</label>
            <button onClick={handleItemAddition}>Add Item</button>
        </div>
        {profileSection.items.map((item, index) => (
            <div key={index} style={{ alignItems: 'center' }}>
            <input type="text" value={item} onChange={(event) => handleItemChange(event, index)} />
            <button onClick={() => handleItemDeletion(index)}>Delete</button>
            </div>
        ))}
        </div>
      <div>
        <label>
          Gold Amount:
          <input type="number" name="gold" value={profileSection.gold} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Experience (Exp):
          <input type="number" name="exp" value={profileSection.exp} onChange={handleInputChange} />
        </label>
      </div>
    </div>
  );
};

export default ProfileSection;
