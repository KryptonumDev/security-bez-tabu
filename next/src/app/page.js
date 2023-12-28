import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";
import Hero from "@/components/sections/index-hero";

const IndexPage = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Claim,
    hero_Cta,
    hero_AdditionalInfo,
    hero_Img,
    hero_Products,
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