import { TiDeleteOutline } from "react-icons/ti";
import { PropTypes } from "prop-types";

const Table = ({ cart, id, addDeleteButton }) => {
    // console.log(cart);
    return (
        <tr>
            <th>{id + 1}</th>
            <td>{cart.model}</td>
            <td>{cart.price} $</td>
            <th>{cart.warranty}</th>
            <th className="flex items-center"><button onClick={() => addDeleteButton(cart)}><TiDeleteOutline className="text-2xl text-red-600" /></button></th>
        </tr>
    );
};
Table.propTypes = {
    cart: PropTypes.object,
    id: PropTypes.number,
    addDeleteButton: PropTypes.func,
    
};

export default Table;