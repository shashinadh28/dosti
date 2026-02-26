import React from 'react';

/**
 * Footer — real Dhosti contact info
 * Only LinkedIn social media
 */

const Footer = () => (
    <footer className="bg-[#1a2b1a] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

                {/* Brand */}
                <div className="md:col-span-1">
                    <img
                        src="/dhosti_footer.png"
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

                    <p className="text-white/40 text-xs leading-relaxed mb-4">
                        Our goal is to demystify the process, address your concerns,
                        and empower you with the knowledge to embark.
                    </p>

                    {/* Only LinkedIn */}
                    <div className="flex gap-3 mt-4">
                        <a
                            href="https://www.linkedin.com/company/dhosti-global-workforce/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-[#F5A023] hover:bg-[#F5A023]/15 transition-all text-xs font-bold"
                        >
                            in
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-display text-white font-semibold text-sm mb-4 tracking-wide">Services</h4>
                    <ul className="space-y-2.5">
                        {['Direct Hire Solutions', 'Recruitment Expertise', 'Temp-to-Hire', 'Temporary Staffing', 'Executive Search', 'Contract Staffing'].map(l => (
                            <li key={l}>
                                <a href="#" className="text-white/40 text-xs hover:text-[#F5A023] transition-colors">{l}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Explore */}
                <div>
                    <h4 className="font-display text-white font-semibold text-sm mb-4 tracking-wide">Explore</h4>
                    <ul className="space-y-2.5">
                        {['About Us', 'Job Posts', 'Our Projects', 'Our Services', 'Our Team', 'Contact'].map(l => (
                            <li key={l}>
                                <a href="#" className="text-white/40 text-xs hover:text-[#F5A023] transition-colors">{l}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get in Touch */}
                <div>
                    <h4 className="font-display text-white font-semibold text-sm mb-4 tracking-wide">Get in Touch</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2.5">
                            <span className="text-[#F5A023] text-sm mt-0.5">📍</span>
                            <span className="text-white/40 text-xs leading-relaxed">
                                2nd floor, My co-office, Nsl Centrum Mall, KPHB, Kukatpally, Hyderabad, Telangana, 500085.
                            </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-[#F5A023] text-sm mt-0.5">🏢</span>
                            <span className="text-white/40 text-xs leading-relaxed">
                                Reg Office: 32-459 HAL Colony, Gajularamaram, IDA, Hyderabad, Telangana, 500055
                            </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-[#F5A023] text-sm mt-0.5">✉️</span>
                            <a href="mailto:deepakt@dhostiglobal.com" className="text-white/40 text-xs hover:text-[#F5A023] transition-colors">
                                deepakt@dhostiglobal.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-[#F5A023] text-sm mt-0.5">📞</span>
                            <a href="tel:+919963280892" className="text-white/40 text-xs hover:text-[#F5A023] transition-colors">
                                +91 9963280892
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/25 text-xs">© 2025 Dhosti Global Workforce Solutions Pvt Ltd. All rights reserved.</p>
                <div className="flex gap-4">
                    {['Privacy', 'Terms', 'Cookies'].map(l => (
                        <a key={l} href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">{l}</a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
