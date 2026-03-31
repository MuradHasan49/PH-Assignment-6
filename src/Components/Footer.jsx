import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#0f172a] text-white py-12 px-6 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-12">
            <div className="md:col-span-5 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">DigiTools</h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-white">Product</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="hover:text-white cursor-pointer transition">
                    Features
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Pricing
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Templates
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Integrations
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-white">Company</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="hover:text-white cursor-pointer transition">
                    About
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Blog
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Careers
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Press
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-white">
                  Resources
                </h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="hover:text-white cursor-pointer transition">
                    Documentation
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Help Center
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Community
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Contact
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-12 flex justify-start md:justify-end mt-4 md:mt-0">
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-900 cursor-pointer hover:bg-slate-200 transition">
                  <BsInstagram size={18} />
                </div>
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-900 cursor-pointer hover:bg-slate-200 transition">
                  <FaFacebook size={18} fill="currentColor" />
                </div>
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-900 cursor-pointer hover:bg-slate-200 transition">
                  <BsTwitter size={18} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 my-6"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
            <p>© 2026 Digitools. All rights reserved.</p>

            <div className="flex gap-6">
              <span className="hover:text-slate-300 cursor-pointer transition">
                Privacy Policy
              </span>
              <span className="hover:text-slate-300 cursor-pointer transition">
                Terms of Service
              </span>
              <span className="hover:text-slate-300 cursor-pointer transition">
                Cookies
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
<h1>work</h1>;
