import {KeyboardEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNew, selectAllOrderItems} from "./store/ordersSlice.ts";

export function OrderList() {

    const dispatch = useDispatch();
    const [item, setItem] = useState("")

    const handleKeyUp = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === "Enter") {
            dispatch(addNew(item))
            setItem("")
        } else if(ev.target instanceof HTMLInputElement) {
            setItem(ev.target.value)
        }
    }

    const orderItems = useSelector(selectAllOrderItems)

    return <>
        <div className="panel is-info">
            <div className="panel-heading">Zamówienia</div>
            {
                orderItems.map((item) => (
                    <div className="panel-block" key={item}>
                        {item}
                    </div>
                ))
            }

            <div className="panel-block">
                <div className="control">
                    <input className="input"
                           type="text"
                           placeholder="Dodaj element do zamówienia"
                           onKeyUp={handleKeyUp}
                           value={item}
                           onChange={(ev) => setItem(ev.target.value)}
                    />
                </div>
            </div>
        </div>
    </>;
}