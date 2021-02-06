import {request} from './request.js'

export function homeMultidata(){
	return request({
		url: 'home/multidata'
	})
}

export function goodsMulidata(type,page){
	return request({
		url: 'home/goods',
		params: {
			type,
			page
		}
	})
}