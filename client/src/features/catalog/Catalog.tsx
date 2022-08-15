import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://localhost:7092/api/products')
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);


    if (loading) {
        return <h3>Loading...</h3>
    }

    if (products.length < 1) {
        return <h3>No products found</h3>
    }

    return (
        <Fragment>
            <ProductList products={products} />
        </Fragment>
    );
}