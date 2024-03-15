import { useState } from "react";
import { useEffect } from "react";
import Product from "../product/Product";
import Table from "../../table/Table";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/utils";


const Container = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('watched.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        if (products.length) {
            const storedCart = getStoredCart();
            let savedCart = [];
            for (const id of storedCart) {
                const isExists = products.find(product => product.id === id);
                savedCart.push(isExists);
            }
            setcart(savedCart)
        }
    },[products])

    const [cart, setcart] = useState([]);

    const addToBookMarked = (product) => {

        if (cart.includes(product)) {
            alert('You already select this')
        } else {
            const newCart = [...cart, product];
            setcart(newCart);
            addToLS(product.id)
        }

    }

    let total = 0;
    for (const singleCart of cart) {
        total = total + singleCart.price;
    }
    // console.log(total);

    const addDeleteButton = (product) => {
        console.log(product);
        const matched = cart.filter(pd => pd.id !== product.id)
        setcart(matched);
        removeFromLS(product.id)
    }


    return (
        <div className="flex container mx-auto my-14 gap-5">

            <div className="lg:w-2/3 grid lg:grid-cols-2 gap-10">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToBookMarked={addToBookMarked}
                    ></Product>)
                }
            </div>
            <div className="lg:w-1/3">
                <div className="text-center p-4 rounded-xl shadow">
                    <p className="font-bold">You Have To Pay: <span className="text-green-700 underline">{total}</span> $</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Warranty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((c, idx) => <Table
                                    key={idx}
                                    cart={c}
                                    id={idx}
                                    addDeleteButton={addDeleteButton}
                                ></Table>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Container;