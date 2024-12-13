// TS ftw
// type Money = { value: number, currency: 'EUR' | 'PLN' | 'USD' };
type Money = number; // | string;

export interface AuctionItem {
    id: string;
    title: string;
    imgUrl: string;
    price: Money;
    description?: string;
}

/*
const item: AuctionItem =  {
    id: "LqGA",
    title: "Mac Book",
    imgUrl: "https://picsum.photos/id/48/600/600",
    description: "Używany - ale sprawny",
    price: 4000
}


/// ---- 500 plików dalej


const item2: AuctionItem =  {
    id: "LqGA",
    title: "Mac Book",
    imgUrl: "https://picsum.photos/id/48/600/600",
    description: "Używany - ale sprawny",
    price: 4000
}

 */