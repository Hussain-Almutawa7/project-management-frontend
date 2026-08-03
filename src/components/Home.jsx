import { Link } from "react-router";

function Home() {
    return (
        <main>
            <h1>Welcome to Product Manager</h1>

            <p>
                Create, view, update, and delete products from your inventory.
            </p>

            <Link to="/products">
                <button>Browse Products</button>
            </Link>

            <section style={{marginTop: "30px"}}>
                <h2>What You Can Do</h2>

                <div>
                    <h3>View Products</h3>
                    <p>Browse all products currently stored in the inventory.</p>
                </div>

                <div>
                    <h3>Add Products</h3>
                    <p>Add products with a title, category, price, and quantity.</p>
                </div>

                <div>
                    <h3>Manage Products</h3>
                    <p>Update product information or delete products from the inventory.</p>
                </div>
            </section>
        </main>
    );
}

export default Home;