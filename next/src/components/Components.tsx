import BenefitsItems, { BenefitsItems_Query, type BenefitsItemsTypes } from '@/components/_global/BenefitsItems';
import Faq, { Faq_Query, type FaqTypes } from '@/components/_global/Faq';
import Idea, { Idea_Query, type IdeaTypes } from '@/components/_global/Idea';
import KeyDetails, { type KeyDetailsTypes, KeyDetails_Query } from '@/components/_global/KeyDetails';
import LargeImage, { LargeImage_Query } from '@/components/_global/LargeImage';
import Perks, { Perks_Query, type PerksTypes } from '@/components/_global/Perks';
import Reviews, { Reviews_Query, type ReviewsTypes } from '@/components/_global/Reviews';
import Newsletter, { Newsletter_Query, type NewsletterTypes } from '@/components/_global/Newsletter';
import StatsList, { StatsList_Query, type StatsListTypes } from '@/components/_global/StatsList';
import HeroWithRotatingElipsis, {
  HeroWithRotatingElipsis_Query,
  type HeroWithRotatingElipsisTypes,
} from '@/components/_global/HeroWithRotatingElipsis';
import HeroColumnWithImageReactor, {
  HeroColumnWithImageReactor_Query,
  type HeroColumnWithImageReactorTypes,
} from '@/components/_global/HeroColumnWithImageReactor';
import Charts, { Charts_Query, type ChartsTypes } from '@/components/_global/Charts';
import CompaniesShowcase, {
  CompaniesShowcase_Query,
  type CompaniesShowcaseTypes,
} from '@/components/_global/CompaniesShowcase';
import RevealImage, { RevealImage_Query, type RevealImageTypes } from '@/components/_global/RevealImage';
import type { ImgType } from '@/global/types';
import TraitsListWithIcons, {
  TraitsListWithIcons_Query,
  type TraitsListWithIconsTypes,
} from '@/components/_global/TraitsListWithIcons';
import SimpleDescriptiveGrid, {
  SimpleDescriptiveGrid_Query,
  type SimpleDescriptiveGridTypes,
} from './_global/SimpleDescriptiveGrid';
import AdvancedCtaSection, {
  AdvancedCtaSection_Query,
  type AdvancedCtaSectionTypes,
} from '@/components/_global/AdvancedCtaSection';
import DetailedOrderedList, {
  DetailedOrderedList_Query,
  type DetailedOrderedListTypes,
} from '@/components/_global/DetailedOrderedList';
import PersonPresentation, {
  PersonPresentation_Query,
  type PersonPresentationTypes,
} from '@/components/_global/PersonPresentation';
import ImageReactor, { ImageReactor_Query, type ImageReactorTypes } from '@/components/_global/ImageReactor';
import SimpleCtaSection, {
  SimpleCtaSection_Query,
  type SimpleCtaSectionTypes,
} from '@/components/_global/SimpleCtaSection';
import CourseDetails, { CourseDetails_Query, type CourseDetailsTypes } from '@/components/_global/CourseDetails';
import BadgeIconSection, {
  BadgeIconSection_Query,
  type BadgeIconSectionTypes,
} from '@/components/_global/BadgeIconSection';
import TeamIntroduction, {
  TeamIntroduction_Query,
  type TeamIntroductionTypes,
} from '@/components/_global/TeamIntroduction';
import ComparisonTable, {
  ComparisonTable_Query,
  type ComparisonTableTypes,
} from '@/components/_global/ComparisonTable';
import CourseComparison, {
  CourseComparison_Query,
  type CourseComparisonTypes,
} from '@/components/_global/CourseComparison';
import CompaniesDescriptiveShowcase, {
  CompaniesDescriptiveShowcase_Query,
  type CompaniesDescriptiveShowcaseTypes,
} from '@/components/_global/CompaniesDescriptiveShowcase';
import PlansComparison, {
  PlansComparison_Query,
  type PlansComparisonTypes,
} from '@/components/_global/PlansComparison';
import VideoSection, { VideoSection_Query, type VideoSectionTypes } from '@/components/_global/VideoSection';
import BenefitsBackgroundItems, {
  BenefitsBackgroundItems_Query,
  type BenefitsBackgroundItemsTypes,
} from './_global/BenefitsBackgroundItems';
import HeroImageBackground, {
  HeroImageBackground_Query,
  type HeroImageBackgroundTypes,
} from './_global/HeroImageBackground';

type ComponentMapType = {
  HeroColumnWithImageReactor: HeroColumnWithImageReactorTypes;
  HeroWithRotatingElipsis: HeroWithRotatingElipsisTypes;
  HeroImageBackground: HeroImageBackgroundTypes;
  SimpleDescriptiveGrid: SimpleDescriptiveGridTypes;
  DetailedOrderedList: DetailedOrderedListTypes;
  AdvancedCtaSection: AdvancedCtaSectionTypes;
  TraitsListWithIcons: TraitsListWithIconsTypes;
  RevealImage: RevealImageTypes;
  Newsletter: NewsletterTypes;
  CompaniesShowcase: CompaniesShowcaseTypes;
  KeyDetails: KeyDetailsTypes;
  Perks: PerksTypes;
  SimpleCtaSection: SimpleCtaSectionTypes;
  StatsList: StatsListTypes;
  BenefitsItems: BenefitsItemsTypes;
  Reviews: ReviewsTypes;
  Idea: IdeaTypes;
  Faq: FaqTypes;
  LargeImage: ImgType;
  Charts: ChartsTypes;
  PersonPresentation: PersonPresentationTypes;
  ImageReactor: ImageReactorTypes;
  CourseDetails: CourseDetailsTypes;
  BadgeIconSection: BadgeIconSectionTypes;
  TeamIntroduction: TeamIntroductionTypes;
  ComparisonTable: ComparisonTableTypes;
  CourseComparison: CourseComparisonTypes;
  CompaniesDescriptiveShowcase: CompaniesDescriptiveShowcaseTypes;
  PlansComparison: PlansComparisonTypes;
  VideoSection: VideoSectionTypes;
  BenefitsBackgroundItems: BenefitsBackgroundItemsTypes;
};

const ComponentMap = ({ props }) => ({
  HeroColumnWithImageReactor: <HeroColumnWithImageReactor {...(props as HeroColumnWithImageReactorTypes)} />,
  HeroWithRotatingElipsis: <HeroWithRotatingElipsis {...(props as HeroWithRotatingElipsisTypes)} />,
  HeroImageBackground: <HeroImageBackground {...(props as HeroImageBackgroundTypes)} />,
  SimpleDescriptiveGrid: <SimpleDescriptiveGrid {...(props as SimpleDescriptiveGridTypes)} />,
  DetailedOrderedList: <DetailedOrderedList {...(props as DetailedOrderedListTypes)} />,
  AdvancedCtaSection: <AdvancedCtaSection {...(props as AdvancedCtaSectionTypes)} />,
  TraitsListWithIcons: <TraitsListWithIcons {...(props as TraitsListWithIconsTypes)} />,
  RevealImage: <RevealImage {...(props as RevealImageTypes)} />,
  Newsletter: <Newsletter {...(props as NewsletterTypes)} />,
  CompaniesShowcase: <CompaniesShowcase {...(props as CompaniesShowcaseTypes)} />,
  KeyDetails: <KeyDetails {...(props as KeyDetailsTypes)} />,
  Perks: <Perks {...(props as PerksTypes)} />,
  SimpleCtaSection: <SimpleCtaSection {...(props as SimpleCtaSectionTypes)} />,
  StatsList: <StatsList {...(props as StatsListTypes)} />,
  BenefitsItems: <BenefitsItems {...(props as BenefitsItemsTypes)} />,
  Reviews: <Reviews {...(props as ReviewsTypes)} />,
  Idea: <Idea {...(props as IdeaTypes)} />,
  Faq: <Faq {...(props as FaqTypes)} />,
  LargeImage: <LargeImage {...(props as ImgType)} />,
  Charts: <Charts {...(props as ChartsTypes)} />,
  PersonPresentation: <PersonPresentation {...(props as PersonPresentationTypes)} />,
  ImageReactor: <ImageReactor {...(props as ImageReactorTypes)} />,
  CourseDetails: <CourseDetails {...(props as CourseDetailsTypes)} />,
  BadgeIconSection: <BadgeIconSection {...(props as BadgeIconSectionTypes)} />,
  TeamIntroduction: <TeamIntroduction {...(props as TeamIntroductionTypes)} />,
  ComparisonTable: <ComparisonTable {...(props as ComparisonTableTypes)} />,
  CourseComparison: <CourseComparison {...(props as CourseComparisonTypes)} />,
  CompaniesDescriptiveShowcase: <CompaniesDescriptiveShowcase {...(props as CompaniesDescriptiveShowcaseTypes)} />,
  PlansComparison: <PlansComparison {...(props as PlansComparisonTypes)} />,
  VideoSection: <VideoSection {...(props as VideoSectionTypes)} />,
  BenefitsBackgroundItems: <BenefitsBackgroundItems {...(props as BenefitsBackgroundItemsTypes)} />,
});

export type ComponentsTypes = {
  data: ComponentMapType[keyof ComponentMapType] & { _type: string }[];
  countdown_Date?: string;
};

const Components = ({ data }: { data: ComponentsTypes }) => {
  return data?.map((item) => {
    const componentName = item._type;
    const Component = ComponentMap({ props: item })[componentName];
    if (!Component) return null;
    return Component;
  });
};

export default Components;

export const Components_Query = /* groq */ `
  content[] {
    _type,
    ${HeroImageBackground_Query}
    ${RevealImage_Query}
    ${Newsletter_Query}
    ${TraitsListWithIcons_Query}
    ${CompaniesShowcase_Query}
    ${HeroColumnWithImageReactor_Query}
    ${KeyDetails_Query}
    ${HeroWithRotatingElipsis_Query}
    ${BenefitsItems_Query}
    ${Perks_Query}
    ${SimpleCtaSection_Query}
    ${StatsList_Query}
    ${Reviews_Query}
    ${Idea_Query}
    ${Faq_Query}
    ${LargeImage_Query}
    ${Charts_Query}
    ${SimpleDescriptiveGrid_Query}
    ${DetailedOrderedList_Query}
    ${AdvancedCtaSection_Query}
    ${PersonPresentation_Query}
    ${ImageReactor_Query}
    ${CourseDetails_Query}
    ${BadgeIconSection_Query}
    ${TeamIntroduction_Query}
    ${ComparisonTable_Query}
    ${CourseComparison_Query}
    ${CompaniesDescriptiveShowcase_Query}
    ${PlansComparison_Query}
    ${VideoSection_Query}
    ${BenefitsBackgroundItems_Query}
  },
`;
