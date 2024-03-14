import Author, { Author_Query, type AuthorProps } from '@/components/_global/Author';
import Benefits, { Benefits_Query, type BenefitsProps } from '@/components/_global/Benefits';
import Faq, { Faq_Query, type FaqTypes } from '@/components/_global/Faq';
import Idea, { Idea_Query, type IdeaTypes } from '@/components/_global/Idea';
import KeyDetails, { type KeyDetailsTypes, KeyDetails_Query } from '@/components/_global/KeyDetails';
import LargeImage, { LargeImage_Query } from '@/components/_global/LargeImage';
import Lessons, { Lessons_Query, type LessonsProps } from '@/components/_global/Lessons';
import Perks, { type PerksProps, Perks_Query } from '@/components/_global/Perks';
import Recipients, { Recipients_Query, type RecipientsProps } from '@/components/_global/Recipients';
import Reviews, { Reviews_Query, type ReviewsProps } from '@/components/_global/Reviews';
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
} from '@/components/_global/SimpleDescriptiveGrid';
import DetailedOrderedList, {
  DetailedOrderedList_Query,
  DetailedOrderedListTypes,
} from '@/components/_global/DetailedOrderedList';
import AdvancedCtaSection, {
  AdvancedCtaSection_Query,
  AdvancedCtaSectionTypes,
} from '@/components/_global/AdvancedCtaSection';
import PersonPresentation, {
  PersonPresentation_Query,
  PersonPresentationTypes,
} from '@/components/_global/PersonPresentation';
import ImageReactor, { ImageReactor_Query, type ImageReactorTypes } from '@/components/_global/ImageReactor';
import SimpleCtaSection, { SimpleCtaSection_Query, SimpleCtaSectionTypes } from '@/components/_global/SimpleCtaSection';

type ComponentMapType = {
  RevealImage: RevealImageTypes;
  Newsletter: NewsletterTypes;
  CompaniesShowcase: CompaniesShowcaseTypes;
  HeroColumnWithImageReactor: HeroColumnWithImageReactorTypes;
  KeyDetails: KeyDetailsTypes;
  HeroWithRotatingElipsis: HeroWithRotatingElipsisTypes;
  TraitsListWithIcons: TraitsListWithIconsTypes;
  Benefits: BenefitsProps;
  Perks: PerksProps;
  SimpleCtaSection: SimpleCtaSectionTypes;
  Stats: StatsProps;
  Recipients: RecipientsProps;
  Reviews: ReviewsProps;
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
};

const ComponentMap = ({ data }) => ({
  RevealImage: <RevealImage {...(data as RevealImageTypes)} />,
  Newsletter: <Newsletter {...(data as NewsletterTypes)} />,
  CompaniesShowcase: <CompaniesShowcase {...(data as CompaniesShowcaseTypes)} />,
  HeroColumnWithImageReactor: <HeroColumnWithImageReactor {...(data as HeroColumnWithImageReactorTypes)} />,
  KeyDetails: <KeyDetails {...(data as KeyDetailsTypes)} />,
  HeroWithRotatingElipsis: <HeroWithRotatingElipsis {...(data as HeroWithRotatingElipsisTypes)} />,
  TraitsListWithIcons: <TraitsListWithIcons {...(data as TraitsListWithIconsTypes)} />,
  Benefits: <Benefits {...(data as BenefitsProps)} />,
  Perks: <Perks {...(data as PerksProps)} />,
  SimpleCtaSection: <SimpleCtaSection {...(data as SimpleCtaSectionTypes)} />,
  DetailedOrderedList: <DetailedOrderedList {...(data as DetailedOrderedListTypes)} />,
  Stats: <Stats {...(data as StatsProps)} />,
  Recipients: <Recipients {...(data as RecipientsProps)} />,
  Reviews: <Reviews {...(data as ReviewsProps)} />,
  Idea: <Idea {...(data as IdeaTypes)} />,
  Lessons: <Lessons {...(data as LessonsProps)} />,
  Faq: <Faq {...(data as FaqTypes)} />,
  Author: <Author {...(data as AuthorProps)} />,
  LargeImage: <LargeImage {...(data as ImgType)} />,
  Charts: <Charts {...(data as ChartsProps)} />,
  SimpleDescriptiveGrid: <SimpleDescriptiveGrid {...(data as SimpleDescriptiveGridTypes)} />,
  AdvancedCtaSection: <AdvancedCtaSection {...(data as AdvancedCtaSectionTypes)} />,
  PersonPresentation: <PersonPresentation {...(data as PersonPresentationTypes)} />,
  ImageReactor: <ImageReactor {...(data as ImageReactorTypes)} />,
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
    ${Benefits_Query}
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
  },
`;
