Object.prototype.MyClone=function(){
	var Constructor=this.constructor;
	var obj=new Constructor();
	for(var attr in this){
		if(this.hasOwnProperty(attr)){
			if(typeof this[attr] !== 'function'){
				if(typeof this[attr]!=='object'){
					obj[attr]=this[attr];
				}else{
					obj[attr]=this[attr].MyClone();
				}
			}
		}
	}
	return obj;
}
