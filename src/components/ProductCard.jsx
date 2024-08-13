import { Link } from 'react-router-dom';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card wow animate__animated animate__rubberBand">
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductCard;
