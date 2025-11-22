import React from 'react';
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import VisionMission from './VisionMission';
import WhyChooseSkylink from './WhyChooseSkylink';
import NetworkPresence from './NetworkPresence';
import HowWeWork from './HowWeWork';
import OurCommitment from './OurCommitment';

export default function Company() {
    return (
        <div>
            <AboutHero/>
            <AboutIntro/>
            <VisionMission/>
            <WhyChooseSkylink/>
            <NetworkPresence/>
            <HowWeWork/>
            <OurCommitment/>
        </div>
    );
}