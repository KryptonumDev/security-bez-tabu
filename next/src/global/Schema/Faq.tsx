import { renderToStaticMarkup } from 'react-dom/server';
import Markdown from '@/components/ui/markdown';

const SchemaFaq = ({ data }: { data: { question: string; answer: string }[] }) => {
  const schama = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.map(({ question, answer }) => {
      return {
        '@type': 'Question',
        name: renderToStaticMarkup(<Markdown>{question}</Markdown>),
        acceptedAnswer: {
          '@type': 'Answer',
          text: renderToStaticMarkup(<Markdown>{answer}</Markdown>),
        },
      };
    }),
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schama) }}
    />
  );
};

export default SchemaFaq;
