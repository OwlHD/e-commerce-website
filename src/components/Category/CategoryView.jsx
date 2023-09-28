import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import CategoryQueryBar from './CategoryQueryBar';
import CategoryRender from './CategoryRender';
import { getAllProducts } from '../../utils/functions';

export default function CategoryView({ id }) {
  const [productsAll, setProductsAll] = useState([]);
  const [productsAllFilter, setProductsAllFilter] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  const [queryProducts, setQueryProducts] = useState({
    query: '',
    list: [],
    sorting: 'id',
  });
  const [filters, setFilters] = useState({
    rating: '0',
    price: 500,
    filterByPrice: 'false',
  });
  const idUpper = id.toUpperCase();

  useEffect(() => {
    async function getProducts() {
      setProductsAll(await getAllProducts());
      setProductsAllFilter(await getAllProducts());
      setProductsCategory((await getAllProducts()).filter((item) => item.category === id));
    }
    getProducts();
    setQueryProducts({ query: '', list: [], sorting: queryProducts.sorting });
  }, [id]);

  return (
    <Row>
      <CategoryQueryBar
        id={id}
        queryProducts={queryProducts}
        setQueryProducts={setQueryProducts}
        productsAll={productsAll}
        productsCategory={productsCategory}
        filters={filters}
        setFilters={setFilters}
      />
      <h1>{idUpper}</h1>
      {

            }
      <CategoryRender
        id={id}
        queryProducts={queryProducts}
        filters={filters}
        productsAll={productsAll}
        productsCategory={productsCategory}
      />
    </Row>
  );
}
