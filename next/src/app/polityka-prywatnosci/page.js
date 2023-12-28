import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";
import Hero from "@/components/sections/privacy-policy-hero";
import Content from "@/components/sections/privacy-policy-content";

const PrivacyPolicyPage = async () => {
  const {
    page: {
      hero_Heading,
      hero_Paragraph
    },
    globalPrivacyPolicy: { content }
  } = await query();

  return (
    <>
      <Breadcrumbs data={[
        {
          name: 'Polityka prywatności',
          path: '/polityka-prywatnosci'
        }
      ]} visible={false} />
      <Hero {...{
        heading: hero_Heading,
        paragraph: hero_Paragraph,
      }} />
      <Content {...{ content }} />
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
      page: WyzwanieSecurityPrivacyPolicyPage(id: "WyzwanieSecurity_PrivacyPolicyPage") {
        # Hero
        hero_Heading
        hero_Paragraph

        # SEO
        seo {
          title
          description
        }
      }
      globalPrivacyPolicy: PrivacyPolicyPage(id: "PrivacyPolicyPage") {
        # Content
        content {
          title
          description
        }
      }
    }
  `)
  return data;
}

export default PrivacyPolicyPage;