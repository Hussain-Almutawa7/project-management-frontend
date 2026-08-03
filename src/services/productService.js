const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const index = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
}

const showProduct = async id => {
    const res = await fetch(`${BASE_URL}/${id}`);
    const data = await res.json();
    return data;
}

const createProduct = async newProduct => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    return data;
}

const updateProduct = async (id, updatedProduct) => {
    const res = await fetch(BASE_URL, {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct),
    });

    const data = await res.json()
    return data;
}

const deleteProduct = async id => {
    const res = await fetch(BASE_URL, {
        method: "DELETE"
    });

    const data = await res.json();
    return data;
}

export {
    index,
    showProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}
