import React, { Fragment } from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-10 bg-secondary text-neutral mt-20">
        <div className="footer container mx-auto py-14">
          <div>
            <div class="text-4xl font-semibold text-white">
              <span className="text-primary">Master</span>Tools
            </div>
            <p>
              Dhaka, Bangladesh
              <br />
              Providing reliable Manufacturer since 1992
            </p>
          </div>
          <div>
            <span class="text-2xl text-neutral font-bold ">Services</span>
            <a class="link link-hover">Branding</a>
            <a class="link link-hover">Design</a>
            <a class="link link-hover">Marketing</a>
            <a class="link link-hover">Advertisement</a>
          </div>
          <div>
            <span class="text-2xl text-neutral font-bold">Company</span>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Press kit</a>
          </div>
          <div>
            <span class="text-2xl text-neutral font-bold">Legal</span>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
            <a class="link link-hover">Cookie policy</a>
          </div>
        </div>
      </footer>

      <footer class="bg-[#252525] text-accent text-center py-8">
        <div class="items-center grid-flow-col">
          <p>MasterTools Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
