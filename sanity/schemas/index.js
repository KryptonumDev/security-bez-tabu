// Single Types
import global, {global_Seo} from './global'
import NotFoundPage from './singleTypes/404_Page'
import PrivacyPolicyPage from './PrivacyPolicy_Page'

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
import {PrivacyPolicyPage_Content} from './PrivacyPolicy_Page'
import CtaSection from './components/CtaSection'
import review from './components/review'
import stats from './components/stats'
import chapter from './components/chapter'
import {chart_Bars, chart_Circle, chart_Item, chart_Linear} from './components/chart'
import Perks from './components/Perks'
import Benefits from './components/Benefits'
import StatsList from './components/StatsList'
import Recipients from './components/Recipients'
import Reviews from './components/Reviews'
import Idea from './components/Idea'
import Certificate from './components/Certificate'
import Lessons from './components/Lessons'
import Faq from './components/Faq'
import Author from './components/Author'
import Charts from './components/Charts'
import Content from '../components/Content'
import HeroColumnWithImageReactor from './components/HeroColumnWithImageReactor'
import HeroWithRotatingElipsis from './components/HeroWithRotatingElipsis'
import ListPillWithIconHeading from './components/ListPillWithIconHeading'
import RevealImage from './components/RevealImage'
import Newsletter from './components/Newsletter'
import CompaniesShowcase from './components/CompaniesShowcase'
import KeyDetails from './components/KeyDetails'

export const components = [
  global_Seo,
  cta,
  seo,
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
  PrivacyPolicyPage_Content,
  CtaSection,
  review,
  stats,
  chapter,
  chart_Bars,
  chart_Linear,
  chart_Circle,
  chart_Item,
  Perks,
  Benefits,
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
  ListPillWithIconHeading,
  RevealImage,
  Newsletter,
  CompaniesShowcase,
  KeyDetails,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...components,
  ...singleTypes,
  ...collectionTypes,
]
