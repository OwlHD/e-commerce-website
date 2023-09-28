import { useState, useEffect } from 'react';
import ProductCarousel from './ProductCarousel';
import getProductsByCategory from '../../utils/functions';

export default function HomePreview() {
  const [productsElectronics, setProductsElectronics] = useState([]);
  const [productsJewelry, setProductsJewelry] = useState([]);
  const [productsMensClothing, setProductsMensClothing] = useState([]);
  const [productsWomensClothing, setProductsWomensClothing] = useState([]);

  useEffect(() => {
    async function getAllProductsByCategory() {
      setProductsElectronics(await getProductsByCategory('electronics'));
      setProductsJewelry(await getProductsByCategory('jewelery'));
      setProductsMensClothing(await getProductsByCategory('men\'s clothing'));
      setProductsWomensClothing(await getProductsByCategory('women\'s clothing'));
    }

    getAllProductsByCategory();
  }, []);

  return (
    <div>
      <h1>Electronics</h1>
      <ProductCarousel products={productsElectronics} nav="electronics" />
      <br />
      <h1>Jewelery</h1>
      <ProductCarousel products={productsJewelry} nav="jewelery" />
      <br />
      <h1>Men's Clothing</h1>
      <ProductCarousel products={productsMensClothing} nav={"men's clothing"} />
      <br />
      <h1>Women's Clothing</h1>
      <ProductCarousel products={productsWomensClothing} nav={"women's clothing"} />

    </div>
  );
}
