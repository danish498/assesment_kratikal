import React from "react";
import { Search } from "../../assets/icons";

const DesktopNavbar = () => {
  return (
    <>
      <ul className="col-9 d-flex list-unstyled mb-0 justify-content-end ">
        <li className="mx-2 hover-overlay">Products</li>
        <li className="mx-2">Solutions</li>
        <li className="mx-2">Free Tools</li>
        <li className="mx-2">Resources</li>
        <li className="mx-2">Partners</li>
        <li className="mx-2">Company</li>
        <li className="mx-2">Pricing</li>
        <button className="mx-2 border border-0 bg-white text-black">
          <Search />
        </button>
        <li
          className="mx-2 bg-primary text-white rounded-5 px-3 py-2"
          style={{
            cursor: "pointer",
          }}
        >
          Contact Us
        </li>
      </ul>
    </>
  );
};

export default DesktopNavbar;
