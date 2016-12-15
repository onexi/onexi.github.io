var departments=[];
var json = [];  
var rootPos = Vector(200,100);
// new data
// 1) find all departments
// 2) create nodes and link to department
function initDataParse(){
	var name;
	var department;
	var salary;
	// create the root node 

	var anode = Node(rootPos, 8);
	anode.id = 'Chicago';
	sim.nodes.push(anode);
	addDepartmentNodes(anode);
	var n = data.length;
	var index;
	var deptNode;
	for(var i=0;i<n;i++){
		name = data[i][8];
		department = data[i][10];
		salary = data[i][11];
		deptNode = findNodeName(department);  // only add people who earn more than 8000
		if(deptNode!==null && parseInt(salary) > 8000){
			processNode(deptNode,name,3);
		}
	}
}
function findNodeName(name){
	var n = sim.nodes.length;
	for(var i=0;i<n;i++){
		if(sim.nodes[i].id === name)return sim.nodes[i];
	}
	return null;
}


function addDepartmentNodes(root){
	var n = data.length;
	var department;
	var salary;
	var total=[];
	for(var i=0;i<n;i++){
		department = data[i][10];
		salary = parseInt(data[i][11]);
		if(checkNew(department)){
			processNode(root, department, 1);
			departments.push(department);
		}
	}
}
function processNode(parent,department,depth){
	var pos = Vector(100+Math.random()*300, 100 + (depth*50));
	var nod = Node(pos,8);
	nod.id = department;
  sim.nodes.push(nod);
  sim.links.push(Link(parent,nod));
  parent.children.push(nod);
}
function checkNew(d){
	var n = departments.length;
	for(var i=0;i<n;i++){
		if(departments[i]===d)return false;
	}
	return true;
}

