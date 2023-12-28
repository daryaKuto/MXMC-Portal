import './App.css'; // Make sure your App.css has the styles for the layout

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* Placeholder for header video/photo upload */}
        <button className="upload-btn">+</button>
        <p>HEADER VIDEO / PHOTO UPLOAD</p>
      </div>
      <div className="profile-section">
        {/* Placeholder for profile video/photo */}
        <div className="profile-upload">
          <button className="upload-btn">+</button>
          <p>PROFILE VIDEO / PHOTO</p>
        </div>
        <div className="additional-photos">
          {/* Placeholder for additional photos */}
          <button className="upload-btn">+</button>
          <button className="upload-btn">+</button>
        </div>
      </div>
      <div className="user-info">
        <input type="text" placeholder="Milana Kijajic" />
        <select>
          <option value="female">Female</option>
          {/* ... other options ... */}
        </select>
        <input type="text" placeholder="Vancouver, BC" />
        <input type="date" defaultValue="2000-01-01" />
      </div>
      <div className="roles">
        {/* Checkboxes for user roles */}
        <label><input type="checkbox" /> Content Creator</label>
        <label><input type="checkbox" /> Influencer</label>
        <label><input type="checkbox" /> Model</label>
        <label><input type="checkbox" /> Athlete</label>
        {/* ... other roles ... */}
      </div>
      <textarea className="about-you" placeholder="Tell us a little about you..."></textarea>
    </div>
  );
}

export default App;
