import {useSelector} from "react-redux";
import {selectAllItemsCount} from "../auction/cart/cartSlice.ts";

// interface Props {
//     counter?: number;
// }

// counter = 0 to zapis, w którym mówię:
// jeśli nikt nie podał argumentu z counter (innymi słowy counter to undefinded) to ustaw go na 0
export function ItemsInCart() {

    const counter = useSelector(selectAllItemsCount);
    // if(counter === 0 || counter === undefined || Number.isNaN(counter)) {
    /* if(!counter) {
        return <div className="alert alert-primary" role="alert">
            Nie masz elementów w koszyku, postaraj się coś wybrać
        </div>;
    } */

    return (<div className="alert alert-primary" role="alert">
        {
            !counter ?
                <>Nie masz elementów w <strong>koszyku</strong>, postaraj się coś wybrać</>
                :
                `Masz już ${counter} elementów w koszyku`
        }
    </div>)

    /*return (
        <div className="alert alert-primary" role="alert">
            Masz już {counter} elementów w koszyku
        </div>
    );*/
}
