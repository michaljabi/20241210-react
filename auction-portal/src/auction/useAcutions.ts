import {AuctionItem} from "./AuctionItem.ts";
import {useEffect, useState} from "react";
import {auctionService} from "./auction.service.ts";

export function useAuctions(id: AuctionItem['id'] = "") {
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
                if(id) {
                    const response = await auctionService.getOne(id)
                    setAuctions([response.data]);
                } else {
                    const response = await auctionService.getAll()
                    setAuctions(response.data);
                }

            } catch (err: unknown) {
                if (err instanceof Error) {
                    setErrorMessage(err.message)
                }
            } finally {
                setIsLoading(false);
            }
        })();

    }, [id])

    // Tak nie mogę, bo tutaj proszę "zaktualizuj isLoading przy następnym re-renderze na false"
    // setIsLoading(false);

    return { isLoading, errorMessage, auctions, setIsLoading }
}