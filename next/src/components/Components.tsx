import Author, { Author_Query, type AuthorProps } from '@/components/_global/Author';
import BenefitsItems, { BenefitsItems_Query, type BenefitsItemsTypes } from '@/components/_global/BenefitsItems';
import Faq, { Faq_Query, type FaqTypes } from '@/components/_global/Faq';
import Idea, { Idea_Query, type IdeaTypes } from '@/components/_global/Idea';
import KeyDetails, { type KeyDetailsTypes, KeyDetails_Query } from '@/components/_global/KeyDetails';
import LargeImage, { LargeImage_Query } from '@/components/_global/LargeImage';
import Lessons, { Lessons_Query, type LessonsProps } from '@/components/_global/Lessons';
import Perks, { type PerksProps, Perks_Query } from '@/components/_global/Perks';
import Recipients, { Recipients_Query, type RecipientsProps } from '@/components/_global/Recipients';
import Reviews, { Reviews_Query, type ReviewsTypes } from '@/components/_global/Reviews';
import Newsletter, { Newsletter_Query, type NewsletterTypes } from '@/components/_global/Newsletter';
import Stats, { Stats_Query, type StatsProps } from '@/components/_global/Stats';
import HeroWithRotatingElipsis, {
  HeroWithRotatingElipsis_Query,
  type HeroWithRotatingElipsisTypes,
} from '@/components/_global/HeroWithRotatingElipsis';
import HeroColumnWithImageReactor, {
  HeroColumnWithImageReactor_Query,
  type HeroColumnWithImageReactorTypes,
} from '@/components/_global/HeroColumnWithImageReactor';
import Charts, { Charts_Query, type ChartsProps } from '@/components/_global/Charts';
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
  SimpleDescriptiveGridTypes,
} from './_global/SimpleDescriptiveGrid';
import AdvancedCtaSection, { AdvancedCtaSection_Query, type AdvancedCtaSectionTypes } from '@/components/_global/AdvancedCtaSection';
import DetailedOrderedList, {
  DetailedOrderedList_Query,
  type DetailedOrderedListTypes,
} from '@/components/_global/DetailedOrderedList';
import PersonPresentation, {
  PersonPresentation_Query,
  type PersonPresentationTypes,
} from '@/components/_global/PersonPresentation';
import ImageReactor, { ImageReactor_Query, type ImageReactorTypes } from '@/components/_global/ImageReactor';
import { SimpleCtaSection_Query, type SimpleCtaSectionTypes } from '@/components/_global/SimpleCtaSection';
import SimpleCtaSection from './_global/SimpleCtaSection/SimpleCtaSection';
import CourseDetails, { CourseDetails_Query, type CourseDetailsTypes } from '@/components/_global/CourseDetails';
import BadgeIconSection, { BadgeIconSection_Query, type BadgeIconSectionTypes } from '@/components/_global/BadgeIconSection';
import TeamIntroduction, { TeamIntroduction_Query, type TeamIntroductionTypes } from '@/components/_global/TeamIntroduction';
import ComparisonTable, { ComparisonTable_Query, type ComparisonTableTypes } from '@/components/_global/ComparisonTable';
import CourseComparison, { CourseComparison_Query, type CourseComparisonTypes } from '@/components/_global/CourseComparison';
import CompaniesDescriptiveShowcase, {
  CompaniesDescriptiveShowcase_Query,
  type CompaniesDescriptiveShowcaseTypes,
} from '@/components/_global/CompaniesDescriptiveShowcase';
import PlansComparison, { PlansComparison_Query, type PlansComparisonTypes } from '@/components/_global/PlansComparison';
import VideoSection, { VideoSection_Query, type VideoSectionTypes } from '@/components/_global/VideoSection';

type ComponentMapType = {
  RevealImage: RevealImageTypes;
  Newsletter: NewsletterTypes;
  CompaniesShowcase: CompaniesShowcaseTypes;
  HeroColumnWithImageReactor: HeroColumnWithImageReactorTypes;
  KeyDetails: KeyDetailsTypes;
  HeroWithRotatingElipsis: HeroWithRotatingElipsisTypes;
  TraitsListWithIcons: TraitsListWithIconsTypes;
  BenefitsItems: BenefitsItemsTypes;
  Perks: PerksProps;
  SimpleCtaSection: SimpleCtaSectionTypes;
  Stats: StatsProps;
  Recipients: RecipientsProps;
  Reviews: ReviewsTypes;
  Idea: IdeaTypes;
  Lessons: LessonsProps;
  Faq: FaqTypes;
  Author: AuthorProps;
  LargeImage: ImgType;
  Charts: ChartsProps;
  SimpleDescriptiveGrid: SimpleDescriptiveGridTypes;
  DetailedOrderedList: DetailedOrderedListTypes;
  AdvnacedCtaSection: AdvancedCtaSectionTypes;
  PersonPresentation: PersonPresentationTypes;
  ImageReactor: ImageReactorTypes;
  CourseDettails: CourseDetailsTypes;
  BadgeIconSection: BadgeIconSectionTypes;
  TeamIntroduction: TeamIntroductionTypes;
  ComparisonTable: ComparisonTableTypes;
  CourseComparison: CourseComparisonTypes;
  CompaniesDescriptiveShowcase: CompaniesDescriptiveShowcaseTypes;
  PlansComparison: PlansComparisonTypes;
  VideoSection: VideoSectionTypes;
};

const ComponentMap = ({ props }) => ({
  RevealImage: <RevealImage {...(props as RevealImageTypes)} />,
  Newsletter: <Newsletter {...(props as NewsletterTypes)} />,
  CompaniesShowcase: <CompaniesShowcase {...(props as CompaniesShowcaseTypes)} />,
  HeroColumnWithImageReactor: <HeroColumnWithImageReactor {...(props as HeroColumnWithImageReactorTypes)} />,
  KeyDetails: <KeyDetails {...(props as KeyDetailsTypes)} />,
  HeroWithRotatingElipsis: <HeroWithRotatingElipsis {...(props as HeroWithRotatingElipsisProps)} />,
  TraitsListWithIcons: <TraitsListWithIcons {...(props as TraitsListWithIconsTypes)} />,
  BenefitsItems: <BenefitsItems {...(props as BenefitsItemsTypes)} />,
  Perks: <Perks {...(props as PerksProps)} />,
  SimpleCtaSection: <SimpleCtaSection {...(props as SimpleCtaSectionTypes)} />,
  DetailedOrderedList: <DetailedOrderedList {...(props as DetailedOrderedListTypes)} />,
  Stats: <Stats {...(props as StatsProps)} />,
  Recipients: <Recipients {...(props as RecipientsProps)} />,
  Reviews: <Reviews {...(props as ReviewsProps)} />,
  Idea: <Idea {...(props as IdeaProps)} />,
  Lessons: <Lessons {...(props as LessonsProps)} />,
  Faq: <Faq {...(props as FaqTypes)} />,
  Author: <Author {...(props as AuthorProps)} />,
  LargeImage: <LargeImage {...(props as ImgType)} />,
  Charts: <Charts {...(props as ChartsProps)} />,
  SimpleDescriptiveGrid: <SimpleDescriptiveGrid {...(props as SimpleDescriptiveGridTypes)} />,
  AdvancedCtaSection: <AdvancedCtaSection {...(props as AdvancedCtaSectionTypes)} />,
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
});

export type ComponentsTypes = {
  data: ComponentMapType[keyof ComponentMapType] & { _type: string }[];
  countdown_Date?: string;
};

const Components = ({ data, countdown_Date }: ComponentsTypes) => {
  return data?.map((item) => {
    const componentName = item._type;
    const Component = ComponentMap({ data: { ...item, countdown_Date } })[componentName];
    if (!Component) return null;
    return Component;
  });
};

export default Components;

export const Components_Query = /* groq */ `
  content[] {
    _type,
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
    ${Stats_Query}
    ${Recipients_Query}
    ${Reviews_Query}
    ${Idea_Query}
    ${Lessons_Query}
    ${Faq_Query}
    ${Author_Query}
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
  },
`;
