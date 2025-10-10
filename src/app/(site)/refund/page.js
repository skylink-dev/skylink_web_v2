'use client'
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
                    <p>Subscribers of Skylink IPTV Services Private Limited are eligible for a refund of their account balance upon deactivation or termination of their Subscriber Account, in accordance with this Refund Policy.</p>
                    <p>To cancel all services, subscribers should contact Skylink. However, if any service is within a lock-in period or has a minimum period guarantee as specified by the company, Skylink reserves the right to defer the cancellation until the end of such period.</p>
                </>
            ),
        },
        {
            title: 'B. Non-Refundable Scenarios',
            content: (
                <>
                    <p>Refunds will not be provided in the following situations:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4" style={{ margin: '10px 0px 30px 0px' }}>
                        <li>Temporary suspension of a service at the subscribers request.</li>
                        <li>Suspension of service by Skylink for:</li>
                        <ul className="list-disc list-inside ml-6 mt-1 space-y-1" style={{ marginLeft: '25px' }}>
                            <li>Maintenance or testing purposes</li>
                            <li>Ensuring service security and integrity or for technical reasons.</li>
                            <li>Compliance with government directives.</li>
                        </ul>
                    </ul>
                </>
            ),
        },
        {
            title: 'C. How to Cancel Your Subscriber Account',
            content: (
                <>
                    <p>Subscribers can request account cancellation through:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4" style={{ margin: '10px 0px 30px 0px' }}>
                        <li>Phone: Call the helpline at 9944199448.</li>
                        <li>Email: Send a request to support@Skylink.in</li>
                        <li>Online Chat: Visit Skylink assist and use the chat option.</li>
                    </ul>
                </>
            ),
        },
        {
            title: 'D. Refund Process',
            content: (
                <>
                    <p>To initiate a refund:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4" style={{ margin: '20px 0px' }}>
                        <li>Submit a cancellation request via one of the methods mentioned above.</li>
                        <li>If the Skylink connection was obtained under a Refundable Deposit or Entrustment Scheme, return the Customer Premises Equipment (CPE) promptly, adhering to the companys return policy and the Subscription Contract terms.</li>
                        <li>Provide a scanned copy of a cancelled cheque and any other required documents to facilitate a NEFT refund to your bank account.</li>
                        <li>Skylink will process the refund within 20 business days after receiving the cancellation request, necessary documents, and, if applicable, the returned CPE.</li>
                    </ul>
                </>
            ),
        },
        {
            title: 'E. Warranty Coverage and Exclusions:',
            content: (
                <ul className="list-disc list-inside space-y-2 pl-4" style={{ margin: '20px 0px' }}>
                    <li>Warranty Coverage:  Each Skylink Fire Stick/CSE comes with a one-year warranty, effective from the date of installation.</li>
                    <li>Warranty Exclusions: The one-year warranty becomes void if the Skylink Fire Tv/CSE is tampered with or damaged by the subscriber.</li>
                </ul>
            ),
        },
        {
            title: 'F. Terms and Conditions',
            content: (
                <ul className="list-disc list-inside space-y-2 pl-4" style={{ margin: '20px 0px' }}>
                    <li>Refunds will cover only the unutilized account balance, after deducting any applicable costs, charges, or expenses incurred by Skylink.</li>
                    <li>The refund excludes charges related to:</li>
                    <ul className="list-disc list-inside space-y-2 pl-4" style={{ margin: '20px 40px' }}>
                        <li>Purchased CPE</li>
                        <li>CPE rental if any</li>
                        <li>Network Capacity Fee</li>
                        <li>Installation fees</li>
                        <li>Activation charges</li>
                        <li>Subscription fees</li>
                        <li>Taxes collected or payable, unless otherwise agreed by Skylink.</li>
                    </ul>
                    <li>All refunds are processed exclusively via NEFT; cash refunds are not available.</li>
                    <li>Subscribers who have cancelled their accounts and received refunds cannot reactivate their connections.</li>
                    <li>Subscribers must provide a scanned copy of a cancelled cheque to initiate the NEFT process.</li>
                    <li>Skylink may request additional information or documents to process the cancellation and determine refund eligibility; subscribers are obliged to comply.</li>
                    <li>This Refund Policy is subject to the terms outlined in the Subscription Contract and other related documents available on www.Skylink.in.</li>
                    <li>Skylink reserves the right to modify or replace this Refund Policy, in whole or in part, at any time without prior notice or liability.</li>
                    <li>Capitalized terms used herein have the meanings assigned to them in the Subscription Contract.</li>
                    <li>In the event of any inconsistency between the Subscription Contract and these terms and conditions, in so far as this Refund Policy is concerned, the latter shall prevail.</li>
                    <li>Headings used herein are for reference purposes only and do not affect the interpretation of the policy.</li>
                </ul>
            ),
        },
        {
            title: 'G. Customer Service Equipment - Duration and Refund Policy',
            content: (
                <>
                    <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
                        <table
                            id="refund-table"
                            className="min-w-full divide-y divide-gray-200 text-sm text-gray-800"
                        >
                            <thead className="bg-blue-100 text-gray-700">
                                <tr>
                                    <th
                                        className="border border-gray-300 px-4 py-3 font-semibold text-center"
                                        rowSpan={2}
                                        style={{ padding: '10px' }}
                                    >
                                        Customer Service Equipment (CSE)
                                    </th>
                                    <th
                                        className="border border-gray-300 px-4 py-3 font-semibold text-center"
                                        rowSpan={2}
                                        style={{ padding: '10px' }}
                                    >
                                        Customer Price
                                    </th>
                                    <th
                                        className="border border-gray-300 px-4 py-3 font-semibold text-center"
                                        colSpan={4}
                                        style={{ padding: '10px' }}
                                    >
                                        Customer Service Equipment - Duration and Refund Policy
                                    </th>
                                </tr>
                                <tr className="bg-blue-50">
                                    <th
                                        className="border border-gray-300 px-4 py-2 text-center"
                                        style={{ padding: '10px' }}
                                    >
                                        3 Months
                                    </th>
                                    <th
                                        className="border border-gray-300 px-4 py-2 text-center"
                                        style={{ padding: '10px' }}
                                    >
                                        6 Months
                                    </th>
                                    <th
                                        className="border border-gray-300 px-4 py-2 text-center"
                                        style={{ padding: '10px' }}
                                    >
                                        9 Months
                                    </th>
                                    <th
                                        className="border border-gray-300 px-4 py-2 text-center"
                                        style={{ padding: '10px' }}
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
                                                className="border border-gray-300 px-4 py-3 text-center"
                                                style={{ padding: '10px' }}
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
                                                    className={`border border-gray-300 px-4 py-3 text-center`}
                                                    style={{ padding: '10px' }}
                                                >
                                                    {cell}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}

                                <tr className="hover:bg-blue-50 transition duration-150">
                                    <td className="border border-gray-300 px-4 py-3 text-center" style={{ padding: '10px' }}>
                                        Dual Band Router
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-center" style={{ padding: '10px' }}>
                                        1999
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-center" style={{ padding: '10px' }}>
                                        1777
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-center" style={{ padding: '10px' }}>
                                        1666
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-center" style={{ padding: '10px' }}>
                                        1333
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-center" style={{ padding: '10px' }}>
                                        1111
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2
                        className="text-xl font-semibold mb-3"
                        style={{ margin: '15px 0px 15px 0px', fontWeight: 'bold', fontSize: '24px' }}
                    >
                        T&C apply
                    </h2>
                    <ul className="list-disc list-inside space-y-2 pl-4" style={{ marginTop: '15px', marginLeft:"30px" }}>
                        <li>All prices are including taxes (GST)</li>
                        <li>The above recovery charges are applicable for customers who are on Refundable Deposit scheme with Skylink firestick and or Router</li>
                        <li>Customer to return the CSE and request for refundable deposit if any as per the refund policy shared by Skylink</li>
                        <li>Non-returning of CSE which is part of Skylink and provided on subsidy will be recovered from the Partners account proportionately as per the period shared in the table.</li>
                        <li>Recovery from partners will be either through debit note/ adjustments on the monthly commission</li>
                        <li>Non-return of company-provided equipment, such as Skylink assets or Customer Service Equipment (CSE), may be considered a breach of contractual obligations.If the company imposes a financial penalty or initiates legal action resulting in a monetary judgment against you, and this information is reported to credit bureaus, it could negatively affect your CIBIL score</li>
                        <li>Customer Purchase Price is outright purchase, no return or refund policy will be applicable</li>
                        <li>Partner Purchase Price is outright purchase, no return or refund policy will be applicable</li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Dispute Resolution:',
            content: (
                <p>
                    Any disputes between Skylink and the subscriber regarding this policy should first be resolved amicably within 30 days of written communication. Failing resolution, disputes
                    will be referred to a sole arbitrator appointed by the Indian Council of Arbitration (ICA), following the Arbitration and Conciliation Act, 1996. Arbitration will take place in
                    Chennai, in English, and the decision will be binding. The courts in Chennai will have exclusive jurisdiction over arbitration proceedings and related matters.
                </p>
            ),
        },
        {
            title: 'Governing Law:',
            content: (
                <p>This Refund Policy is governed by the laws of India, and any legal proceedings will be subject to the exclusive jurisdiction of the courts in Chennai.</p>
            ),
        },
    ];

    return (
        <>
            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                <div className="contact aem-GridColumn aem-GridColumn--default--12" style={{ margin: '30px 0px' }}>
                    <div className="contact-phone">
                        <h2 className="heading-xxl">Refund Policy</h2>
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
    );
}
