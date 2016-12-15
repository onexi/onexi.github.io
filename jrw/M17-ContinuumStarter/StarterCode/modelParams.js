var sim = {
    canvas: null, 
    context:null,
    stiffness:2, 
    mass:1, 
    deltaT:0.1,
    gravity:-1, 
    trackerFlag:0, 
    particles:[], 
    springs:[], 
    fixedParticles:[],
    deleteThisSpring:[],
    alpha:0.1, 
    R1: 1,
    R2: 1,
    yieldForce:10, 
    pickedParticle:null,
    interactionDistance:50
};

window.onload=getCanvas;
function getCanvas(){
  sim.canvas = document.getElementById("myCanvas");
  sim.context =  sim.canvas.getContext ('2d');
  sim.R1 = (1+sim.alpha*sim.deltaT/2);
  sim.R2 = (1-sim.alpha*sim.deltaT/2);
}

