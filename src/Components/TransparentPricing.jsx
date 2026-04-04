import React from "react";
import { Check } from "lucide-react";
import Header from "./ReUseComponents/Header";

const TransparentPricing = () => {
  return (
    <>
      <div className=" py-30">
        <Header
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your needs. Upgrade or downgrade anytime."
        />

        <div className="">
          <div className="container mx-auto py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-137.5">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">Starter</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Perfect for getting started
                  </p>

                  <div className="my-8">
                    <span className="text-5xl font-bold text-[#0f172a]">
                      $0
                    </span>
                    <span className="text-slate-400 text-lg ml-1">/Month</span>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Access to 10 free tools</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Basic templates</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Community support</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>1 project per month</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full bg-[#7c24f6] hover:bg-[#681ed1] text-white font-semibold py-3.5 rounded-2xl transition-colors duration-300 cursor-pointer">
                  Get Started Free
                </button>
              </div>

              <div className="relative bg-[#7c24f6] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between h-150 md:-my-6">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffedd5] text-[#d97706] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-white/70 text-sm mt-1">
                    Best for professionals
                  </p>

                  <div className="my-8">
                    <span className="text-5xl font-bold">$29</span>
                    <span className="text-white/70 text-lg ml-1">/Month</span>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white text-sm">
                      <Check size={18} className="text-white stroke-[3px]" />
                      <span>Access to all premium tools</span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <Check size={18} className="text-white stroke-[3px]" />
                      <span>Unlimited templates</span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <Check size={18} className="text-white stroke-[3px]" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <Check size={18} className="text-white stroke-[3px]" />
                      <span>Unlimited projects</span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <Check size={18} className="text-white stroke-[3px]" />
                      <span>Cloud sync</span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <Check size={18} className="text-white stroke-[3px]" />
                      <span>Advanced analytics</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full bg-white hover:bg-slate-50 text-[#7c24f6] font-semibold py-3.5 rounded-2xl transition-colors duration-300 cursor-pointer">
                  Start Pro Trial
                </button>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-137.5">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    Enterprise
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    For teams and businesses
                  </p>

                  <div className="my-8">
                    <span className="text-5xl font-bold text-[#0f172a]">
                      $99
                    </span>
                    <span className="text-slate-400 text-lg ml-1">/Month</span>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Team collaboration</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>SLA guarantee</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check
                        size={18}
                        className="text-emerald-500 stroke-[3px]"
                      />
                      <span>Custom branding</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full bg-[#7c24f6] hover:bg-[#681ed1] text-white font-semibold py-3.5 rounded-2xl transition-colors duration-300 cursor-pointer">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransparentPricing;
