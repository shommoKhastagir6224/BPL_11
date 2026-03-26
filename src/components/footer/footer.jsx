import React from "react";
import Logo from "../../assets/logo-footer.png";

const footer = () => {
  return (
    <div className="relative">
      <div className="flex justify-center ">
        <div className="absolute  w-[850px] bg-gray-300 flex flex-col items-center py-[100px] text-black gap-6 rounded-2xl ">
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-xl font-semibold">
            Get the latest updates and news right in your inbox!
          </p>
          <fieldset className="w-80">
            <div className="join">
              <input
                type="text"
                placeholder="Enter your Email"
                className="input input-bordered text-lg font-semibold join-item w-[250px] bg-white"
              />
              <button className="btn btn-error text-lg font-semibold join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="bg-base-300">
        <div className="flex justify-center pt-50 pb-10 mt-50">
          <img src={Logo} alt="" />
        </div>
        <footer className="footer sm:footer-horizontal text-base-content p-10">
          <nav>
            <h6 className="footer-title">About Us</h6>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Subscribe</h6>
            <div className="grid grid-flow-row gap-4">
              <p>Subscribe to our newsletter for the latest updates.</p>
              <fieldset className="w-80">
                <div className="join">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </div>
          </nav>
        </footer>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default footer;
