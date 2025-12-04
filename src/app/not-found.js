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
                title="Let's Get You Connected"
                slidesData={dynamicSlidesData}
            />
            <IconDetails title="How Can We Help You Today?" iconslist={IconContent}/>
        </>
    );
}