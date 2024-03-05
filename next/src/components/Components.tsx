import Author, { Author_Query, type AuthorProps } from './_global/Author';
import Benefits, { Benefits_Query, type BenefitsProps } from './_global/Benefits';
import Certificate, { Certificate_Query, type CertificateProps } from './_global/Certificate';
import CtaSection, { CtaSection_Query, type CtaSectionProps } from './_global/CtaSection';
import Faq, { Faq_Query, type FaqProps } from './_global/Faq';
import Idea, { Idea_Query, type IdeaProps } from './_global/Idea';
import KeyDetails, { type KeyDetailsProps, KeyDetails_Query } from './_global/KeyDetails';
import LargeImage, { LargeImage_Query } from './_global/LargeImage';
import Lessons, { Lessons_Query, type LessonsProps } from './_global/Lessons';
import Perks, { type PerksProps, Perks_Query } from './_global/Perks';
import Recipients, { Recipients_Query, type RecipientsProps } from './_global/Recipients';
import Reviews, { Reviews_Query, type ReviewsProps } from './_global/Reviews';
import Newsletter, { Newsletter_Query, type NewsletterProps } from './_global/Newsletter';
import Stats, { Stats_Query, type StatsProps } from './_global/Stats';
import HeroWithRotatingElipsis, {
  HeroWithRotatingElipsis_Query,
  type HeroWithRotatingElipsisProps,
} from './_global/HeroWithRotatingElipsis';
import HeroColumnWithImageReactor, {
  HeroColumnWithImageReactor_Query,
  type HeroColumnWithImageReactorProps,
} from './_global/HeroColumnWithImageReactor';
import Charts, { Charts_Query, type ChartsProps } from './_global/Charts';
import CompaniesShowcase, { CompaniesShowcase_Query, type CompaniesShowcaseProps } from './_global/CompaniesShowcase';
import { type ImgType } from '@/global/types';

type ComponentMap = {
  Benefits: BenefitsProps;
};

export type ComponentProps = ComponentMap[keyof ComponentMap] & { _type: string };

const Components = ({ data }: { data: ComponentProps[] }) => {
  return data?.map((item) => {
    const componentType = item._type as keyof ComponentMap;
    const componentMap: Record<string, React.ReactNode> = {
      Newsletter: <Newsletter {...(item as unknown as NewsletterProps)} />,
      CompaniesShowcase: <CompaniesShowcase {...(item as unknown as CompaniesShowcaseProps)} />,
      HeroColumnWithImageReactor: (
        <HeroColumnWithImageReactor {...(item as unknown as HeroColumnWithImageReactorProps)} />
      ),
      KeyDetails: <KeyDetails {...(item as KeyDetailsProps)} />,
      HeroWithRotatingElipsis: <HeroWithRotatingElipsis {...(item as unknown as HeroWithRotatingElipsisProps)} />,
      Benefits: <Benefits {...(item as BenefitsProps)} />,
      Perks: <Perks {...(item as PerksProps)} />,
      CtaSection: <CtaSection {...(item as unknown as CtaSectionProps)} />,
      StatsList: <Stats {...(item as unknown as StatsProps)} />,
      Recipients: <Recipients {...(item as RecipientsProps)} />,
      Reviews: <Reviews {...(item as unknown as ReviewsProps)} />,
      Idea: <Idea {...(item as unknown as IdeaProps)} />,
      Certificate: <Certificate {...(item as unknown as CertificateProps)} />,
      Lessons: <Lessons {...(item as unknown as LessonsProps)} />,
      Faq: <Faq {...(item as unknown as FaqProps)} />,
      Author: <Author {...(item as unknown as AuthorProps)} />,
      LargeImage: <LargeImage {...(item as unknown as ImgType)} />,
      Charts: <Charts {...(item as unknown as ChartsProps)} />,
    };
    const DynamicComponent = componentMap[componentType];
    if (!DynamicComponent) {
      return null;
    }
    return DynamicComponent;
  });
};

export default Components;

export const Components_Query = /* groq */ `
  content[] {
      _type,
      ${Newsletter_Query}
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
  },
`;
