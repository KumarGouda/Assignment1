import React from "react";
// import moonIcon from "../images/moon-icon.png"; // Import moon icon image
// import bellIcon from "../images/bell-icon.png"; // Import bell icon image
// import translateIcon from "../images/translate-icon.png"; // Import translate icon image

const Toolbar = ({ toggleSidebar }) => {
  return (
    <div className="toolbar">
      <div className="logo">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconexperience.com%2Fo_collection%2Ficons%2F%3Ficon%3Dbell&psig=AOvVaw0Mf988Zzwf4k6aPQECsmwF&ust=1708399410057000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCr8_C5toQDFQAAAAAdAAAAABAE"
          alt="Moon Logo"
        />
      </div>
      <div className="header-icons">
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconexperience.com%2Fo_collection%2Ficons%2F%3Ficon%3Dbell&psig=AOvVaw0Mf988Zzwf4k6aPQECsmwF&ust=1708399410057000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCr8_C5toQDFQAAAAAdAAAAABAE"
          alt="Bell Icon"
        />
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconexperience.com%2Fo_collection%2Ficons%2F%3Ficon%3Dbell&psig=AOvVaw0Mf988Zzwf4k6aPQECsmwF&ust=1708399410057000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCr8_C5toQDFQAAAAAdAAAAABAE"
          alt="Translate Icon"
        />
        {/* Add more icons/buttons here */}
      </div>
    </div>
  );
};

export default Toolbar;
