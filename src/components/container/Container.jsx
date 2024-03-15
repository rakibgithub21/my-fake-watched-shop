import { useState } from "react";
import { useEffect } from "react";
import Product from "../product/Product";


const Container = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('watched.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="flex container mx-auto my-14">
            <div className="md:w-2/3 grid md:grid-cols-2 gap-10">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="md:w-1/3">

            </div>
        </div>
    );
};

export default Container;