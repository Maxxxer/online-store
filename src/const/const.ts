export const urlData = './data/data.json';
export const asideFilters = document.createElement('aside');
export const filterByCategoryContainer = document.createElement('div');
export const filterByBrandContainer = document.createElement('div');
export const filterByPriceContainer = document.createElement('div');
export const filterByStockContainer = document.createElement('div');
export const priceMin = document.createElement('span');
export const priceMax = document.createElement('span');
export const stockMin = document.createElement('span');
export const stockMax = document.createElement('span');
export const buttonResetFilters = document.createElement('button');
export const buttonCopyLink = document.createElement('button');
export const headerMain = document.createElement('header');
export const sortOprionsElement = document.createElement('select');
export const searchProductsElement = document.createElement('input');
export const foundElement = document.createElement('p');
export const buttonSizeView = document.createElement('button');
export const CATEGORIES = ['smartphones', 'smartwatch', 'tablets', 'headphones', 'laptops'];
export const BRAND = ['amazfit', 'apple', 'asus', 'honor', 'hp', 'huawei', 'jbl', 'samsung', 'xiaomi'];
export enum FILTER_ELEMENT {
  CATEGORY = 'category',
  BRAND = 'brand',
  PRICE = 'price',
  STOCK = 'stock',
  SEARCH = 'search',
  SORT = 'sort',
  SIZEVIEW = 'sizeview',
}
