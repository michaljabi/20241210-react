import {AuctionItem} from "./AuctionItem.ts";

interface Props {
    auction: AuctionItem;
}

export function AuctionCard({ auction }: Props) {
    return <div className="card">
        <div className="card-header">{auction.title}</div>
        <img className="card-img" src={auction.imgUrl} alt={auction.title} />
        <div className="card-body">
            <p className="card-text">{auction.description}</p>
            <div className="d-flex justify-content-between align-content-center">
                <strong> {auction.price} zł</strong>
                <button className="btn btn-outline-primary">
                    🛒
                </button>
            </div>
        </div>
    </div>;
}