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
    faq_Heading,
    faq_Paragraph,
    faq_List,
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
      <Faq {...{
        heading: faq_Heading,
        paragraph: faq_Paragraph,
        list: faq_List,
      }} />
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

        # FAQ
        faq_Heading
        faq_Paragraph
        faq_List {
          question: title
          answer: description
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