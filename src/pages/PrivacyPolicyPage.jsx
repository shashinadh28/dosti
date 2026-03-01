import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                    <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2>1. Introduction</h2>
                    <p>Welcome to Dhosti Global Workforce Solutions Pvt Ltd. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

                    <h2>2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                    </ul>

                    <h2>3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-5">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.</p>

                    <h2>5. Contact Us</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                    <p>Email: <a href="mailto:deepakt@dhostiglobal.com" className="text-[#2D6A27] hover:underline">deepakt@dhostiglobal.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
