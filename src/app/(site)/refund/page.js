'use client'
import React, {useRef, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Page() {
    const rows = [
        ['Skylink Fire Stick', '4199', 'Rs. 1999 to Rs.999/- Refundable Deposit based on plans & region'],
        ['Skylink Fire Stick', 'Recovery Cost in Rs.', '3666', '2999', '2333', '1999'],
        ['Skylink Fire Stick', 'Customer Purchase Price', '3299'],
        ['Skylink Fire Stick', 'Partner Price', '2999'],
    ];
    const totalColumns = 6;
    const totalRows = rows.length;

    const [openIndex, setOpenIndex] = useState(0);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const policySections = [
        {
            title: 'Account Balance Refund',
            content: (
                <>
                    <p className="mb-4 leading-relaxed">Subscribers of Skylink IPTV Services Private Limited are
                        eligible for a refund of their account balance upon deactivation or termination of their
                        Subscriber Account, in accordance with this Refund Policy.</p>
                    <p className="mb-4 leading-relaxed">To cancel all services, subscribers should contact Skylink.
                        However, if any service is within a lock-in period or has a minimum period guarantee as
                        specified by the company, Skylink reserves the right to defer the cancellation until the end of
                        such period.</p>
                </>
            ),
        },
        {
            title: 'B. Non-Refundable Scenarios',
            content: (
                <>
                    <p className="mb-4 leading-relaxed">Refunds will not be provided in the following situations:</p>
                    <div className="mb-6">
                        <ul className="list-disc list-outside space-y-3 pl-5">
                            <li className="leading-relaxed">Temporary suspension of a service at the subscribers
                                request.
                            </li>
                            <li className="leading-relaxed">Suspension of service by Skylink for:</li>
                            <ul className="list-disc list-outside space-y-2 pl-5 mt-2">
                                <li className="leading-relaxed">Maintenance or testing purposes</li>
                                <li className="leading-relaxed">Ensuring service security and integrity or for technical
                                    reasons.
                                </li>
                                <li className="leading-relaxed">Compliance with government directives.</li>
                            </ul>
                        </ul>
                    </div>
                </>
            ),
        },
        {
            title: 'C. How to Cancel Your Subscriber Account',
            content: (
                <>
                    <p className="mb-4 leading-relaxed">Subscribers can request account cancellation through:</p>
                    <div className="mb-6">
                        <ul className="list-disc list-outside space-y-3 pl-5">
                            <li className="leading-relaxed">Phone: Call the helpline at 9944199445.</li>
                            <li className="leading-relaxed">Email: Send a request to support@Skylink.in</li>
                            <li className="leading-relaxed">Online Chat: Visit Skylink assist and use the chat option.
                            </li>
                        </ul>
                    </div>
                </>
            ),
        },
        {
            title: 'D. Refund Process',
            content: (
                <>
                    <p className="mb-4 leading-relaxed">To initiate a refund:</p>
                    <div className="mb-6">
                        <ul className="list-disc list-outside space-y-3 pl-5">
                            <li className="leading-relaxed">Submit a cancellation request via one of the methods
                                mentioned above.
                            </li>
                            <li className="leading-relaxed">If the Skylink connection was obtained under a Refundable
                                Deposit or Entrustment Scheme, return the Customer Premises Equipment (CPE) promptly,
                                adhering to the companys return policy and the Subscription Contract terms.
                            </li>
                            <li className="leading-relaxed">Provide a scanned copy of a cancelled cheque and any other
                                required documents to facilitate a NEFT refund to your bank account.
                            </li>
                            <li className="leading-relaxed">Skylink will process the refund within 20 business days
                                after receiving the cancellation request, necessary documents, and, if applicable, the
                                returned CPE.
                            </li>
                        </ul>
                    </div>
                </>
            ),
        },
        {
            title: 'E. Warranty Coverage and Exclusions:',
            content: (
                <div className="mb-6">
                    <ul className="list-disc list-outside space-y-3 pl-5">
                        <li className="leading-relaxed">Warranty Coverage: Each Skylink Fire Stick/CSE comes with a
                            one-year warranty, effective from the date of installation.
                        </li>
                        <li className="leading-relaxed">Warranty Exclusions: The one-year warranty becomes void if the
                            Skylink Fire Tv/CSE is tampered with or damaged by the subscriber.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'F. Terms and Conditions',
            content: (
                <div className="mb-6">
                    <ul className="list-disc list-outside space-y-3 pl-5">
                        <li className="leading-relaxed">Refunds will cover only the unutilized account balance, after
                            deducting any applicable costs, charges, or expenses incurred by Skylink.
                        </li>
                        <li className="leading-relaxed">The refund excludes charges related to:</li>
                        <ul className="list-disc list-outside space-y-2 pl-5 mt-2 mb-3">
                            <li className="leading-relaxed">Purchased CPE</li>
                            <li className="leading-relaxed">CPE rental if any</li>
                            <li className="leading-relaxed">Network Capacity Fee</li>
                            <li className="leading-relaxed">Installation fees</li>
                            <li className="leading-relaxed">Activation charges</li>
                            <li className="leading-relaxed">Subscription fees</li>
                            <li className="leading-relaxed">Taxes collected or payable, unless otherwise agreed by
                                Skylink.
                            </li>
                        </ul>
                        <li className="leading-relaxed">All refunds are processed exclusively via NEFT; cash refunds are
                            not available.
                        </li>
                        <li className="leading-relaxed">Subscribers who have cancelled their accounts and received
                            refunds cannot reactivate their connections.
                        </li>
                        <li className="leading-relaxed">Subscribers must provide a scanned copy of a cancelled cheque to
                            initiate the NEFT process.
                        </li>
                        <li className="leading-relaxed">Skylink may request additional information or documents to
                            process the cancellation and determine refund eligibility; subscribers are obliged to
                            comply.
                        </li>
                        <li className="leading-relaxed">This Refund Policy is subject to the terms outlined in the
                            Subscription Contract and other related documents available on www.Skylink.in.
                        </li>
                        <li className="leading-relaxed">Skylink reserves the right to modify or replace this Refund
                            Policy, in whole or in part, at any time without prior notice or liability.
                        </li>
                        <li className="leading-relaxed">Capitalized terms used herein have the meanings assigned to them
                            in the Subscription Contract.
                        </li>
                        <li className="leading-relaxed">In the event of any inconsistency between the Subscription
                            Contract and these terms and conditions, in so far as this Refund Policy is concerned, the
                            latter shall prevail.
                        </li>
                        <li className="leading-relaxed">Headings used herein are for reference purposes only and do not
                            affect the interpretation of the policy.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'G. Customer Service Equipment - Duration and Refund Policy',
            content: (
                <>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg mb-6">
                        <table
                            id="refund-table"
                            className="min-w-full divide-y divide-gray-200 text-sm md:text-base text-gray-800"
                        >
                            <thead className="bg-blue-100 text-gray-700">
                            <tr>
                                <th
                                    className="border border-gray-200 px-3 py-3 font-semibold text-center"
                                    rowSpan={2}
                                >
                                    Customer Service Equipment (CSE)
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-3 font-semibold text-center"
                                    rowSpan={2}
                                >
                                    Customer Price
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-3 font-semibold text-center"
                                    colSpan={4}
                                >
                                    Customer Service Equipment - Duration and Refund Policy
                                </th>
                            </tr>
                            <tr className="bg-blue-50">
                                <th
                                    className="border border-gray-200 px-3 py-2 text-center"
                                >
                                    3 Months
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-center"
                                >
                                    6 Months
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-center"
                                >
                                    9 Months
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-center"
                                >
                                    12 Months
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                            {rows.map((row, idx) => (
                                <tr key={idx} className="hover:bg-blue-50 transition duration-150">
                                    {idx === 0 && (
                                        <td
                                            rowSpan={totalRows}
                                            className="border border-gray-200 px-3 py-3 text-center"
                                        >
                                            {row[0]}
                                        </td>
                                    )}

                                    {row.slice(1).map((cell, i) => {
                                        const isLastCell = i === row.length - 2;
                                        const colSpan = isLastCell ? totalColumns - (i + 1) : 1;

                                        return (
                                            <td
                                                key={i}
                                                colSpan={colSpan}
                                                className={`border border-gray-200 px-3 py-3 text-center`}
                                            >
                                                {cell}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}

                            <tr className="hover:bg-blue-50 transition duration-150">
                                <td className="border border-gray-200 px-3 py-3 text-center">
                                    Dual Band Router
                                </td>
                                <td className="border border-gray-200 px-3 py-3 text-center">
                                    1999
                                </td>
                                <td className="border border-gray-200 px-3 py-3 text-center">
                                    1777
                                </td>
                                <td className="border border-gray-200 px-3 py-3 text-center">
                                    1666
                                </td>
                                <td className="border border-gray-200 px-3 py-3 text-center">
                                    1333
                                </td>
                                <td className="border border-gray-200 px-3 py-3 text-center">
                                    1111
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">
                        T&C apply
                    </h2>
                    <div className="mb-6">
                        <ul className="list-disc list-outside space-y-3 pl-5">
                            <li className="leading-relaxed">All prices are including taxes (GST)</li>
                            <li className="leading-relaxed">The above recovery charges are applicable for customers who
                                are on Refundable Deposit scheme with Skylink firestick and or Router
                            </li>
                            <li className="leading-relaxed">Customer to return the CSE and request for refundable
                                deposit if any as per the refund policy shared by Skylink
                            </li>
                            <li className="leading-relaxed">Non-returning of CSE which is part of Skylink and provided
                                on subsidy will be recovered from the Partners account proportionately as per the period
                                shared in the table.
                            </li>
                            <li className="leading-relaxed">Recovery from partners will be either through debit note/
                                adjustments on the monthly commission
                            </li>
                            <li className="leading-relaxed">Non-return of company-provided equipment, such as Skylink
                                assets or Customer Service Equipment (CSE), may be considered a breach of contractual
                                obligations. If the company imposes a financial penalty or initiates legal action
                                resulting in a monetary judgment against you, and this information is reported to credit
                                bureaus, it could negatively affect your CIBIL score
                            </li>
                            <li className="leading-relaxed">Customer Purchase Price is outright purchase, no return or
                                refund policy will be applicable
                            </li>
                            <li className="leading-relaxed">Partner Purchase Price is outright purchase, no return or
                                refund policy will be applicable
                            </li>
                        </ul>
                    </div>
                </>
            ),
        },
        {
            title: 'Dispute Resolution:',
            content: (
                <p className="mb-4 leading-relaxed">
                    Any disputes between Skylink and the subscriber regarding this policy should first be resolved
                    amicably within 30 days of written communication. Failing resolution, disputes
                    will be referred to a sole arbitrator appointed by the Indian Council of Arbitration (ICA),
                    following the Arbitration and Conciliation Act, 1996. Arbitration will take place in
                    Chennai, in English, and the decision will be binding. The courts in Chennai will have exclusive
                    jurisdiction over arbitration proceedings and related matters.
                </p>
            ),
        },
        {
            title: 'Governing Law:',
            content: (
                <p className="mb-4 leading-relaxed">This Refund Policy is governed by the laws of India, and any legal
                    proceedings will be subject to the exclusive jurisdiction of the courts in Chennai.</p>
            ),
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Header Section */}
            <div className="w-full bg-blue-50 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">Refund
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