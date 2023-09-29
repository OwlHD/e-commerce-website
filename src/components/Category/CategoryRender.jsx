import { Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

export default function CategoryRender({
  id, queryProducts, filters, productsAll, productsCategory,
}) {
  const cart = [{ products: [] }];
  if (!JSON.parse(localStorage.getItem('cart'))) {

  } else {
    const userCart = JSON.parse(localStorage.getItem('cart'));
    userCart[0].products.forEach((item) => {
      cart[0].products.push(item);
    });
  }
  if (filters.filterByPrice === 'false') {
    return (
      <Row>
        {(
                    queryProducts.query === ''
                      ? id === 'all'
                        ? filters.rating === '0'
                          ? productsAll.map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                          : productsAll
                            .filter((item) => item.rating.rate >= parseInt(filters.rating))
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                        : filters.rating === '0'
                          ? productsCategory.map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                          : productsCategory
                            .filter((item) => item.rating.rate >= parseInt(filters.rating))
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                      : !queryProducts.list.length
                        ? 'No results found.'
                        : filters.rating === '0'
                          ? queryProducts.list.map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                          : queryProducts.list
                            .filter((item) => item.rating.rate >= parseInt(filters.rating))
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                )}
      </Row>
    );
  }
  return (
    <Row>
      {(
                    queryProducts.query === ''
                      ? id === 'all'
                        ? filters.rating === '0'
                          ? productsAll
                            .filter((item) => item.price <= filters.price)
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                          : productsAll
                            .filter((item) => item.rating.rate >= parseInt(filters.rating) && item.price <= filters.price)
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                        : filters.rating === '0'
                          ? productsCategory
                            .filter((item) => item.price <= filters.price)
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                          : productsCategory
                            .filter((item) => item.rating.rate >= parseInt(filters.rating) && item.price <= filters.price)
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                      : !queryProducts.list.length
                        ? 'No results found.'
                        : filters.rating === '0'
                          ? queryProducts.list
                            .filter(item.price <= filters.price)
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                          : queryProducts.list
                            .filter((item) => item.rating.rate >= parseInt(filters.rating) && item.price <= filters.price)
                            .map((item) => <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} cart={cart} /></div>)
                )}
    </Row>
  );
}
