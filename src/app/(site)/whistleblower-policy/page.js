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
    title: "Policy Statement",
    content: (
      <>
        <p>
          Operating in many countries and regions around the world, Skylink
          (Skylink, the “Company”) complies with anti-bribery and
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
        <p>
          In order to further promote the Companys compliance and
          anti-corruption work, open up the channels of supervision and
          reporting, improve reporting mechanism and effectively play the role of
          supervision, the Company has established this Whistleblower Policy
          (“Policy”) and the following Whistleblower Mailbox (“Mailbox”), so as
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
      <>
        <ul className="list-disc list-inside space-y-2 pl-4" >
          <li>
            The whistleblower shall report based on facts. The Company guarantees
            to not punish or retaliate against reports made in good faith, but
            may take actions against reports that involve fabrication, falsified
            evidence, or false accusations against others.
          </li>
          <li>
            The Company encourages reports made in detail and using real names of
            whistleblowers, as these facts may facilitate the Company conduct a
            more detailed and in-depth investigations of the reported matters and
            provide feedback. The Company will keep the information of the
            whistleblower strictly confidential.
          </li>
          <li>
            The whistleblower should, to the extent possible, provide all
            available evidence or supporting documents of the reported
            misconduct, corruption, or violations. If it is not possible to
            provide such information, the Company may utilize all feasible means
            to collect relevant evidence.
          </li>
          <li>
            Whistleblowers may report matters to the Mailbox by registered mail,
            local express mail, or express mail. The post office does not require
            senders to provide their names or addresses. If whistleblowers do not
            want to disclose their identity, they can choose to report
            anonymously.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Applicable Scope of Matters",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 pl-4" >
          <li>
            Violations of company policies by management or employees at all
            levels and all subordinate units of Skylink;
          </li>
          <li>
            Actions by any Skylink employees in key positions in the course of
            business, including but not limited to failure to perform their
            duties in accordance with the law; violations of policies related to
            proper uses of powers associated with their positions, ethical
            practices, or moral behaviors; suspicion of corruption or bribery,
            abusing power, rent-seeking, “pay-to-play,” favoritism, or wasting
            company resources; or other illegal and criminal activities;
          </li>
          <li>Appeal decision(s) of accountability proceeding(s);</li>
          <li>
            Critique or provide suggestions to the regulatory compliance, ethical
            governance infrastructure, and anti-bribery and corruption related
            matters of the company, etc.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Whistleblowing Channels:",
    content: (
      <>
        <p>
          Report to Supervision Department: Supervision Department, A1, Vue
          Grande, 339, Siddhapudur, Coimbatore, Tamil Nadu 641044, India
        </p>
        <p>
          Email: <a href="mailto:info@skylink.net.in">info@skylink.net.in</a>
        </p>
        <p>
          Phone: <a href="tel:+919944199445">+91 99441 99445</a>
        </p>
      </>
    ),
  },
  {
    title: "Handling Reports",
    content: (
      <>
        <p>
          The Supervision Department is the designated department to receive
          Whistleblower reports, and is fully responsible for managing the
          reported matters; the Supervision Department is also responsible for
          processing the receipt of such reports, and categorizing them for
          subsequent handling strictly in accordance with relevant regulations
          and procedures, whether the report was made in person or through the
          Mailbox. All reported information needs to be stored confidentially in
          the Supervision Department, and only authorized personnel can access
          such information (e.g., investigator in charge of the matter or
          specific personnel designated as “need-to-know”). Skylink will take
          strict measures to ensure the reported matters remain confidential.
        </p>
        <p>
          Matters related to violation of policies, the law, ethics and
          professional rules, and appeal of accountability proceeding dispositions
          are handled by the Supervision Department. General complaints are
          categorized and transferred to relevant departments for handling and
          recordkeeping after the acceptance of these matters by the Supervision
          Department.
        </p>
        <p>
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
    <>
    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                <div className="contact aem-GridColumn aem-GridColumn--default--12" style={{ margin: '30px 0px' }}>
                    <div className="contact-phone">
                        <h2 className="heading-xxl">Whistleblower Policy</h2>
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
