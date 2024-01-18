import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";
import Hero from "@/components/sections/index-hero";
import CtaSection from "@/components/sections/CtaSection";
import Benefits from "@/components/sections/Benefits";
import Perks from "@/components/sections/Perks";
import Faq from "@/components/sections/Faq";
import Reviews from "@/components/sections/Reviews";
import Stats from "@/components/sections/Stats";
import Recipients from "@/components/sections/Recipients";
import Idea from "@/components/sections/Idea";
import Lessons from "@/components/sections/Lessons";
import Author from "@/components/sections/Author";
import LargeImage from "@/components/sections/LargeImage";
import Charts from "@/components/sections/Charts";
import Certificate from "@/components/sections/Certificate";

const IndexPage = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Claim,
    hero_Cta,
    hero_AdditionalInfo,
    hero_Img,
    hero_Products,
    benefits_Heading,
    benefits_List,
    perks_Heading,
    perks_List,
    stats_List,
    recipients_Heading,
    recipients_List,
    reviews_Heading,
    reviews_List,
    idea_Heading,
    idea_Paragraph,
    idea_Claim,
    idea_Cta,
    idea_AdditionalInfo,
    idea_ChartParagraph,
    idea_Chart,
    certificate_Heading,
    certificate_Paragraph,
    certificate_Img,
    lessons_Heading,
    lessons_Paragraph,
    lessons_List,
    faq_Heading,
    faq_Paragraph,
    faq_List,
    author_Heading,
    author_Img,
    author_Subheading,
    author_Achievements,
    author_Paragraph,
    largeImage,
    charts,
    ctaSection,
  } } = await query();

  return (
    <>
      <Breadcrumbs visible={false} />
      <Hero {...{
        heading: hero_Heading,
        paragraph: hero_Paragraph,
        claim: hero_Claim,
        cta: hero_Cta,
        additionalInfo: hero_AdditionalInfo,
        img: hero_Img,
        products: hero_Products,
      }} />
      <Benefits {...{
        heading: benefits_Heading,
        list: benefits_List,
      }} />
      <Perks {...{
        heading: perks_Heading,
        list: perks_List,
      }} />
      <CtaSection {...ctaSection} />
      <Stats {...{
        list: stats_List,
      }} />
      <Recipients {...{
        heading: recipients_Heading,
        list: recipients_List,
      }} />
      <Reviews {...{
        heading: reviews_Heading,
        list: reviews_List,
      }} />
      <Idea {...{
        heading: idea_Heading,
        paragraph: idea_Paragraph,
        claim: idea_Claim,
        cta: idea_Cta,
        additionalInfo: idea_AdditionalInfo,
        chartParagraph: idea_ChartParagraph,
        chart: idea_Chart,
      }} />
      <Certificate {...{
        heading: certificate_Heading,
        paragraph: certificate_Paragraph,
        img: certificate_Img,
      }} />
      <Lessons {...{
        heading: lessons_Heading,
        paragraph: lessons_Paragraph,
        list: lessons_List,
      }} />
      <Faq {...{
        heading: faq_Heading,
        paragraph: faq_Paragraph,
        list: faq_List,
      }} />
      <Author {...{
        heading: author_Heading,
        img: author_Img,
        subheading: author_Subheading,
        achievements: author_Achievements,
        paragraph: author_Paragraph,
      }} />
      <LargeImage img={largeImage} />
      <Charts {...{charts}} />
      <CtaSection {...ctaSection} />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await query();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/',
  })
}

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */`
    query {
      page: WyzwanieSecurityIndexPage(id: "WyzwanieSecurity_IndexPage") {
        # Hero
        hero_Heading
        hero_Paragraph
        hero_Claim
        hero_Cta {
          theme
          text
          href
        }
        hero_AdditionalInfo
        hero_Img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                width
                height
              }
            }
          }
        }
        hero_Products {
          title
          description
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }

        # Benefits
        benefits_Heading
        benefits_List {
          title
          description
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }

        # Perks
        perks_Heading
        perks_List {
          title
          description
        }

        # CtaSection
        ctaSection {
          heading
          cta {
            theme
            text
            href
          }
          additionalInfo
          isCountdown
        }

        # Stats
        stats_List {
          number
          name
        }

        # Recipients
        recipients_Heading
        recipients_List {
          title
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }

        # Reviews
        reviews_Heading
        reviews_List {
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  width
                  height
                }
              }
            }
          }
          name
          position
          content
        }

        # Idea
        idea_Heading
        idea_Paragraph
        idea_Claim
        idea_Cta {
          theme
          text
          href
        }
        idea_AdditionalInfo
        idea_ChartParagraph
        idea_Chart {
          title
          description
        }

        # Certificate
        certificate_Heading
        certificate_Paragraph
        certificate_Img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                width
                height
              }
            }
          }
        }

        # Lessons
        lessons_Heading
        lessons_Paragraph
        lessons_List {
          title
          lessons
        }

        # FAQ
        faq_Heading
        faq_Paragraph
        faq_List {
          question: title
          answer: description
        }

        # Author
        author_Heading
        author_Img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                width
                height
              }
            }
          }
        }
        author_Subheading
        author_Achievements {
          title
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }
        author_Paragraph

        # LargeImage
        largeImage {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                width
                height
              }
            }
          }
        }

        charts {
          ... on ChartBars {
            _type
            title
            charts {
              number
              title
            }
          }
          ... on ChartLinear {
            _type
            title
            item {
              number
              title
            }
            isAngle
          }
          ... on ChartCircle {
            _type
            title
            item {
              number
              title
            }
          }
        }
       
        # SEO
        seo {
          title
          description
        }
      }
    }
  `)
  return data;
}

export default IndexPage;