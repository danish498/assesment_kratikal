import React from "react";
import Navbar from "../components/navbar/Main";

import HeroImage from "../assets/heroimage.webp";
import { About, Calender, CheckMark, LinkedIn, Twitter } from "../assets/icons";
import Countdown from "../components/landing-page/Countdown";
import BSFI from "../assets/bfsiicon.webp";
import KeyPoint from "../assets/keypointsimage.webp";
import whoIsItFrom from "../assets/who_is_it_for.webp";
import HeadFoot from "../assets/head-foot.webp";
import { keyPointsData } from "../data";
import FloatingLabelInput from "../components/ui/FloatingLabelInput ";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* hero sections */}
      <div className="container m-auto mt-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="p-4  ">
              <p className="fw-bold">Upcoming Event</p>
              <div>
                <p className="fs-1 fw-bold no-underline text-wrap lh-sm">
                  Social Engineering for <br /> BSFI Sector
                </p>
                <p className="fw-bolder lh-1">Ongoing and CyberFuture </p>
              </div>
              <div className="text-center text-lg-start">
                <Countdown />
              </div>
              <button className="border-0 px-5 py-2 bg-secondary text-white rounded my-4">
                Register Now
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <img src={HeroImage} alt="hero_image" className="img-fluid" />
          </div>
        </div>

        <div className="register_now_section py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded-4 p-4">
                  <div className="d-flex flex-column align-items-center">
                    <Calender />
                    <span className="text-white my-2 fw-bolder">
                      Webinar time
                    </span>
                    <div className="text-center">
                      <span className="text-white small lh-0">
                        9th AUG 2024
                      </span>
                      <p className="text-white small">@ 03:00PM (AST)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="register_now_card d-flex align-items-center justify-content-center p-4">
                  <div className="d-flex flex-column align-items-center">
                    <img src={BSFI} alt="bsfi image" className="img-fluid" />
                    <p className="fw-bold small mt-2">BSFI Sector</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="register_now_card d-flex align-items-center justify-content-center p-4">
                  <div className="d-flex align-items-start gap-2">
                    <div className="">
                      <About />
                    </div>
                    <div>
                      <p className="fw-bold">About the Webinar</p>
                      <p className="lh-2 small">
                        The webinar will delve into the intricacies of the BFSI
                        (Banking, Financial Services, and Insurance) sector's
                        cybersecurity landscape in Saudi Arabia, exploring both
                        the current challenges and the future threats that lie
                        ahead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Point of Discussion Sections */}
      <div className="container mt-5 p-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h2 className="d-inline-block position-relative fw-bold">
              The Key Points of the Discussion
              <span
                className="position-absolute border border-2 border-primary"
                style={{
                  width: "15%",
                  bottom: "-15px",
                  left: "0",
                }}
              ></span>
            </h2>

            <ul className="mt-4 p-0">
              {keyPointsData.map((data, index) => (
                <li
                  className="d-flex gap-3 mt-3 fw-lighter text-black"
                  key={index}
                >
                  <div>
                    <CheckMark />
                  </div>
                  <p className="m-0">{data.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-end">
            {" "}
            <img src={KeyPoint} alt="key_points" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* Who is it for Section */}
      <div className="container mt-5 p-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-start order-2 order-lg-1">
            {" "}
            <img
              src={whoIsItFrom}
              alt="key_points"
              className="img-fluid"
              width={426}
            />
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0  order-1 order-lg-2">
            <div>
              <h2 className="d-inline-block position-relative fw-bold">
                Who is it for?
                <span
                  className="position-absolute border border-2 border-primary"
                  style={{
                    width: "15%",
                    bottom: "-15px",
                    left: "0",
                  }}
                ></span>
              </h2>

              <p className="mt-4">
                The webinar on "Cybersecurity Challenges for BFSI Sector in
                Saudi Arabia" is specifically designed and tailored for IT
                experts, CISOs (Chief Information Security Officers), CIOs
                (Chief Information Officers), and Security Experts who are
                involved in or interested in cybersecurity within the Banking,
                Financial Services, and Insurance (BFSI) sector in Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Register NOw */}
      <div className="register_now_form_section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex align-items-center">
              <div className="text-lg-left">
                <h4>
                  Don't miss this opportunityan the guidance you need to
                  implement for a healthy cyberspace
                </h4>
                <p>Want the Guest Speaker to Answer some of the Question?</p>
                <div className="d-lg-flex mb-5 d-none justify-content-center">
                  <svg
                    width="167"
                    height="81"
                    viewBox="0 0 167 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M159.897 69.581C159.227 71.0904 158.439 74.615 156.548 74.8797C153.994 75.2369 154.269 72.4865 154.433 70.7211C154.755 67.2494 157.462 62.4239 156.699 59.1419C135.085 75.0586 109.363 82.727 82.5657 80.6531C55.9121 78.5903 26.9892 67.6489 11.0872 44.9678C3.30408 33.8666 -1.40984 20.7067 0.70933 6.95993C0.891144 5.78035 1.52007 -0.0922576 3.63955 1.09917C4.74448 1.72022 3.86355 9.2525 3.91571 10.6215C4.18612 17.7381 5.67736 24.4027 8.57729 30.8875C18.4587 52.9836 41.5601 66.8046 64.2231 72.168C79.236 75.721 95.3783 75.9793 110.61 73.1358C118.472 71.6682 126.361 69.4148 133.652 66.0649C139.801 63.2393 150.025 58.8296 154.051 53.1073C148.186 51.4971 140.542 55.5713 134.45 54.831C131.222 54.4391 128.585 51.6014 131.992 49.2504C134.753 47.3443 140.652 47.9811 143.891 47.7384C147.505 47.4676 151.108 47.3157 154.731 47.3846C157.389 47.4351 163.112 46.4348 165.069 48.4508C168.53 52.0155 161.488 65.6559 159.897 69.581C160.561 67.9434 159.197 71.1591 159.897 69.581Z"
                      fill="#14419A"
                    />
                  </svg>
                </div>
                <div className="mt-lg-5 mt-3 d-flex justify-lg-content-start justify-content-center">
                  <Countdown />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="register_now_form_wrapper d-flex justify-lg-content-end justify-content-center">
                <form action="" className="register_now_form">
                  <h3 className="mb-0 fw-bold">Register Now!</h3>
                  <FloatingLabelInput label="Full Name" type="text" />
                  <FloatingLabelInput label="Work Email" type="email" />
                  <FloatingLabelInput label="Phone Number" type="number" />
                  <FloatingLabelInput label="Company Name" type="text" />
                  <FloatingLabelInput label="Designation" type="text" />
                  <FloatingLabelInput label="No. of Employees" type="text" />

                  <div className="form-check mb-3 mt-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Subscribe to our weekly Newsletter to stay updated!
                    </label>
                  </div>
                  <div className="mb-1">
                    <input
                      type="submit"
                      className="btn w-100 text-white register_now_btn text-uppercase"
                      placeholder="No. of Employees"
                    />
                  </div>
                  <button className="border border-0 bg-primary w-100 py-3 text-white text-uppercase rounded rounded-1">
                    {" "}
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact US */}
      <div className="message-box">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <p className="text-white fs-4 fw-bolder">
              Contact Us for All Your Cybersecurity Needs
            </p>
            <button className="border border-0 px-4 py-2 bg-primary text-white rounded-1 mt-3 mt-md-0">
              Click Here
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="container mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-2 mb-4">
              <h4 className="text-primary">Products</h4>
              <h6>TSAT</h6>
              <h6>TPIR</h6>
              <h6>TLMS</h6>
              <h6>TDMARC</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-2 mb-4">
              <h4 className="text-primary">Company</h4>
              <h6>About Us</h6>
              <h6>Customers</h6>
              <h6>Partners</h6>
              <h6>Community</h6>
              <h6>Brand Story</h6>
              <h6>Contact Us</h6>
              <h6>Sitemap</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-2 mb-4">
              <h4 className="text-primary">Resources</h4>
              <h6>Blog</h6>
              <h6>Newsletter</h6>
              <h6>Case Study</h6>
              <h6>Cyber Jagrookta Divas</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-2 mb-4">
              <h4 className="text-primary">Services</h4>
              <h6>VAPT Services</h6>
              <h6>Compliance</h6>
              <h6>Get a Quote</h6>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <div className="footer-card p-3">
                <h4 className="text-primary">Locations</h4>
                <h6 className="text-primary text-uppercase fw-bold">
                  United States
                </h6>
                <h6>400 W Peachtree St NW Atlanta, GA, 30308</h6>
                <div className="mt-4">
                  <h4 className="text-primary">Contact Details</h4>
                  <h6 className="fw-bold text-uppercase text-primary lh-1">
                    For Sales
                  </h6>
                  <div className="d-flex flex-column">
                    <span>sales@theatcop.com</span>
                    <span>(+ 1) 323 287 9435</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <a href="#" className="social_media">
                  <Twitter />
                </a>
                <a href="#" className="social_media">
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* vertical line */}
        <hr
          style={{
            borderTop: "2px solid black",
            width: "100%",
            margin: "10px 0",
          }}
        />

        <div className="d-flex justify-content-between">
          <p className="text-muted">Copy right reserved, Danish</p>
          <p className="text-muted">Privacy Notice</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
