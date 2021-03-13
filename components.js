// Create a class for the element
class Submodule extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title        = this.getAttribute('title');
    const lecture      = this.getAttribute('lecture');
    const lectureUrl   = this.getAttribute('lectureUrl');
    const reference    = this.getAttribute('reference');
    const referenceIcn = this.getAttribute('referenceIcn');
    const referenceUrl = this.getAttribute('referenceUrl');
    const video        = this.getAttribute('video');
    const videoUrl     = this.getAttribute('videoUrl');
    const camtasia     = this.getAttribute('camtasia');    
    const camtasiaUrl  = this.getAttribute('camtasiaUrl');
    const exercise     = this.getAttribute('exercise');
    const exerciseUrl  = this.getAttribute('exerciseUrl');
    const test         = this.getAttribute('test');
    const testUrl      = this.getAttribute('testUrl');


    let lectureStr = '';
    if(lecture){
      lectureStr = `<a href="${lectureUrl}"> <i class="fa fa-database"></i> ${lecture}</a><br />`;
    }
    let referenceStr = '';
    if(reference){
      let icn = (referenceIcn) ? referenceIcn : 'fa-file-alt';
      referenceStr = `<a href="${referenceUrl}"><i class="fas ${icn}"></i> ${reference}</a><br />`;
    }
    let videoStr = '';
    if(video){
      videoStr = `<a href="${videoUrl}"><i class="fas fa-video"></i> ${video}</a><br />`;
    }
    let camtasiaStr = '';
    if(camtasia){
      camtasiaStr = `<a href="${camtasiaUrl}"><i class="fab fa-cuttlefish"></i> ${camtasia}</a><br />`;
    }
    let exerciseStr = '';
    if(exercise){
      exerciseStr = `<a href="${exerciseUrl}"> <i class="fas fa-tools"></i> ${exercise}</a><br />`;
    }
    let testStr = '';
    if(test){
      testStr = `<a href="${testUrl}"> <i class="fas fa-vial"></i> ${test}</a><br/>`;
    }

    this.innerHTML = `
        <h5>${title}</h5>
        <p>
          ${lectureStr}
          ${referenceStr}
          ${videoStr}
          ${camtasiaStr}
          ${exerciseStr}
          ${testStr}          
        </p>
    `;    

  }
}

// Define the new element
customElements.define('mit-submodule', Submodule);


// Create a class for the element
class Module extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title = this.getAttribute('title');

    this.innerHTML = `
        <div class="card" id="accordion">
          <h5 class="card-header">${title}</h5>
          <div  id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">          
            <div class="card-body">
              ${this.innerHTML}
            </div>
          </div>
        </div>
    `;    
  }
}

// Define the new element
customElements.define('mit-module', Module);
