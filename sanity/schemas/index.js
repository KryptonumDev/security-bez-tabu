// Single Types
import global, {global_Seo} from './singleTypes/global'
import NotFoundPage from './singleTypes/NotFound_Page'
import PrivacyPolicyPage from './singleTypes/PrivacyPolicy_Page'

export const singleTypes = [PrivacyPolicyPage, NotFoundPage]

//Collection Types
import landingPage_Collection from './collectionTypes/landingPage_Collection'

export const collectionTypes = [landingPage_Collection]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import {
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
} from './components/list'
import {PrivacyPolicyPage_Content} from './singleTypes/PrivacyPolicy_Page'
import SimpleCtaSection from './components/SimpleCtaSection'
import review from './components/review'
import stats from './components/stats'
import chapter from './components/chapter'
import {chart_Bars, chart_Circle, chart_Item, chart_Linear} from './components/chart'
import Perks from './components/Perks'
import StatsList from './components/StatsList'
import Recipients from './components/Recipients'
import Reviews from './components/Reviews'
import Idea from './components/Idea'
import Certificate from './components/Certificate'
import Lessons from './components/Lessons'
import Faq, {Faq_List} from './components/Faq'
import Author from './components/Author'
import Charts from './components/Charts'
import Content from '../components/Content'
import HeroColumnWithImageReactor from './components/HeroColumnWithImageReactor'
import HeroWithRotatingElipsis from './components/HeroWithRotatingElipsis'
import RevealImage from './components/RevealImage'
import Newsletter from './components/Newsletter'
import CompaniesShowcase, {CompaniesShowcase_List} from './components/CompaniesShowcase'
import KeyDetails, {KeyDetails_List} from './components/KeyDetails'
import CtaSectionWithImage from './components/CtaSectionWithImage'
import HeadingWithNumeratedList from './components/HeadingWithNumeratedList'
import AdvancedCtaSection from './components/AdvancedCtaSection'
import HeroImageBackground from './components/HeroImageBackground'
import TraitsListWithIcons, {TraitsListWithIcons_List} from './components/TraitsListWithIcons'
import SimpleDescriptiveGrid, {SimpleDescriptiveGrid_Grid} from './components/SimpleDescriptiveGrid'
import DetailedOrderedList, {DetailedOrderedList_Chapter} from './components/DetailedOrderedList'
import PersonPresentation, {PersonPresentation_Achievements} from './components/PersonPresentation'
import ImageReactor from './components/ImageReactor'
import CourseDetails, {CourseDetails_List} from './components/CourseDetails'
import BadgeIconSection from './components/BadgeIconSection'
import BenefitsItems, {BenefitsItems_List} from './components/BenefitsItems'
import CourseComparison, {
  CourseComparison_List,
  CourseComparison_Plans,
} from './components/CourseComparison'
import CompaniesDescriptiveShowcase, {
  CompaniesDescriptiveShowcase_List,
} from './components/CompaniesDescriptiveShowcase'
import PlansComparison, {PlansComparison_Plans} from './components/PlansComparison'
import VideoSection from './components/VideoSection'

export const components = [
  global_Seo,
  cta,
  seo,
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
  PrivacyPolicyPage_Content,
  SimpleCtaSection,
  review,
  stats,
  chapter,
  chart_Bars,
  chart_Linear,
  chart_Circle,
  chart_Item,
  Perks,
  StatsList,
  Recipients,
  Reviews,
  Idea,
  Certificate,
  Lessons,
  Faq,
  Author,
  Charts,
  Content,
  HeroColumnWithImageReactor,
  HeroWithRotatingElipsis,
  RevealImage,
  Newsletter,
  CompaniesShowcase,
  CompaniesShowcase_List,
  KeyDetails,
  CtaSectionWithImage,
  HeadingWithNumeratedList,
  AdvancedCtaSection,
  HeroImageBackground,
  KeyDetails_List,
  TraitsListWithIcons,
  TraitsListWithIcons_List,
  SimpleDescriptiveGrid,
  SimpleDescriptiveGrid_Grid,
  DetailedOrderedList,
  DetailedOrderedList_Chapter,
  Faq_List,
  PersonPresentation_Achievements,
  PersonPresentation,
  ImageReactor,
  CourseDetails,
  CourseDetails_List,
  BadgeIconSection,
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
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...components,
  ...singleTypes,
  ...collectionTypes,
]
