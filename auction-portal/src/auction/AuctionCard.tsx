import {AuctionItem} from "./AuctionItem.ts";
import {useDispatch} from "react-redux";
import {addItem} from "./cart/cartSlice.ts";

interface Props {
    auction: AuctionItem;
}

export function AuctionCard({ auction }: Props) {

    const dispatch = useDispatch();

    return <div className="card">
        <div className="card-header">{auction.title}</div>
        <img className="card-img" src={auction.imgUrl} alt={auction.title} />
        <div className="card-body">
            <p className="card-text">{auction.description}</p>
            <div className="d-flex justify-content-between align-content-center">
                <strong> {auction.price} zł</strong>
                <button className="btn btn-outline-primary" onClick={() => dispatch(addItem(auction))}>
                    🛒
                </button>
            </div>
        </div>
    </div>;
}