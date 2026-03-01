import React from 'react';

const TermsOfServicePage = () => {
    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                    <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Dhosti Global Workforce Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

                    <h2>3. Disclaimer</h2>
                    <p>The materials on Dhosti Global Workforce Solutions' website are provided on an 'as is' basis. Dhosti Global Workforce Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                    <h2>4. Limitations</h2>
                    <p>In no event shall Dhosti Global Workforce Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>

                    <h2>5. Revisions and Errata</h2>
                    <p>The materials appearing on Dhosti Global Workforce Solutions' website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current.</p>

                    <h2>6. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Telangana, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

                    <h2>7. Contact Us</h2>
                    <p>For any inquiries regarding these terms, please contact us at: <a href="mailto:deepakt@dhostiglobal.com" className="text-[#2D6A27] hover:underline">deepakt@dhostiglobal.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
