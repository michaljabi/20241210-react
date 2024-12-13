
import {AuctionCard} from "./AuctionCard.tsx";
import {useAuctions} from "./useAcutions.ts";


export function AuctionsPage() {

    const { setIsLoading, isLoading, auctions, errorMessage } = useAuctions()

    return (
        <>
            <h2 onClick={() => setIsLoading(true)}> Lista Aukcji </h2>
            <div className="row">
                {
                    isLoading &&
                        <div className="col-12">
                            <div className="alert alert-info">Poczekaj... ładuję aukcje... &&</div>
                        </div>
                }
                {
                    isLoading ?
                        <div className="col-12">
                            <div className="alert alert-info">Poczekaj... ładuję aukcje...</div>
                        </div>
                        :
                        ""
                }
                {
                    errorMessage ?
                        <div className="col-12">
                            <div className="alert alert-danger">💥 Wystąpił błąd... "{errorMessage}" 😭</div>
                        </div>
                        :
                        ""
                }
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
