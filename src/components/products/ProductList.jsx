import { useState, useEffect } from "react";
import { index } from "../../services/productService";
import { Link } from "react-router";

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const products = await index();
                setProducts(products);
            } catch (e) {
                console.log("Error: ", e.message)
            }
        }

        fetchAllProducts();
    }, []);

    return (
        <>
            <h1>All Products</h1>
            {products.map(product => (
                <div key={product._id}>
                    <Link to={`/products/${product._id}`}>
                        <h3>{product.title}</h3>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default ProductList;