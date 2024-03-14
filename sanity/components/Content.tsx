export default {
  name: 'content',
  type: 'array',
  title: 'Komponenty podstrony',
  description:
    'Sekcje z których składa się cała strona. Każda sekcja to jeden komponent. Pierwszym elemnetem zawsze powinna być sekcja HERO (oznaczone ⭐️ oraz odpowiednio podpisane).',
  validation: Rule =>
    Rule.custom(Rule => {
      if (!Rule[0]._type.includes('Hero')) {
        return 'Pierwsza sekcja musi być sekcją HERO.';
      }
      return true;
    }),
  of: [
    { type: 'HeroColumnWithImageReactor' },
    { type: 'HeroWithRotatingElipsis' },
    { type: 'HeroImageBackground' },
    { type: 'SimpleDescriptiveGrid' },
    { type: 'DetailedOrderedList' },
    { type: 'AdvancedCtaSection' },
    { type: 'TraitsListWithIcons' },
    { type: 'RevealImage' },
    { type: 'Newsletter' },
    { type: 'CompaniesShowcase' },
    { type: 'KeyDetails' },
    { type: 'Perks' },
    { type: 'SimpleCtaSection' },
    { type: 'StatsList' },
    { type: 'BenefitsItems' },
    { type: 'Reviews' },
    { type: 'Idea' },
    { type: 'Faq' },
    { type: 'image', name: 'LargeImage', title: 'Duże zdjęcie', icon: () => '🖼️' },
    { type: 'Charts' },
    { type: 'PersonPresentation' },
    { type: 'ImageReactor' },
    { type: 'CourseDetails' },
    { type: 'BadgeIconSection' },
    { type: 'TeamIntroduction' },
    { type: 'ComparisonTable' },
    { type: 'CourseComparison' },
    { type: 'CompaniesDescriptiveShowcase' },
    { type: 'PlansComparison' },
    { type: 'VideoSection' },
    { type: 'BenefitsBackgroundItems' },
  ],
};
