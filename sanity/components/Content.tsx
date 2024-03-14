export default {
  name: 'content',
  type: 'array',
  title: 'Komponenty podstrony',
  description:
    'Sekcje z których składa się cała strona. Każda sekcja to jeden komponent. Pierwszym elemnetem zawsze powinna być sekcja HERO (oznaczone ⭐️ oraz odpowiednio podpisane).',
  of: [
    { type: 'HeroColumnWithImageReactor' },
    { type: 'HeroWithRotatingElipsis' },
    { type: 'SimpleDescriptiveGrid' },
    { type: 'HeadingWithNumeratedList' },
    { type: 'DetailedOrderedList' },
    { type: 'AdvancedCtaSection' },
    { type: 'HeroImageBackground' },
    { type: 'TraitsListWithIcons' },
    { type: 'CtaSectionWithImage' },
    { type: 'RevealImage' },
    { type: 'Newsletter' },
    { type: 'CompaniesShowcase' },
    { type: 'KeyDetails' },
    { type: 'Perks' },
    { type: 'Benefits' },
    { type: 'SimpleCtaSection' },
    { type: 'StatsList' },
    { type: 'Recipients' },
    { type: 'Reviews' },
    { type: 'Idea' },
    { type: 'Lessons' },
    { type: 'Faq' },
    { type: 'Author' },
    { type: 'image', name: 'LargeImage', title: 'Duże zdjęcie' },
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
  ],
};
