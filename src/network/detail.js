import {request} from './request.js'

export function getDetail(gid){
	
   return request({
		url: 'detail/data',
		params: {
			gid
		}
	})
	
}
export class GoodsInfo {
	constructor(title,price,old_price,discount,sales_volume,collection,delivery,promise){
		this.title = title,
		this.price = price,
		this.old_price = old_price,
		this. discount = discount,
		this.sales_volume = sales_volume,
		this.collection = collection,
		this.delivery = delivery,
		this.promise = promise
	}
}
