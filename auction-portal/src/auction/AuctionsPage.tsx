import {AuctionItem} from "./AuctionItem.ts";

interface Props {
    auction: AuctionItem;
}

function AuctionCard({ auction }: Props) {
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

export function AuctionsPage() {

    const auctions: AuctionItem[] = [
        {
            id: "LqGA",
            title: "Mac Book",
            imgUrl: "https://picsum.photos/id/48/600/600",
            description: "Używany - ale sprawny",
            price: 4000
        },
        {
            id: "kV-c",
            title: "Smartfon",
            imgUrl: "https://picsum.photos/id/160/600/600",
            price: 800
        },
    ];

    return (
        <>
            <h2> Lista Aukcji </h2>
            <div className="row">
                {
                    auctions.map(a => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={a.id}>
                            <AuctionCard auction={a}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
