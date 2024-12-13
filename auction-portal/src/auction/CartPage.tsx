import {selectAllItems} from "./cart/cartSlice.ts";
import {useSelector} from "react-redux";

export function CartPage() {

    const items = useSelector(selectAllItems)

    return (
        <>
            <h2>Koszyk</h2>
            {
                JSON.stringify(items)
            }
        </>
    );
}
