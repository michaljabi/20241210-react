import {AuctionItem} from "./AuctionItem.ts";
import {AuctionCard} from "./AuctionCard.tsx";
import {useEffect, useState} from "react";
import {auctionService} from "./auction.service.ts";

export function AuctionsPage() {

    // let auctions: AuctionItem[] = [];
    const [isLoading, setIsLoading] = useState(false);

    // errorMessage na początku ma wartość "" i przechowywać będzie string;
    // setErrorMessage - to akcja aktualizacji stanu, która WYWOŁA za każdym razem tę funkcję AuctionsPage() ponownie!
    const [errorMessage, setErrorMessage] = useState("");

    const [auctions, setAuctions] = useState<AuctionItem[]>([])

    useEffect(() => {

        // IIFE Immediately Invoked Function Expression
        // https://developer.mozilla.org/en-US/docs/Glossary/IIFE
        (async () => {
            setIsLoading(true);
            setErrorMessage("");
            try {
                const response = await auctionService.getAll()
                setAuctions(response.data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setErrorMessage(err.message)
                }
            } finally {
                setIsLoading(false);
            }
        })();

    }, [])

    // Tak nie mogę, bo tutaj proszę "zaktualizuj isLoading przy następnym re-renderze na false"
    // setIsLoading(false);

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
