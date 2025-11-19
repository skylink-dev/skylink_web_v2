'use client'
import React, {useRef, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
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
            title: "Policy Statement",
            content: (
                <>
                    <p className="mb-4 leading-relaxed">
                        Operating in many countries and regions around the world, Skylink
                        (Skylink, the "Company") complies with anti-bribery and
                        anti-corruption laws and regulations applicable in the relevant
                        jurisdictions, and remains committed to the highest standards of
                        transparency, integrity and accountability by adhering to a
                        zero-tolerance policy for any form of bribery and corruption involving
                        suppliers, customers and other counterparties. In the meantime, the
                        Company is committed to upholding the principles of integrity, fairness
                        and honesty in the actions of its employees and encourages employees
                        and business partners to report misconduct and non-compliance to the
                        Company in a responsible and effective manner to ensure the Companys
                        healthy and sustainable growth.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        In order to further promote the Companys compliance and
                        anti-corruption work, open up the channels of supervision and
                        reporting, improve reporting mechanism and effectively play the role of
                        supervision, the Company has established this Whistleblower Policy
                        ("Policy") and the following Whistleblower Mailbox ("Mailbox"), so as
                        to detect and correct any wrongdoing or irregularities in the course of
                        business operations, and to ensure confidentiality of the identity of
                        whistleblowers and the reported matters as well.
                    </p>
                </>
            ),
        },
        {
            title: "Whistleblowing Guidelines",
            content: (
                <div className="mb-6">
                    <ul className="list-disc list-outside space-y-3 pl-5">
                        <li className="leading-relaxed">
                            The whistleblower shall report based on facts. The Company guarantees
                            to not punish or retaliate against reports made in good faith, but
                            may take actions against reports that involve fabrication, falsified
                            evidence, or false accusations against others.
                        </li>
                        <li className="leading-relaxed">
                            The Company encourages reports made in detail and using real names of
                            whistleblowers, as these facts may facilitate the Company conduct a
                            more detailed and in-depth investigations of the reported matters and
                            provide feedback. The Company will keep the information of the
                            whistleblower strictly confidential.
                        </li>
                        <li className="leading-relaxed">
                            The whistleblower should, to the extent possible, provide all
                            available evidence or supporting documents of the reported
                            misconduct, corruption, or violations. If it is not possible to
                            provide such information, the Company may utilize all feasible means
                            to collect relevant evidence.
                        </li>
                        <li className="leading-relaxed">
                            Whistleblowers may report matters to the Mailbox by registered mail,
                            local express mail, or express mail. The post office does not require
                            senders to provide their names or addresses. If whistleblowers do not
                            want to disclose their identity, they can choose to report
                            anonymously.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Applicable Scope of Matters",
            content: (
                <div className="mb-6">
                    <ul className="list-disc list-outside space-y-3 pl-5">
                        <li className="leading-relaxed">
                            Violations of company policies by management or employees at all
                            levels and all subordinate units of Skylink;
                        </li>
                        <li className="leading-relaxed">
                            Actions by any Skylink employees in key positions in the course of
                            business, including but not limited to failure to perform their
                            duties in accordance with the law; violations of policies related to
                            proper uses of powers associated with their positions, ethical
                            practices, or moral behaviors; suspicion of corruption or bribery,
                            abusing power, rent-seeking, "pay-to-play," favoritism, or wasting
                            company resources; or other illegal and criminal activities;
                        </li>
                        <li className="leading-relaxed">Appeal decision(s) of accountability proceeding(s);</li>
                        <li className="leading-relaxed">
                            Critique or provide suggestions to the regulatory compliance, ethical
                            governance infrastructure, and anti-bribery and corruption related
                            matters of the company, etc.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Whistleblowing Channels",
            content: (
                <>
                    <p className="mb-4 leading-relaxed">
                        Report to Supervision Department: Supervision Department, A1, Vue
                        Grande, 339, Siddhapudur, Coimbatore, Tamil Nadu 641044, India
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Email: <a href="mailto:info@skylink.net.in"
                                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">info@skylink.net.in</a>
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Phone: <a href="tel:+919944199445"
                                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">+91
                        99441 99445</a>
                    </p>
                </>
            ),
        },
        {
            title: "Handling Reports",
            content: (
                <>
                    <p className="mb-4 leading-relaxed">
                        The Supervision Department is the designated department to receive
                        Whistleblower reports, and is fully responsible for managing the
                        reported matters; the Supervision Department is also responsible for
                        processing the receipt of such reports, and categorizing them for
                        subsequent handling strictly in accordance with relevant regulations
                        and procedures, whether the report was made in person or through the
                        Mailbox. All reported information needs to be stored confidentially in
                        the Supervision Department, and only authorized personnel can access
                        such information (e.g., investigator in charge of the matter or
                        specific personnel designated as "need-to-know"). Skylink will take
                        strict measures to ensure the reported matters remain confidential.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Matters related to violation of policies, the law, ethics and
                        professional rules, and appeal of accountability proceeding dispositions
                        are handled by the Supervision Department. General complaints are
                        categorized and transferred to relevant departments for handling and
                        recordkeeping after the acceptance of these matters by the Supervision
                        Department.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Reports and accusations received through other channels must be
                        transferred to the Supervision Department for acceptance and
                        categorization in accordance with relevant rules. Supervision
                        Department shall complete categorizing and referring reported matters
                        to relevant departments within seven days of receiving the report. The
                        Supervision Department and other relevant departments that received
                        referred reports from the Supervision Department should begin
                        investigations of the reported matters within two weeks. Depending on
                        the severity and complexity of the reported matters, their
                        investigations should complete within three to six months.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Header Section */}
            <div className="w-full bg-blue-50 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">Whistleblower
                        Policy</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-4 sm:p-6 md:p-8">
                        {policySections.map(({title, content}, idx) => (
                            <div key={idx}
                                 className={`policy-section ${idx > 0 ? 'border-t border-gray-200 pt-4 mt-4' : ''}`}>
                                <div className="accordion-header">
                                    <button
                                        onClick={() => toggle(idx)}
                                        className="w-full flex justify-between items-center py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                        aria-expanded={openIndex === idx}
                                        aria-controls={`section-content-${idx}`}
                                        id={`section-header-${idx}`}
                                    >
                                        <span className="text-lg md:text-xl font-medium text-gray-900">{title}</span>
                                        <span
                                            className={`text-gray-600 transition-transform duration-300 transform ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}>
                      {openIndex === idx ?
                          <KeyboardArrowUpIcon fontSize="medium"/> :
                          <KeyboardArrowDownIcon fontSize="medium"/>}
                    </span>
                                    </button>
                                </div>
                                <AnimatePresence initial={false}>
                                    {openIndex === idx && (
                                        <motion.div
                                            id={`section-content-${idx}`}
                                            role="region"
                                            aria-labelledby={`section-header-${idx}`}
                                            ref={(el) => (contentRefs.current[idx] = el)}
                                            className="px-2 sm:px-4 overflow-hidden"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: {height: 'auto', opacity: 1, paddingTop: 16, paddingBottom: 16},
                                                collapsed: {height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0},
                                            }}
                                            transition={{duration: 0.3, ease: 'easeInOut'}}
                                        >
                                            <div className="text-gray-700 text-base sm:text-lg">
                                                {content}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}