import React, { useState, useEffect, useRef } from "react";
import MainLogo from "../../assets/threatcop-logo-black.2ab724b4.svg";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1200);
  };

  console.log({ isMobile });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const navbarHeight = navbarRef.current.getBoundingClientRect().height;
      setIsSticky(scrollTop > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // navbar navbar-expand-lg navbar-light bg-light fixed-top

  return (
    <>
      <nav
        ref={navbarRef}
        className={`transition-navbar ${
          isSticky ? "sticky-top shadow-lg bg-white py-2 z-3 " : "py-4"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <a href="#" className="col-3">
              <img src={MainLogo} alt="company_logo" width={200} />
            </a>
            {!isMobile && <DesktopNavbar />}
            {isMobile && (
              <div className="col-9 d-flex justify-content-end align-items-center">
                <MobileNavbar />
              </div>
            )}
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
