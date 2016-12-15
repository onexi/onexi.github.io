var departments=[];
var json = [];  
var rootPos = Vector(200,200);
var treeDepth = 1;
// new data
// 1) find all departments
// 2) create nodes and link to department
function initDataParse(){
	var name;
	var department;
	var salary;
	// create the root node 

	var anode = Node(rootPos, 10);
	anode.id = 'Chicago';
	sim.nodes.push(anode);
	treeDepth = 2;
	addDepartmentNodes(anode);
	treeDepth = 3;
	var n = data.length;
	var index;
	var deptNode;
	for(var i=0;i<n;i+=500){
		name = data[i][8];
		department = data[i][10];
		salary = data[i][11];
		deptNode = findNodeName(department);
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

function processNode(parentNode,departmentName,treeDepth){
	var pos = Vector(100+Math.random()*400-100, 100 + (treeDepth*50)+Math.random()*20);
	var nod = Node(pos,8);
	nod.id = departmentName;
	if(treeDepth === 2)nod.color = 'Blue';
  sim.nodes.push(nod);
  parentNode.children.push(nod);
  sim.links.push(Link(parentNode,nod));
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
			processNode(root, department, treeDepth);
			departments.push(department);
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

