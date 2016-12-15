var departments=[];
var json = [];  // new data
// 1) find all departments
// 2) create nodes and link to department
function initDataParse(){
	var name;
	var department;
	var salary;
	json.push(cNode('Chicago','Chicago')); // root node
	addDepartmentNodes();
	var n = data.length;
	var index;
	var obj;
	for(var i=0;i<n;i++){
		name = data[i][8];
		department = data[i][10];
		salary = data[i][11];
		if(parseInt(salary) > 8000){
			obj = findDepartment(department);
			if(obj!==null) obj.children.push(cNode(name,salary));
		}
	}
	//console.log(JSON.stringify(json));
	return json;
}
function findDepartment(name){
// loop over all children of root to find department that matches name
	for(var i=0;i<json[0].children.length;i++){
		if(json[0].children[i].name === name) return json[0].children[i];
	}
	return null;
}

function cNode(name, data){
	return { "children": [], 
		"name": name,   
		"data": data 
	};
}
function addDepartmentNodes(){
	var n = data.length;
	var department;
	var salary;
	var total=[];
	for(var i=0;i<n;i++){
		department = data[i][10];
		salary = parseInt(data[i][11]);
		if(salary> 80000){   // this cuts down on the checkNew department calls
			if(checkNew(department)){
				json[0].children.push(cNode(department,salary));
				departments.push(department);
			}
		}
	}
}
function checkNew(d){
	var n = departments.length;
	for(var i=0;i<n;i++){
		if(departments[i]===d)return false;
	}
	return true;
}

