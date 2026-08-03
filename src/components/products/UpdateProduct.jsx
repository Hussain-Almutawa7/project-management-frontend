import { useEffect, useState } from "react";
import { updateProduct, showProduct } from "../../services/productService";
import { useNavigate, useParams, Link } from "react-router";

function UpdateProduct() {
    const navigate = useNavigate();

    const initalState = {
        title: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
    }

    const { productId } = useParams();
    const [formData, setFormData] = useState(initalState);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productDetails = await showProduct(productId);
                setFormData(productDetails);
            } catch (e) {
                console.log("Error:", e.message);
            }
        }

        getProductDetails();
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await updateProduct(productId, formData);
        navigate(`/products/${productId}`);
    }

    return (
        <>
            <h1>Update a Product</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input name="title" type="text" onChange={handleChange} value={formData.title} />

                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={handleChange} value={formData.description}></textarea>

                <label htmlFor="category">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="price">Price</label>
                <input name="price" type="number" onChange={handleChange} value={formData.price} />

                <label htmlFor="quantity">Quantity</label>
                <input name="quantity" type="number" onChange={handleChange} value={formData.quantity} />

                <button type="submit" style={{ marginTop: "30px", padding: "10px 20px" }}>Update Product</button>
            </form>
        </>
    )
}

export default UpdateProduct;