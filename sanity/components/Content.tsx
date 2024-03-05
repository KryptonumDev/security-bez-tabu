export default {
  name: 'content',
  type: 'array',
  title: 'Komponenty podstrony',
  of: [
    {type: 'HeroColumnWithImageRefactor'},
    {type: 'HeroWithRotatingElipsis'},
    {type: 'Newsletter'},
    {type: 'Perks'},
    {type: 'Benefits'},
    {type: 'CtaSection'},
    {type: 'StatsList'},
    {type: 'Recipients'},
    {type: 'Reviews'},
    {type: 'Idea'},
    {type: 'Certificate'},
    {type: 'Lessons'},
    {type: 'Faq'},
    {type: 'Author'},
    {type: 'image', name: 'LargeImage', title: 'Duże zdjęcie'},
    {type: 'Charts'},
  ],
}
