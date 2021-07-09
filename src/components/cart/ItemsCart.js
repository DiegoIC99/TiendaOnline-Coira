import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";


export default function ItemsCart(props) {
    return(
        <tr>
            <td><FontAwesomeIcon icon={faTimes} /></td>
            <td>{props.name}</td>
            <td>{props.qty}</td>
            <td>{props.price}</td>
        </tr>
    )
}