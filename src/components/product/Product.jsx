import { PropTypes } from "prop-types";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";



const Product = ({ product }) => {
    const { image_url, description, model, warranty, storage, brand, processor, ram, water_resistant, gps, heart_rate_monitor, os, charging, features,
    } = product;
    console.log(product);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="w-44" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <p>Watch: {model}</p>
                <p>Brand: {brand}</p>
                <p>{description}</p>
                <div className="flex ">
                    <p>Warranty: {warranty ? warranty : 'Not available'}</p>
                    <p>Storage: {storage ? storage : 'Not available'}</p>
                    <p>Ram: {ram ? ram : 'Not available'}</p>
                </div>
                <div className="flex gap-2">
                    <p>Processor: {processor?processor:'Not available'}</p>
                    <p>Charging : {charging? charging :'Not available'}</p>
                    <p>OS: {os?os:'Not available'}</p>
                </div>
                <div className="md:flex hidden gap-2 ">
                    <span className="font-bold">Feature: </span>
                    {
                        features.map((feature, index) => <span
                            key={index}
                        >{feature}</span>)
                    }
                </div>
                <div className="flex items-center gap-2">
                    <p className="flex items-center gap-1">Water Proof: {water_resistant ? <IoMdCheckmark className="text-green-700" /> : <FaXmark className="text-red-600" />}</p>
                    <p className="flex items-center gap-1">Heart Monitor: {heart_rate_monitor ? <IoMdCheckmark className="text-green-700" /> : <FaXmark className="text-red-600" />}</p>
                    <p className="flex items-center gap-1">GPS: {gps ? <IoMdCheckmark className="text-green-700" /> : <FaXmark className="text-red-600" />}</p>
                    <p></p>
                    <p></p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object,
};

export default Product;