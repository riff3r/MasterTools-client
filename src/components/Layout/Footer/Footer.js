import React, { Fragment } from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 bg-secondary text-neutral">
        <div className="footer container mx-auto py-14">
          <div>
            <div className="text-4xl font-semibold text-white">
              <span className="text-primary">Master</span>Tools
            </div>
            <p>
              Dhaka, Bangladesh
              <br />
              Providing reliable Manufacturer since 1992
            </p>
          </div>
          <div>
            <span className="text-2xl text-neutral font-bold ">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="text-2xl text-neutral font-bold">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="text-2xl text-neutral font-bold">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </footer>

      <footer className="bg-[#252525] text-accent text-center py-8">
        <div className="items-center grid-flow-col">
          <p>MasterTools Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
