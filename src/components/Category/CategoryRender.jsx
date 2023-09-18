import { Row } from "react-bootstrap"
import CategoryCard from "./CategoryCard"

export default function CategoryRender({ id, queryProducts, filters, productsAll, productsCategory }) {
    if (filters.filterByPrice === 'false') {
        return (
            <Row>
                {(
                    queryProducts.query === '' 
                    ? id === 'all' 
                      ? filters.rating === '0'
                        ?
                          productsAll.map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                            }) 
                        :
                          productsAll
                          .filter(item => item.rating.rate >= parseInt(filters.rating))
                          .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                          })
                      : filters.rating === '0'
                        ?
                        productsCategory.map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                            }) 
                        :
                        productsCategory
                        .filter(item => item.rating.rate >= parseInt(filters.rating))
                        .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                        })
                    : !queryProducts.list.length
                      ? 'No results found.'
                      : filters.rating === '0'
                        ?
                            queryProducts.list.map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                            }) 
                        :
                            queryProducts.list
                            .filter(item => item.rating.rate >= parseInt(filters.rating))
                            .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                            })
                )}
            </Row>
        )
    } else {
        return (
            <Row>
                {(
                    queryProducts.query === '' 
                    ? id === 'all' 
                      ? filters.rating === '0'
                        ?
                          productsAll
                          .filter(item => item.price >= filters.price)
                          .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                          }) 
                        :
                          productsAll
                          .filter(item => item.rating.rate >= parseInt(filters.rating) && item.price >= filters.price)
                          .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                          })
                      : filters.rating === '0'
                        ?
                          productsCategory
                          .filter(item => item.price >= filters.price)
                          .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                          }) 
                        :
                          productsCategory
                          .filter(item => item.rating.rate >= parseInt(filters.rating) && item.price >= filters.price)
                          .map(item =>{
                              return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                          })
                    : !queryProducts.list.length
                      ? 'No results found.'
                      : filters.rating === '0'
                        ?
                            queryProducts.list
                            .filter(item.price >= filters.price)
                            .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                            }) 
                        :
                            queryProducts.list
                            .filter(item => item.rating.rate >= parseInt(filters.rating) && item.price >= filters.price)
                            .map(item =>{
                            return <div key={item.id} className="col-xs-12 col-sm-6 col-lg-4"><CategoryCard key={item.id} item={item} /></div>
                            })
                )}
            </Row>
        )
    }
}