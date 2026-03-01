import React from 'react';

const CookiePolicyPage = () => {
    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Cookie Policy</h1>
                <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                    <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2>1. What Are Cookies</h2>
                    <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>

                    <h2>2. How We Use Cookies</h2>
                    <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                    <h2>3. Disabling Cookies</h2>
                    <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>

                    <h2>4. The Cookies We Set</h2>
                    <ul className="list-disc pl-5">
                        <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>
                        <li><strong>Session cookies:</strong> These are used to store data for your current session, like preventing introductory animations from playing every time you visit a new page.</li>
                    </ul>

                    <h2>5. Third Party Cookies</h2>
                    <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site:</p>
                    <ul className="list-disc pl-5">
                        <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                    </ul>

                    <h2>6. More Information</h2>
                    <p>Hopefully, that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
                    <p>For more information, feel free to contact us at: <a href="mailto:deepakt@dhostiglobal.com" className="text-[#2D6A27] hover:underline">deepakt@dhostiglobal.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;
