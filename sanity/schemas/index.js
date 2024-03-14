// Single Types
import global, { global_Seo } from './singleTypes/global'
import NotFoundPage from './singleTypes/NotFound_Page'
import PrivacyPolicyPage from './singleTypes/PrivacyPolicy_Page'

export const singleTypes = [
  PrivacyPolicyPage,
  NotFoundPage,
]

// Collection Types
import landingPage_Collection from './collectionTypes/landingPage_Collection'
import reviews_Collection from './collectionTypes/reviews_Collection'
import faq_Collection from './collectionTypes/faq_Collection'

export const collectionTypes = [
  landingPage_Collection,
  reviews_Collection,
  faq_Collection,
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import {
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
} from './components/list'
import { PrivacyPolicyPage_Content } from './singleTypes/PrivacyPolicy_Page'
import SimpleCtaSection from './components/SimpleCtaSection'
import stats from './components/stats'
import chapter from './components/chapter'
import { chart_Bars, chart_Circle, chart_Item, chart_Linear } from './components/chart'
import Perks from './components/Perks'
import Benefits from './components/Benefits'
import StatsList from './components/StatsList'
import Recipients from './components/Recipients'
import Reviews from './components/Reviews'
import Idea from './components/Idea'
import Lessons from './components/Lessons'
import Faq from './components/Faq'
import Author from './components/Author'
import Charts from './components/Charts'
import Content from '../components/Content'
import HeroColumnWithImageReactor from './components/HeroColumnWithImageReactor'
import HeroWithRotatingElipsis from './components/HeroWithRotatingElipsis'
import RevealImage from './components/RevealImage'
import Newsletter from './components/Newsletter'
import CompaniesShowcase, { CompaniesShowcase_List } from './components/CompaniesShowcase'
import KeyDetails, { KeyDetails_List } from './components/KeyDetails'
import CtaSectionWithImage from './components/CtaSectionWithImage'
import HeadingWithNumeratedList from './components/HeadingWithNumeratedList'
import AdvancedCtaSection from './components/AdvancedCtaSection'
import HeroImageBackground from './components/HeroImageBackground'
import TraitsListWithIcons, { TraitsListWithIcons_List } from './components/TraitsListWithIcons'
import SimpleDescriptiveGrid, { SimpleDescriptiveGrid_Grid } from './components/SimpleDescriptiveGrid'
import DetailedOrderedList, { DetailedOrderedList_List } from './components/DetailedOrderedList'
import PersonPresentation, { PersonPresentation_Achievements } from './components/PersonPresentation'
import ImageReactor from './components/ImageReactor'

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
  DetailedOrderedList_List,
  PersonPresentation_Achievements,
  PersonPresentation,
  ImageReactor,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...components,
  ...singleTypes,
  ...collectionTypes,
]
