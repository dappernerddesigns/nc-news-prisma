export interface FeatureData {
  featureName: string;
  categorySlug: string;
  priceInPence: number;
  imgUrl: string;
  description: string;
}

export const features: FeatureData[] = [
  {
    featureName: 'Laser Eyes',
    categorySlug: 'eyes',
    priceInPence: 19999,
    imgUrl:
      'https://t3.ftcdn.net/jpg/05/62/77/52/360_F_562775263_Gyt1V86r71U8OeIHYjlyPA5fS2h5hAng.webp',
    description: 'Give an actual death stare.',
  },
  {
    featureName: 'Joker Mouth',
    categorySlug: 'mouth',
    priceInPence: 2055,
    imgUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/300/995/desktop-wallpaper-great-joker-laughing-hand-tattoo-this-year-joker-mouth.jpg',
    description: 'Smile so hard your face hurts.',
  },
  {
    featureName: 'Elf Ears',
    categorySlug: 'ears',
    priceInPence: 3599,
    imgUrl:
      'https://www.partychest.co.uk/image/catalog/Buy-Fancy-Dress/Latex-Mythical-Elf-Ears.jpg?v=3',
    description: 'Fluency in Elvish included.',
  },
  {
    featureName: 'Mood Changing Hair',
    categorySlug: 'hair',
    priceInPence: 30005,
    imgUrl: 'https://i.ytimg.com/vi/9CEiCyXiWtQ/maxresdefault.jpg',
    description:
      'Show folks how you feel based on the colour of your hair. Model not included.',
  },
  {
    featureName: 'Craig David Goatee',
    categorySlug: 'facial_hair',
    priceInPence: 1536,
    imgUrl:
      'https://images.thebrag.com/tb/uploads/2018/06/craig-david-768x424.jpg',
    description: 'Craig David face not included.',
  },
  {
    featureName: 'Blue Eyebrows',
    categorySlug: 'facial_hair',
    priceInPence: 1299,
    imgUrl: 'https://ae01.alicdn.com/kf/Hd82f94bd568a4c199827bf6cfaef2528l.jpg',
    description: 'Look like a cool cyber goth!',
  },
  {
    featureName: 'Gold Nose Stud',
    categorySlug: 'accessories',
    priceInPence: 699,
    imgUrl:
      'https://www.fhinds.co.uk/Images/Product/Default/xlarge/G4590_L_1.jpg',
    description: 'A classic piece.',
  },
  {
    featureName: 'Cherry Lips',
    categorySlug: 'mouth',
    priceInPence: 455,
    imgUrl:
      'https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/20a66ad9832fef4ad18737cb360000c7/3/0/305929_kingsway_juicy_red_lips_3kg.png',
    description: 'Plump, juicy and sweet red lips. Sold per unit.',
  },
  {
    featureName: 'Anti Glare Sunglasses',
    categorySlug: 'accessories',
    priceInPence: 3545,
    imgUrl: 'https://m.media-amazon.com/images/I/612G+tYWgaL._AC_UY1100_.jpg',
    description: 'Banish bright headlights and dirty looks.',
  },
];
