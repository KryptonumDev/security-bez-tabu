// Single Types
import global, { global_Seo } from './global'
import WyzwanieSecurity_Global from './wyzwanie-security/global'
import WyzwanieSecurity_IndexPage from './wyzwanie-security/index'
import WyzwanieSecurity_PrivacyPolicyPage from './wyzwanie-security/privacy-policy'
import WyzwanieSecurity_NotFoundPage from './wyzwanie-security/404'
import PrivacyPolicyPage from './privacy-policy'

export const WyzwanieSecurity = [
  WyzwanieSecurity_Global,
  WyzwanieSecurity_IndexPage,
  WyzwanieSecurity_PrivacyPolicyPage,
  WyzwanieSecurity_NotFoundPage,
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndDescription, titleAndImage, imageAndLink, titleDescriptionAndImage } from './components/list'
import { PrivacyPolicyPage_Content } from './privacy-policy'
import CtaSection from './components/CtaSection'
import review from './components/review'
import stats from './components/stats'
import chapter from './components/chapter'
import { chart_Bars, chart_Circle, chart_Item, chart_Linear } from './components/chart'

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
]

export const schemaTypes = [
  global,
  // Restruzturize
  PrivacyPolicyPage,
  ...WyzwanieSecurity,
  ...components
]