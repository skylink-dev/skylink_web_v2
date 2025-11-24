import NotFoundBanner from '@/components/notfound/NotFoundBanner';
import LookForSomething from '@/components/notfound/LookForSomething';
import DynamicCarousel from '@/components/DynamicCarousel';
import IconDetails from '@/components/IconDetails';
import {dynamicSlidesData, IconContent} from '@/data/notfound';

export default function NotFound() {
    return (
        <>
            <NotFoundBanner/>
            <LookForSomething/>
            <DynamicCarousel
                title="Let's get you connected"
                slidesData={dynamicSlidesData}
            />
            <IconDetails title="How can we help you today?" iconslist={IconContent}/>
        </>
    );
}