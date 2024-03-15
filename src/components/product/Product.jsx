import { PropTypes } from "prop-types";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";




const Product = ({ product }) => {
    const { image_url, description, model, warranty, storage, brand, price, processor, ram, water_resistant, gps, heart_rate_monitor, os, charging, features,
    } = product;
    console.log(product);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="w-44" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="text-3xl font-semibold">{model}</p>
                <p className="text-2xl font-medium">Brand: {brand}</p>
                <h3 className="text-xl font-medium">Price: <span className="text-amber-500"> {price} $</span></h3>
                <p className="text-[#949494] text-[17px]">{description}</p>
                <div className="flex ">
                    <p className="font-bold">Warranty: <span className="font-medium underline text-green-500">{warranty ? warranty : 'Not available'}</span></p>
                    <p className="font-bold ">Storage: <span className="font-medium text-green-500 underline">{storage ? storage : 'Not available'}</span></p>
                    <p className="font-bold ">Ram: <span className="font-medium text-green-500 underline">{ram ? ram : 'Not available'}</span></p>
                </div>
                <div className="flex gap-2">
                    <p className="font-semibold"><span className="underline">Processor:</span> <span className="font-normal">{processor ? processor : 'Not available'}</span></p>
                    <p className="font-semibold"><span className="underline">Charging :</span> <span className="font-normal">{charging ? charging : 'Not available'}</span></p>
                    <p className="font-semibold"><span className="underline">OS:</span> <span className="font-normal">{os ? os : 'Not available'}</span></p>
                </div>
                <div className="md:flex hidden gap-2 ">
                    <span className="font-bold">Feature: </span>
                    {
                        features.map((feature, index) => <span className="font-medium underline"
                            key={index}
                        >{feature}</span>)
                    }
                </div>
                <div className="flex items-center gap-2 font-medium ">
                    <p className="flex items-center gap-1 font-bold">Water Proof: {water_resistant ? <IoMdCheckmark className="text-green-700" /> : <FaXmark className="text-red-600" />}</p>
                    <p className="flex items-center gap-1 font-bold">Heart Monitor: {heart_rate_monitor ? <IoMdCheckmark className="text-green-700" /> : <FaXmark className="text-red-600" />}</p>
                    <p className="flex items-center gap-1 font-bold">GPS: {gps ? <IoMdCheckmark className="text-green-700" /> : <FaXmark className="text-red-600" />}</p>
                    
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent font-bold btn-outline ">Add To Cart <MdShoppingCartCheckout className="text-xl" /></button>

                </div>
            </div>

        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object,
};

export default Product;