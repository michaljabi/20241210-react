import axios from 'axios'
import {AuctionItem} from "./AuctionItem.ts";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
})

const BASE_ENDPOINT = '/auctions'

// Mój stateless REST service do zapytań AJAX
export const auctionService = {
    async getAll() {
        return axiosInstance.get<AuctionItem[]>(BASE_ENDPOINT/*, { params: { size: 100, page: 1 } }*/);
    },
    // mapped Types in TS
    async getOne(id: AuctionItem['id']) {
       // console.log(id);
        return axiosInstance.get<AuctionItem>(BASE_ENDPOINT+'/'+id);
    },
    // utility Types in TS
    async addOne(auction: Omit<AuctionItem, 'id'>) {
        //console.log(auction);
        return axiosInstance.post<AuctionItem>(BASE_ENDPOINT, auction);
    }
}