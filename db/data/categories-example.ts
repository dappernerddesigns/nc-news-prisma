export interface CategoryData {
  slug: string;
  categoryName: string;
}

export const categories: CategoryData[] = [
  { slug: 'eyes', categoryName: 'Eyes' },
  { slug: 'nose', categoryName: 'Nose' },
  { slug: 'mouth', categoryName: 'Mouth' },
  { slug: 'ears', categoryName: 'Ears' },
  { slug: 'hair', categoryName: 'Hair' },
  { slug: 'facial_hair', categoryName: 'Facial Hair' },
  { slug: 'accessories', categoryName: 'Accessories' },
];
