class Store {
	
	//////////////////////////////////////////////////////////////////
	//ADDs AN ARRAY OF OBJECT TO LOCAL STORAGE WITH AUTO INCREMENT IDs
	//ARGUMNETS - KEY - local store name
	//            VALUE - an object
	static addItem(key, value){
		
		if(localStorage.getItem(key)){
			
			//GET FROM LOCAL STORE
			const all = JSON.parse(localStorage.getItem(key));
			
			//GET THE HIGHEST ID
			const ids = all.map(item=>{
				return item.id;
			});
	
			//CREATE THE OBJECT WITH THE NEW ID
			const obj = {id: ids.length != 0 ? Math.max(...ids) +1 : 1, ...value};
	
			//ADD TO EXISTING ARRAY
			const result = [...all, obj];
			
			//ADD TO LOCAL STORAGE
			localStorage.setItem(key, JSON.stringify(result));
			
		} else {
			
			//CREATE AN OBJECT WITH INITIAL 0 ID
			const obj = {id: 1, ...value};
			
			//ADD TO AN ARRAY
			const result = [obj];
			
			//ADD TO LOCAL STORAGE
			localStorage.setItem(key, JSON.stringify(result));
		}
	}
	
	static updateItem(key, value, id){
		
			//GET FROM LOCAL STORE
			const all = JSON.parse(localStorage.getItem(key));
		
			//FILTERS ONLY THE ONES THAT DO NOT MATCH THE PROVIDED ID
			const filtered = all.filter((item, index, arr)=>{
			return item.id != id; 
			});
			
		    //ADD TO EXISTING ARRAY
			const result = [...filtered, value];
			
			//ADD TO LOCAL STORAGE
			localStorage.setItem(key, JSON.stringify(result));
		
	}
	
	////////////////////////////////////////////////////////////////////
	//REMOVES SPECIFIC OBJECT FROM ARRAY IN LOCAL STORAGE
	//ARGUMENTS - KEY - local store name
	//            ID - object id property which needs to be removed
	static removeItem(key, id){
		
		if(localStorage.getItem(key)){
				//GET FROM LOCAL STORE
		const all = JSON.parse(localStorage.getItem(key));
		
		//FILTERS ONLY THE ONES THAT DO NOT MATCH THE PROVIDED ID
		const result = all.filter((item, index, arr)=>{
			return item.id != id; 
		});
		
		//ADD TO LOCAL STORAGE THE CHANGED ARRAY
		localStorage.setItem(key, JSON.stringify(result));	
		} else {
			return [];
		}
	}
	
	//////////////////////////////////////////////////////////////////
	//GET ALL OBJECTS FROM ARRAY IN LOCAL STORAGE
	// ARGUMENTS - KEY - local store name
	static getAllItems(key){
		
		//GET FROM LOCAL STORE
		if(localStorage.getItem(key)){
			const all = JSON.parse(localStorage.getItem(key));
			const sorted = all.sort((a,b)=>{
			 	return a.id - b.id;
			});
			return all;	
		} else {
			return [];
		}
		
	}
	
	//////////////////////////////////////////////////////////////////
	//GET ONE OBJECT FROM ARRAY IN LOCAL STORAGE
	// ARGUMENTS - KEY - local store name
	//             ID - object id property which needs to be returned
	static getOneItem(key, id){
		
		if(localStorage.getItem(key)){
			
			//GET FROM LOCAL STORE
		const all = JSON.parse(localStorage.getItem(key));
		
		//FILTERS ONLY THE ONES THAT MATCHES THE PROVIDED ID
		const result = all.filter((item, index, arr)=>{
			return item.id == id; 
		});
		//console.log(Object.entries(result[0]));
		return result;	
			
		} else {
			return [];
		}
	}
	
}