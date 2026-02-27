import React from 'react';

const ServiceFooter = () => (
    <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

            {/* Main grid — 1 col mobile (centered), 2 col sm, 4 col md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

                {/* Brand */}
                <div className="sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start">
                    <img
                        src="/dhosti.jpeg"
                        alt="Dhosti Global Workforce Solutions"
                        className="h-14 w-auto object-contain mb-4"
                        onError={e => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className="hidden items-center mb-4">
                        <span className="font-logo font-black text-[#F5A023] text-3xl">dh</span>
                        <div className="w-7 h-7 rounded-full bg-[#2D6A27] flex items-center justify-center mx-0.5">
                            <img src="/intro_animation/globe.png" alt="o" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <span className="font-logo font-black text-[#F5A023] text-3xl">sti</span>
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed mb-4 text-center sm:text-left">
                        Our goal is to demystify the process, address your concerns,
                        and empower you with the knowledge to embark.
                    </p>

                    {/* LinkedIn */}
                    <div className="flex gap-3 mt-4 justify-center sm:justify-start">
                        <a
                            href="https://www.linkedin.com/company/dhosti-global-workforce/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-[#F5A023] hover:bg-[#F5A023]/10 transition-all text-xs font-bold"
                        >
                            in
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div className="text-center sm:text-left">
                    <h4 className="font-display text-gray-800 font-semibold text-sm mb-4 tracking-wide">Services</h4>
                    <ul className="space-y-2.5">
                        {['IT Outsourcing', 'Healthcare BPO', 'US Taxation', 'Cloud Solutions', 'SaaS Experts', 'AI Solutions', 'Virtual Assistant'].map(l => (
                            <li key={l}>
                                <a href="#" className="text-gray-400 text-xs hover:text-[#F5A023] transition-colors leading-relaxed block">{l}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Explore */}
                <div className="text-center sm:text-left">
                    <h4 className="font-display text-gray-800 font-semibold text-sm mb-4 tracking-wide">Explore</h4>
                    <ul className="space-y-2.5">
                        {['About Us', 'Job Posts', 'Our Projects', 'Our Services', 'Our Team', 'Contact'].map(l => (
                            <li key={l}>
                                <a href="#" className="text-gray-400 text-xs hover:text-[#F5A023] transition-colors leading-relaxed block">{l}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get in Touch */}
                <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
                    <h4 className="font-display text-gray-800 font-semibold text-sm mb-4 tracking-wide">Get in Touch</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                            <span className="text-[#F5A023] text-sm mt-0.5 flex-shrink-0">📍</span>
                            <span className="text-gray-500 text-xs leading-relaxed">
                                2nd floor, My co-office, Nsl Centrum Mall, KPHB, Kukatpally, Hyderabad, Telangana, 500085.
                            </span>
                        </li>
                        <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                            <span className="text-[#F5A023] text-sm mt-0.5 flex-shrink-0">🏢</span>
                            <span className="text-gray-500 text-xs leading-relaxed">
                                Reg Office: 32-459 HAL Colony, Gajularamaram, IDA, Hyderabad, Telangana, 500055
                            </span>
                        </li>
                        <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                            <span className="text-[#F5A023] text-sm mt-0.5 flex-shrink-0">✉️</span>
                            <a href="mailto:deepakt@dhostiglobal.com" className="text-gray-400 text-xs hover:text-[#F5A023] transition-colors break-all">
                                deepakt@dhostiglobal.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                            <span className="text-[#F5A023] text-sm mt-0.5 flex-shrink-0">📞</span>
                            <a href="tel:+919963280892" className="text-gray-400 text-xs hover:text-[#F5A023] transition-colors">
                                +91 9963280892
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <p className="text-gray-400 text-xs">© 2025 Dhosti Global Workforce Solutions Pvt Ltd. All rights reserved.</p>
                <div className="flex flex-wrap justify-center sm:justify-end gap-4">
                    {['Privacy', 'Terms', 'Cookies'].map(l => (
                        <a key={l} href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">{l}</a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default ServiceFooter;
