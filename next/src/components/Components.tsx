import Author, { Author_Query, type AuthorProps } from '@/components/_global/Author';
import Benefits, { Benefits_Query, type BenefitsProps } from '@/components/_global/Benefits';
import Certificate, { Certificate_Query, type CertificateProps } from '@/components/_global/Certificate';
import CtaSection, { CtaSection_Query, type CtaSectionProps } from '@/components/_global/CtaSection';
import Faq, { Faq_Query, type FaqProps } from '@/components/_global/Faq';
import Idea, { Idea_Query, type IdeaProps } from '@/components/_global/Idea';
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
  type HeroWithRotatingElipsisProps,
} from '@/components/_global/HeroWithRotatingElipsis';
import HeroColumnWithImageReactor, {
  HeroColumnWithImageReactor_Query,
  type HeroColumnWithImageReactorTypes,
} from '@/components/_global/HeroColumnWithImageReactor';
import Charts, { Charts_Query, type ChartsProps } from '@/components/_global/Charts';
import CompaniesShowcase, {
  CompaniesShowcase_Query,
  type CompaniesShowcaseProps,
} from '@/components/_global/CompaniesShowcase';
import RevealImage, { RevealImage_Query, type RevealImageTypes } from '@/components/_global/RevealImage';
import HeadingGrid, { HeadingGrid_Query, HeadingGridProps } from '@/components/_global/HeadingGrid';
import type { ImgType } from '@/global/types';
import TraitsListWithIcons, {
  TraitsListWithIcons_Query,
  type TraitsListWithIconsTypes,
} from './_global/TraitsListWithIcons';

type ComponentMapType = {
  RevealImage: RevealImageTypes;
  Newsletter: NewsletterTypes;
  CompaniesShowcase: CompaniesShowcaseProps;
  HeroColumnWithImageReactor: HeroColumnWithImageReactorTypes;
  KeyDetails: KeyDetailsTypes;
  HeroWithRotatingElipsis: HeroWithRotatingElipsisProps;
  TraitsListWithIcons: TraitsListWithIconsTypes;
  Benefits: BenefitsProps;
  Perks: PerksProps;
  CtaSection: CtaSectionProps;
  Stats: StatsProps;
  Recipients: RecipientsProps;
  Reviews: ReviewsProps;
  Idea: IdeaProps;
  Certificate: CertificateProps;
  Lessons: LessonsProps;
  Faq: FaqProps;
  Author: AuthorProps;
  LargeImage: ImgType;
  Charts: ChartsProps;
  HeadingGrid: HeadingGridProps;
};

const ComponentMap = ({ props }) => ({
  RevealImage: <RevealImage {...(props as RevealImageTypes)} />,
  Newsletter: <Newsletter {...(props as NewsletterTypes)} />,
  CompaniesShowcase: <CompaniesShowcase {...(props as CompaniesShowcaseProps)} />,
  HeroColumnWithImageReactor: <HeroColumnWithImageReactor {...(props as HeroColumnWithImageReactorTypes)} />,
  KeyDetails: <KeyDetails {...(props as KeyDetailsTypes)} />,
  HeroWithRotatingElipsis: <HeroWithRotatingElipsis {...(props as HeroWithRotatingElipsisProps)} />,
  TraitsListWithIcons: <TraitsListWithIcons {...(props as TraitsListWithIconsTypes)} />,
  Benefits: <Benefits {...(props as BenefitsProps)} />,
  Perks: <Perks {...(props as PerksProps)} />,
  CtaSection: <CtaSection {...(props as CtaSectionProps)} />,
  Stats: <Stats {...(props as StatsProps)} />,
  Recipients: <Recipients {...(props as RecipientsProps)} />,
  Reviews: <Reviews {...(props as ReviewsProps)} />,
  Idea: <Idea {...(props as IdeaProps)} />,
  Certificate: <Certificate {...(props as CertificateProps)} />,
  Lessons: <Lessons {...(props as LessonsProps)} />,
  Faq: <Faq {...(props as FaqProps)} />,
  Author: <Author {...(props as AuthorProps)} />,
  LargeImage: <LargeImage {...(props as ImgType)} />,
  Charts: <Charts {...(props as ChartsProps)} />,
  HeadingGrid: <HeadingGrid {...(props as HeadingGridProps)} />,
});

export type ComponentsType = ComponentMapType[keyof ComponentMapType] & { _type: string }[];

const Components = ({ data }: { data: ComponentsType }) => {
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
    ${RevealImage_Query}
    ${Newsletter_Query}
    ${TraitsListWithIcons_Query}
    ${CompaniesShowcase_Query}
    ${HeroColumnWithImageReactor_Query}
    ${KeyDetails_Query}
    ${HeroWithRotatingElipsis_Query}
    ${Benefits_Query}
    ${Perks_Query}
    ${CtaSection_Query}
    ${Stats_Query}
    ${Recipients_Query}
    ${Reviews_Query}
    ${Idea_Query}
    ${Certificate_Query}
    ${Lessons_Query}
    ${Faq_Query}
    ${Author_Query}
    ${LargeImage_Query}
    ${Charts_Query}
    ${HeadingGrid_Query}
  },
`;
