//  modelParams.js
var sim = {
  canvas: null, 
  context:null,
  stiffness:2, 
  mass:1, 
  deltaT:0.1,
  gravity:0, 
  trackerFlag:0, 
  nodes:[], 
  links:[], 
  fixedParticles:[],
  deleteThisLink:[],
  alpha:0.4, 
  R1: 1,
  R2: 1,
  yieldForce:10000000, 
  nodeRadius:20,
  pickedNode:null,
  interactionDistance:50,
  WIDTH:0,
  HEIGHT:0,
  targetObject:null,
  rootNode:null,
  pickedObject:null, 
  nextID:0,
  callBack:null
};

window.onload=getCanvas;
function getCanvas(){
  sim.canvas = document.getElementById("myCanvas");
  sim.context =  sim.canvas.getContext ('2d');
  sim.R1 = (1+sim.alpha*sim.deltaT/2);
  sim.R2 = (1-sim.alpha*sim.deltaT/2);
  sim.WIDTH = sim.canvas.width;
  sim.HEIGHT = sim.canvas.height;
}

