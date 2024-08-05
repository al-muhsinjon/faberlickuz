export interface ISubCategory {
  id: number;
  title_uz: string;
  title_ru: string;
  min_price: number;
  max_price: number;
  brands?: [string];
}

export interface ICategory {
  id: number;
  title_uz: string;
  title_ru: string;
  image: string;
  is_index: boolean;
  count: number;
  min_price: number;
  max_price: number;
  brands: [string];
  sub_categories?: ISubCategory[];
}

export type IBanner = {
  id: number;
  web_image_uz: string;
  web_image_ru: string;
  rsp_image_uz: string;
  rsp_image_ru: string;
  is_advertisement: true;
  category: number;
  sub_category: number;
  brand: number;
  product: number;
  stock: number;
};

export interface IBrands {
  id: number;
  title_uz: string;
  title_ru: string;
  min_price: number;
  max_price: number;
  sub_categories: [string];
  categories: [string];
}

export interface IAdBanner {
  id: number;
  web_image_uz: string;
  web_image_ru: string;
  rsp_image_uz: string;
  rsp_image_ru: string;
  is_advertisement: true;
  category: {
    id: number;
    title_uz: string;
    title_ru: string;
  };
  sub_category: ISubCategory;
  brand: IBrands;
  product: {
    id: number;
    title: string;
  };
  stock: {
    id: number;
    stock_type: string;
  };
}

export interface IMainPageCategory {
  id: number;
  title_uz: string;
  title_ru: string;
  is_index: boolean;
  image: string;
}

interface IImage {
  id: number;
  image: string;
}

interface IStoc {
  id: number;
  title_uz: string;
  title_ru: string;
}

interface IProduct {
  id: number;
  title_uz: string;
  title_ru: string;
  price: number;
  sales: number;
  brand: string;
  stock: IStoc;
  images: IImage[];
  short_descriptions: IShortDescription[];
  slug: string;
}

export interface ICategoryProduct {
  count: number;
  next: string;
  previous: string;
  results: IProduct[];
}

export interface IShortDescription {
  id: number;
  key_uz: string;
  key_ru: string;
  value_uz: string;
  value_ru: string;
}
