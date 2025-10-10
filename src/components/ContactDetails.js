import Link from 'next/link';
import React from 'react';

const contactSections = [
  {
    title: 'Want to call us?',
    iconType: 'phone',
    contacts: [
      {
        label: 'Wireless support:',
        numbers: [
          { label: '+919944199445', link: 'tel:+919944199445' },
        ],
        note: 'Available 24/7',
      },
      {
        label: 'Internet or home phone support:',
        numbers: [{ label: '+919944199445', link: 'tel:+919944199445' }],
        note: 'Available 24/7',
      },
    ],
  },
  {
    title: 'Support video library',
    iconType: 'video',
    description: 'Explore videos to help with your account, service, or device.',
    link: {
      href: '/support/pages/help-videos',
      text: 'Go to video library',
    },
  },
    {
    title: 'Small business support',
    iconType: 'home',
    description: 'Looking for help for your business internet, phone, or wire accounts? We have you covered.',
    link: {
      href: '/support/pages/help-videos',
      text: 'Go to business support',
    },
  },
];

const getIcon = (type) => {
  if (type === 'phone') {
    return (
      <svg aria-label="WantUsToCall Icon" aria-hidden="false" focusable="false" className="color-ui-white" height="64" width="64" viewBox="0 0 96 96">
        <title>Want to call us?</title>
        <path className="svg-base" d="M69.18 84.12a11.8 11.8 0 01-3.73-.61 84.14 84.14 0 01-53-53 11.67 11.67 0 012.83-12l4.8-4.8a6.37 6.37 0 019 0l8.82 8.82a6.34 6.34 0 011.35 7l-4.11 9.59a35.18 35.18 0 0021.69 21.7l9.59-4.11a6.34 6.34 0 017 1.35l8.82 8.82a6.37 6.37 0 010 9l-4.8 4.8a11.67 11.67 0 01-8.26 3.44zM24.62 13.89a4.34 4.34 0 00-3.09 1.28L16.74 20a9.68 9.68 0 00-2.35 10 82.09 82.09 0 0051.69 51.61 9.67 9.67 0 0010-2.35l4.79-4.79a4.36 4.36 0 000-6.18L72 59.48a4.35 4.35 0 00-4.81-.93l-9.94 4.26a1 1 0 01-.71 0 37.16 37.16 0 01-23.4-23.4 1 1 0 010-.71l4.26-9.94a4.35 4.35 0 00-.88-4.76l-8.81-8.81a4.32 4.32 0 00-3.09-1.3z"></path>
        <path className="svg-accent" d="M64.13 46h-2A12.14 12.14 0 0050 33.87v-2A14.15 14.15 0 0164.13 46zM50 20.94v2A23.08 23.08 0 0173.06 46h2A25.09 25.09 0 0050 20.94zM50 10v2a34 34 0 0134 34h2a36 36 0 00-36-36z"></path>
      </svg>
    );
  }

  if (type === 'video') {
    return (
      <svg aria-label="helpVideosAccess Icon" aria-hidden="false" focusable="false" className="color-ui-white" height="64" width="64" viewBox="0 0 96 96">
        <title>Support video library</title>
        <path className="svg-accent" d="M34 72.5v-37L58.72 54zm2-33v29L55.38 54z"></path>
        <path className="svg-base" d="M73 80H12a6 6 0 01-6-6V34a6 6 0 016-6h61a6 6 0 016 6v40a6 6 0 01-6 6zM12 30a4 4 0 00-4 4v40a4 4 0 004 4h61a4 4 0 004-4V34a4 4 0 00-4-4zm78-7a6 6 0 00-6-6H16v2h68a4 4 0 014 4v48h2z"></path>
      </svg>
    );
  }
   if (type === 'home') {
    return (
      <svg aria-label="ConsumerAndSMBCard Icon" aria-hidden="false" focusable="false" className="color-ui-white" height="64" width="64" viewBox="0 0 96 96"><title> Small business support </title><path className="svg-accent" d="M75 67H50V51h25zm-23-2h21V53H52z"></path><path className="svg-base" d="M87 27h-3.51l-3.26-12H15.77l-3.26 12H9v8h3v40a6 6 0 006 6h60a6 6 0 006-6V35h3zM17.3 17h61.4l2.72 10H14.58zM23 79V60.5a7.5 7.5 0 0115 0V79zm55 0H40V60.5a9.5 9.5 0 00-19 0V79h-3a4 4 0 01-4-4V39.89a9.72 9.72 0 0016.5-1.62 9.73 9.73 0 0017.5 0 9.73 9.73 0 0017.5 0A9.72 9.72 0 0082 39.89V75a4 4 0 01-4 4zM14.07 35h15.36a7.74 7.74 0 01-15.36 0zm17.5 0h15.36a7.74 7.74 0 01-15.36 0zm17.5 0h15.36a7.74 7.74 0 01-15.36 0zm17.5 0h15.36a7.74 7.74 0 01-15.36 0zM85 33H11v-4h74z"></path></svg>
    );
  }

  return null;
};

export default function ContactDetails() {
  return (
    <div className="SupportLanderContainer_bottomBgColor__9QfiA">
      <div className="full-width-background mar-t-sm">
        <div className="container">
          <div className="row flex-wrap">
            {contactSections.map((section, idx) => (
              <div key={idx} className="SupportLanderContainer_footerCardPanel___fLA_ grid-col-4">
                <div className="card height-full rel z0 pad-sm-lg pad-md-md undefined bgcolor theme-base-bg bg-white color-gray-800 pad-xs-sm  radius-lg  SupportLanderContainer_bottomBgColor__9QfiA">
                  <div className="flex-row pad-xs pad-l-none">
                    <div>{getIcon(section.iconType)}</div>
                    <div className="pad-t-xs pad-l-xxs">
                      <h2 className="mar-b-xs heading-sm color-ui-white">{section.title}</h2>
                    </div>
                  </div>

                  {section.contacts ? (
                    <div className="ContactBanner_contactInfo__InY1K">
                      {section.contacts.map((c, i) => (
                        <div key={i} className={i !== 0 ? 'mar-t-sm' : ''}>
                          <div className="type-base color-white rte-styles">
                            <span>{c.label}</span>
                            <br />
                            {c.numbers.map((n, j) => (
                              <React.Fragment key={j}>
                                <Link href={n.link} aria-label={n.label} rel="noopener" role="link">
                                  {n.label}
                                </Link>
                                {n.note && <span>{n.note}</span>}
                                {j < c.numbers.length - 1 && ' or '}
                              </React.Fragment>
                            ))}
                            <p>{c.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div className="type-base color-ui-white rte-styles">{section.description}</div>
                      <p className="type-base mar-b-sm color-white">
                        <Link id="Go-to-video-library-lnk-0188" className="    link-text3" href={section.link.href}>
                          {section.link.text}
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
