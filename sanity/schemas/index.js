// Single Types
import global, { global_Seo } from './global'
import WyzwanieSecurity_Global from './wyzwanie-security/global'
import WyzwanieSecurity_IndexPage from './wyzwanie-security/index'
import WyzwanieSecurity_NotFound from './wyzwanie-security/404'

export const WyzwanieSecurity = [
  WyzwanieSecurity_Global,
  WyzwanieSecurity_IndexPage,
  WyzwanieSecurity_NotFound,
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndDescription, titleAndImage, imageAndLink, titleDescriptionAndImage } from './components/list'

export const components = [
  global_Seo,
  cta,
  seo,
  titleAndDescription,
  titleAndImage,
  imageAndLink,
  titleDescriptionAndImage,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...WyzwanieSecurity,
  ...components
]