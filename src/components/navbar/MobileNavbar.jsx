import React, { useState } from "react";
// import "./MobileNavbar.css"; // Make sure to create this CSS file

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button className="border-0 bg-white" onClick={handleSideBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>Products</li>
          <li>Solutions</li>
          <li>Free Tools</li>
          <li>Resources</li>
          <li>Partners</li>
          <li>Company</li>
          <li>Pricing</li>
          <li>Icons</li>
          <li
            className="my-2 mx-2 bg-primary text-white rounded-2 px-3 py-2"
            style={{
              cursor: "pointer",
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
