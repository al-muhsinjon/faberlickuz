export interface ISubCategory {
  id: number;
  title_uz: string;
  title_ru: string;
  min_price: number;
  max_price: number;
  brands: IChildBrand;
}

interface IChildBrand {
  id: number;
  title_uz: string;
  title_ru: string;
  min_price: number;
  max_price: number;
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
  brands: IChildBrand[];
  sub_categories?: ISubCategory[];
}

export type IBanner = {
  id: number;
  web_image_uz: string;
  web_image_ru: string;
  rsp_image_uz: string;
  rsp_image_ru: string;
  is_advertisement: boolean;
  category: {
    id: number;
    sub_categories: ISubCategory;
    title_uz: string;
    title_ru: string;
  };
  sub_category: {
    id: number;
    title_uz: string;
    title_ru: string;
    category: IChildCategory;
  };
  brand: {
    id: number;
    title_uz: string;
    title_ru: string;
  };
  product: number;
  stock: number;
};

interface IChildCategory {
  id: number;
  title_uz: string;
  title_ru: string;
}

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
  category: IChildCategory;
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
  max_price: number;
  min_price: number;
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
  description_uz: string;
  description_ru: string;
  price: number;
  sales: number;
  brand: string;
  stock: IStoc;
  images: IImage[];
  short_descriptions: IShortDescription[];
  is_available: boolean;
  slug: string;
}

interface IService {
  id: number;
  title_uz: string;
  title_ru: string;
  sub_title_uz: string;
  sub_title_ru: string;
  image: string;
}

interface IProductC {
  id: number;
  title_uz: string;
  title_ru: string;
  price: number;
  sales: number;
  brand: string;
  stock: IStoc;
  image: IImage;
  short_descriptions: IShortDescription[];
  slug: string;
}

export interface ICategoryProduct {
  count: number;
  next: string;
  previous: string;
  results: IProduct[];
}

export interface ISearchCategoryProduct {
  count: number;
  next: string;
  previous: string;
  results: IProductC[];
}

export interface IShortDescription {
  id: number;
  key_uz: string;
  key_ru: string;
  value_uz: string;
  value_ru: string;
}

export interface ICartProduct {
  id: number;
  title_uz: string;
  title_ru: string;
  price: number;
  salePrice?: number; // optional, agar mavjud bo'lsa
  image: string;
  count: number;
  totalPrice: number;
  totalSales?: number; // optional, agar mavjud bo'lsa
}

export interface IBasket {
  basket: ICartProduct[];
  allPrice: number;
  allCount: number;
  orderType: string;
}

export interface IContact {
  id: number;
  address_uz: string;
  address_ru: string;
  phone_1: string;
  phone_2: string;
  email: string;
  map: string;
}

export interface ISocial {
  id: number;
  instagram: string;
  facebook: string;
  telegram: string;
}

export interface IService {
  id: number;
  title_uz: string;
  title_ru: string;
  sub_title_uz: string;
  sub_title_ru: string;
  image: string;
}
