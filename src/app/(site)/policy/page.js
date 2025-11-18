'use client'
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Page() {
    const [openIndex, setOpenIndex] = useState(0);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const policySections = [
        {
            title: 'Purpose',
            content: (<>
                <p>Skylink IPTV Services Pvt. Ltd. is committed to protecting any personal information that we may receive while you access our online and mobile website www.Skylinkfiber.com. In particular, we believe it is important for you to know how we treat information about you that we may receive from this website. This Privacy Policy is devised to help you feel more confident about the privacy and security of your personal details.</p>
                <p>When you leave your contact details, please note that we are not bound to reply. You shall mean you, the user of the website, and yourself interpreted accordingly. We / Us means Skylink IPTV Services Pvt. Ltd. and Our interpreted accordingly. Users means the users of the website collectively and/or individually as the context allows.</p></>)
        },
           {
            title: 'Eligibility',
            content: (<>
                <p className="mb-2">This Website is not intended for persons under 13 years of age. We do not knowingly solicit or collect personal information from or about children, and We do not knowingly market Our products or services to children.</p></>)
        }, 
           {
            title: 'The Information We Collect',
            content: (<>
               <p className="mb-2">We receive both information that is directly provided to Us, such as personal information You provide when You visit the Website, and information that is passively or automatically collected from You, such as information collected from the browser or device You used to access Our Website or Services. In this Privacy Policy, we refer to all this as the User Information. To explain further,</p>
                        <div className="list-svg line-h-normal type-base rte-checkmark-att-blue">
                            <ul className="list-disc list-inside space-y-2 pl-4" style={{ "margin": "10px 0px 30px 0px" }}>
                                <li>Information You Provide To Us. There are portions of this Website where We may need to collect personal information from You for a specific purpose. For e.g. You can register, order products. In the course of these various offerings, We often seek to collect from You various forms of information, such as: name, address, e-mail address, telephone number, fax number and credit card information. At some instances, You may also be able to submit Information about other people. For example, You might submit a persons name and e-mail address to assist You to manage Your Subscription Account. This Information may include, for instance, a recipients name, address, e-mail address, and telephone number.</li>
                                <li>Information That is Automatically Collected. In general, You can visit this Website without telling Us who You are or revealing any information about Yourself. We, and Our third party service providers or other partners (collectively Partners) may use automated means to collect various types of Information about You, Your computer or other device used to access Our Website. A representative, non-exhaustive list of the types of automatically collected information may include: network or Internet protocol address and type of browser You are using (e.g., Chrome, Safari, Firefox, Internet Explorer), the type of operating system You are using, (e.g., Microsoft Windows or Mac OS), mobile network, device identifiers, device settings, browser settings, the web pages of the Website You have visited, Website visited before and after You visited our Website, the type of handheld or mobile device used to view the Website (e.g., iOS, Android), location information, and the content and advertisements You have accessed, seen, forwarded and/or clicked on. Please see our Section titled Cookies, for more information about how the foregoing Information may be collected and used.</li>
                            </ul>
                        </div></>)
        }, 
           {
            title: 'How We may use the User Information.',
            content: (<>
                <p className="mb-2">By entering Your User Information, You accept that We may retain Your User Information and that it may be held by Us or any Partners that processes it on Our behalf. We, along with Our Partners, shall be entitled to Use Your User Information for the following purposes:</p>
                        <div className="list-svg line-h-normal type-base rte-checkmark-att-blue">
                            <ul className="list-disc list-inside space-y-2 pl-4" style={{ "margin": "20px 0px" }}>
                                <li>provide and communicate with You about the services or Your Subscriber Account with us,</li>
                                <li>fulfill your requests regarding the services, including without limitation respond to your inquiries, communicate with You about our products or services that We believe may be of interest to You</li>
                                <li>enforce the legal terms (including without limitation our policies and terms of service) that govern your use of our Services, and/or for the purposes for which you provided the Information,</li>
                                <li>provide technical support for the Website or in connection with Our services and Offerings,</li>
                                <li>prevent fraud or potentially illegal activities (including, without limitation, copyright infringement) on or through Our Website or Services,</li>
                                <li>protect the safety of our other subscribers or Users,</li>
                                <li>perform analysis regarding how you use the Services or any part thereof such market research, including statistical analysis of User behaviour which We may disclose to third parties in depersonalised, aggregated form.</li>
                                <li>In order to enable Us to comply with any requirements imposed on Us by law.</li>
                                <li>In order to send You periodic communications (this may include e-mail), about features, products and services, events and special offers. Such communications from Us may include advertising for third party companies or organisations.</li>
                            </ul>
                        </div></>)
        }, 
           {
            title: 'Cookies and Web Becons.',
            content: (<>
                <p className="mb-2">You should be aware that information and data may be automatically collected through the Use of Cookies or web beacons or similar tracking technologies. Cookies are text files placed in your computer browser that store basic information that a Website can use to recognise repeat site visits and as an example, recall Your name if this has been previously supplied. We may use this to understand Your service and internet usage, observe behaviour and compile aggregate data in order to improve or customize our products, services offerings or the Website, target the advertising and assess general effectiveness of such advertising. Cookies do not attach to Your system and damage Your files. If You do not want information collected through the Use of Cookies, there is a simple procedure in most browsers that allows You to deny or accept the Cookie feature. Note, however, that personalised services may be affected if the cookie option is disabled.</p>
                        <p className="mb-2">For example, We may use Cookies to personalize Your experience at our Services (e.g., to recognize You by name when You return to Our Website), save your password in password-protected areas. We also may use Cookies or other tracking technologies to help Us offer You products, offerings or services that may be of interest to You when You visit this Website. We or a third party platform with whom We work may place or recognize a unique cookie on your browser to enable You to receive customized offers, services on this Website. These Cookies contain no information intended to identify You personally. The Cookies may be associated with de-identified demographic or other data linked to or derived from data You voluntarily have submitted to Us (e.g., your email address) that we may share with a service provider solely in hashed, non-human readable form.</p>
                        <p className="mb-2">We and our Partners may also use web beacons or clear GIFs, or similar technologies, which are small pieces of code placed on Our Website or in an email, to monitor the behaviour and collect data about the visitors viewing Our Website or email. For example, web beacons may be used to count the users who visit a web page or to deliver a cookie to the browser of a visitor viewing that Website. Web beacons may also be used to provide information on the effectiveness of our email campaigns (e.g., open rates, clicks, forwards, etc.).</p></>)
        }, 
           {
            title: 'Security and Data Storing.',
            content: (<>
                    <p className="mb-2">Security is very important to Us. All security procedures are in place to protect the confidentiality, integrity and availability of Your User Information. We maintain strict physical, electronic, and administrative safeguards to protect Your User Information including your personal information from unauthorized or inappropriate access.</p></>)
        }, 
           {
            title: 'Information Sharing and Disclosures.',
            content: (<>
               <p className="mb-2">We may disclose the User Information as follows:</p>
                        <div className="list-svg line-h-normal type-base rte-checkmark-att-blue">
                            <ul className="list-disc list-inside space-y-2 pl-4" style={{ "margin": "20px 0px" }}>
                                <li>To service providers or Partners that we have engaged to perform business-related functions on our behalf. This may include service providers that: (a) conduct research and analytics; (b) create content; (c) provide customer, technical or operational support; (d) conduct or support marketing (such as email or advertising platforms); (e) fulfill orders and user requests; (f) handle payments; (g) host our Services, forums and online communities; (h) administer the Website; (i) maintain databases; and (j) otherwise support our Services.</li>
                                <li>In response to legal process, for example, in response to a court order or a subpoena, a law enforcement or government agencys request or similar request.</li>
                                <li>With third parties in order to investigate, prevent, or take action (in our sole discretion) regarding potentially illegal activities, suspected fraud, situations involving potential threats to any person, us, or the Website, or violations of our policies, the law or our Terms of Use, to verify or enforce compliance with the policies governing our Website.</li>
                                <li>We may transfer some or all of your Information if We, or one of our business units, undergoes a business transition, like a merger, acquisition by another company, or sale of all or part of our assets, or if a substantial portion of our or of a business units assets is sold or merged in this way.</li>
                                <li>We may share the User Information with Our affiliates or group companies, so they can provide, improve and communicate with You about their own, or their marketing partners products and services.</li>
                            </ul>
                            <p className="mb-2">We reserve the right to disclose and transfer the User Information outside India. We will comply with all relevant Data Protection legislation in relation to the period for which We retain any User Information.</p>
                            </div></>)
        },    {
            title: 'Linked Services',
            content: (<>
                <p className="mb-2">Our Website may contain links to or integrations with other services such as Facebook, Twitter, LinkedIn, and other media services and platforms whose information practices may be different than ours. Visitors should consult these other services privacy notices as we have no control over information that is submitted to, or collected by, these third parties.</p></>)
        }
        , 
           {
            title: 'Governing Law and Jurisdiction',
            content: (<>
                 <p className="mb-2">This Privacy Policy is governed by and operated in accordance with the laws of India. If any of the parties wish to seek legal recourse, they may do so by using the courts of law in New Delhi.</p></>)
        }, 
           {
            title: 'Updates',
            content: (<>
                 <p className="mb-2">We may change this privacy policy from time to time and You should check these regularly. Your use of the Website will be deemed an acceptance of the privacy policy existing at that time.</p></>)
        }
        
    ]
    return (
        <>
            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                <div className="contact aem-GridColumn aem-GridColumn--default--12" style={{ "margin": "30px 0px" }}>
                    <div className="contact-phone">
                        <h2 className="heading-xxl">Privacy Policy</h2>
                    </div>
                </div>
            </div>
             <div className="container" id="refund" style={{ padding: '40px 0px' }}>
                <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
                    {policySections.map(({ title, content }, idx) => (
                        <div key={idx} className="policywrap border-bottom border-gray-300">
                            <h3>
                                <button
                                    onClick={() => toggle(idx)}
                                    className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-lg width-full flex flex-items-top justify-between text-left pad-t-md pad-b-md"
                                    aria-expanded={openIndex === idx}
                                    aria-controls={`section-content-${idx}`}
                                    id={`section-header-${idx}`}
                                >
                                    <span className="reading-width">{title}</span>
                                    <span className={`text-3xl select-none transform transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : 'rotate-0'
                                        }`}>{openIndex === idx ? <KeyboardArrowUpIcon fontSize="large"></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>}</span>
                                </button>
                            </h3>
                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        id={`section-content-${idx}`}
                                        role="region"
                                        aria-labelledby={`section-header-${idx}`}
                                        ref={(el) => (contentRefs.current[idx] = el)}
                                        className="px-6 overflow-hidden bg-white"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { height: 'auto', opacity: 1, paddingTop: 24, paddingBottom: 24 },
                                            collapsed: { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 },
                                        }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        style={{ willChange: 'height, opacity, padding' }}
                                    >
                                        <div className="type-base rte-styles">
                                            {content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
