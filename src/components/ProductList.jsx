import { Link } from 'react-router-dom';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list-container">
            <div className='wow animate__animated animate__rubberBand'>
                <h2>Products List</h2>
            </div>
            <div className='wow animate__animated animate__backInUp'>
                <Link to="/cart" className="view-cart">Go to Cart</Link>
            </div>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
