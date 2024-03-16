// Single Types
import global, { global_Seo } from './singleTypes/global';
import NotFoundPage from './singleTypes/NotFound_Page';
import PrivacyPolicyPage from './singleTypes/PrivacyPolicy_Page';

export const singleTypes = [PrivacyPolicyPage, NotFoundPage];

// Collection Types
import landingPage_Collection from './collectionTypes/landingPage_Collection';
import reviews_Collection from './collectionTypes/reviews_Collection';
import faq_Collection from './collectionTypes/faq_Collection';

export const collectionTypes = [landingPage_Collection, reviews_Collection, faq_Collection];

// Componenets
import cta from './components/cta';
import seo from './components/seo';
import { PrivacyPolicyPage_Content } from './singleTypes/PrivacyPolicy_Page';
import SimpleCtaSection from './components/SimpleCtaSection';
import chapter from './components/chapter';
import { chart_Bars, chart_Circle, chart_Item, chart_Linear } from './components/chart';
import Perks, { Perks_List } from './components/Perks';
import StatsList, { StatsList_List } from './components/StatsList';
import Reviews from './components/Reviews';
import Idea, { Idea_List } from './components/Idea';
import Lessons from './components/Lessons';
import Faq from './components/Faq';
import Charts, { Charts_Bars, Charts_Circle, Charts_Item, Charts_Linear } from './components/Charts';
import Content from '../components/Content';
import HeroColumnWithImageReactor from './components/HeroColumnWithImageReactor';
import HeroWithRotatingElipsis, { HeroWithRotatingElipsis_Products } from './components/HeroWithRotatingElipsis';
import RevealImage from './components/RevealImage';
import Newsletter from './components/Newsletter';
import CompaniesShowcase, { CompaniesShowcase_List } from './components/CompaniesShowcase';
import KeyDetails, { KeyDetails_List } from './components/KeyDetails';
import AdvancedCtaSection from './components/AdvancedCtaSection';
import HeroImageBackground from './components/HeroImageBackground';
import TraitsListWithIcons, { TraitsListWithIcons_List } from './components/TraitsListWithIcons';
import SimpleDescriptiveGrid, { SimpleDescriptiveGrid_Grid } from './components/SimpleDescriptiveGrid';
import DetailedOrderedList, { DetailedOrderedList_List } from './components/DetailedOrderedList';
import PersonPresentation, { PersonPresentation_Achievements } from './components/PersonPresentation';
import ImageReactor from './components/ImageReactor';
import CourseDetails, { CourseDetails_List } from './components/CourseDetails';
import BadgeIconSection from './components/BadgeIconSection';
import TeamIntroduction, { TeamIntroduction_List } from './components/TeamIntroduction';
import ComparisonTable, { ComparisonTable_Column, ComparisonTable_Row } from './components/ComparisonTable';
import BenefitsItems, { BenefitsItems_List } from './components/BenefitsItems';
import CourseComparison, { CourseComparison_List, CourseComparison_Plans } from './components/CourseComparison';
import CompaniesDescriptiveShowcase, {
  CompaniesDescriptiveShowcase_List,
} from './components/CompaniesDescriptiveShowcase';
import PlansComparison, { PlansComparison_Plans } from './components/PlansComparison';
import VideoSection from './components/VideoSection';
import BenefitsBackgroundItems, { BenefitsBackgroundItems_List } from './components/BenefitsBackgroundItems';

export const components = [
  global_Seo,
  cta,
  seo,
  PrivacyPolicyPage_Content,
  SimpleCtaSection,
  chapter,
  chart_Bars,
  chart_Linear,
  chart_Circle,
  chart_Item,
  Perks,
  StatsList,
  Reviews,
  Idea,
  Lessons,
  Faq,
  Charts,
  Content,
  HeroColumnWithImageReactor,
  HeroWithRotatingElipsis,
  RevealImage,
  Newsletter,
  CompaniesShowcase,
  CompaniesShowcase_List,
  KeyDetails,
  AdvancedCtaSection,
  HeroImageBackground,
  KeyDetails_List,
  TraitsListWithIcons,
  TraitsListWithIcons_List,
  SimpleDescriptiveGrid,
  SimpleDescriptiveGrid_Grid,
  DetailedOrderedList,
  DetailedOrderedList_List,
  PersonPresentation_Achievements,
  PersonPresentation,
  ImageReactor,
  CourseDetails,
  CourseDetails_List,
  BadgeIconSection,
  TeamIntroduction,
  TeamIntroduction_List,
  ComparisonTable,
  ComparisonTable_Column,
  ComparisonTable_Row,
  BenefitsItems,
  BenefitsItems_List,
  CourseComparison,
  CourseComparison_Plans,
  CourseComparison_List,
  CompaniesDescriptiveShowcase,
  CompaniesDescriptiveShowcase_List,
  PlansComparison,
  PlansComparison_Plans,
  VideoSection,
  Perks_List,
  StatsList_List,
  Idea_List,
  Charts_Bars,
  Charts_Circle,
  Charts_Item,
  Charts_Linear,
  HeroWithRotatingElipsis_Products,
  BenefitsBackgroundItems,
  BenefitsBackgroundItems_List,
];

export const schemaTypes = [
  global,
  // Restruzturize
  ...components,
  ...singleTypes,
  ...collectionTypes,
];
