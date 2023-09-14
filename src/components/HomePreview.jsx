import { Carousel } from '@trendyol-js/react-carousel';
import ProductPreview from './ProductPreview';
import 'react-multi-carousel/lib/styles.css';

export default function HomePreview() {
    return (
        <div>
            <h1>test</h1>
            <Carousel show={3.5} slide={3} swiping={true}>
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
            </Carousel>
        </div>
    )
}