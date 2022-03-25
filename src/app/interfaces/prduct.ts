export interface Product {
    id: string,
    name: string,
    description: string,
    thumbnail: string, 
    image: string,
    auctionLink: string
    price: number,
    purchasePrice: number
    addedOn: Date,
    instock: boolean,
    shippingCosts?: number,
    soldTo?: string,
    soldOn?:Date,
}
