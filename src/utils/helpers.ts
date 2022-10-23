import { ProductItem } from '../interfaces/interfaces';

export const getLocalCart = () => {
  if (localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart')!);
  }
  return [];
};

export function loadProducts(data: ProductItem[]) {
  if (localStorage.getItem('products')) {
    return JSON.parse(localStorage.getItem('products')!);
  }
  return data;
}

export function numbersOnly(value: number) {
  if (typeof value === 'number') {
    return value;
  }
}