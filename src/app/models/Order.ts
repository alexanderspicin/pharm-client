import { OrderDetails } from "./OrderDetails"
export interface Order{
    id:number,
    createTime: Date,
    status: string,
    amountProducts: number,
    sum: number,
    orderDetails: Array<OrderDetails>
}