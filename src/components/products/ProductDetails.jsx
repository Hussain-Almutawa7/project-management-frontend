import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { showProduct, deleteProduct } from "../../services/productService";

function ProductDetails() {

    const navigate = useNavigate();

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const product = await showProduct(productId);
                setProduct(product);
            } catch (e) {
                console.log("Error: ", e.message);
            }
        }

        fetchProductDetails();
    }, []);

    const handleDelete = async () => {
        await deleteProduct(productId);
        navigate("/products");
    }

    return (
        <>
            <h1>{product.title}</h1>
            <h4>{product.description}</h4>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Quantity Left: {product.quantity}</p>

            <div className="btn-align">
                <button onClick={handleDelete}>Delete {product.title}</button>
                <Link to={`/products/${product._id}/edit`}>
                    <button>Update {product.title}</button>
                </Link>
            </div>
        </>
    )
}

export default ProductDetails;