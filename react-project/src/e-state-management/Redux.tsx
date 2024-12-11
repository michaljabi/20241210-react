import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./store/counterSlice.ts";
import {RootState} from "./store/store.ts";
import {OrderList} from "./OrderList.tsx";

export function Redux() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <>
            <h2>Redux</h2>
            <h3 className="subtitle is-4 bold subtitle is-family-monospace">
                Redux.tsx
            </h3>

            <div className="is-flex is-align-items-center">
                <button className="button" onClick={() =>  dispatch(decrement())}>-</button>
                <span className="px-5">{count}</span>
                <button className="button" onClick={() => dispatch(increment())}>+</button>
            </div>
            <hr />
            <OrderList />
        </>
    );
}
