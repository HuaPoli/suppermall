export function debounce(func,delay){
	let timer = null
	return function(...args){
		if(timer) clearTimeout(timer)
		timer = setTimeout(func,()=>{
			func.apply(this,args)
		},delay)
	}
}
