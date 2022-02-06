// Create a class for the element
class Submodule extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title        = this.getAttribute('title');
    const lecture      = this.getAttribute('lecture');
    const lectureUrl   = this.getAttribute('lectureUrl');
    const link         = this.getAttribute('link');    
    const linkUrl      = this.getAttribute('linkUrl');    
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
    const zip          = this.getAttribute('zip');
    const zipUrl       = this.getAttribute('zipUrl');

    let lectureStr = '';
    if(lecture){
      lectureStr = `<a href="${lectureUrl}"> <i class="fa fa-slideshare"></i> ${lecture}</a><br />`;
    }
    let referenceStr = '';
    if(reference){
      referenceStr = `<a href="${referenceUrl}"><i class="fa fa-file"></i> ${reference}</a><br />`;
    }
    let videoStr = '';
    if(video){
      videoStr = `<a href="${videoUrl}"><i class="fa fa-video-camera"></i> ${video}</a><br />`;
    }
    let camtasiaStr = '';
    if(camtasia){
      camtasiaStr = `<a href="${camtasiaUrl}"><i class="fa fa-chevron-circle-left"></i> ${camtasia}</a><br />`;
    }
    let exerciseStr = '';
    if(exercise){
      exerciseStr = `<a href="${exerciseUrl}"> <i class="fa fa-file-code-o"></i> ${exercise}</a><br />`;
    }
    let testStr = '';
    if(test){
      testStr = `<a href="${testUrl}"> <i class="fas fa-vial"></i> ${test}</a><br/>`;
    }
    let zipStr = '';
    if(zip){
      zipStr = `<a href="${zipUrl}"> <i class="fa fa-file-archive-o"></i> ${zip}</a><br />`;
    }
    let linkStr = '';
    if(link){
      linkStr = `<a href="${linkUrl}"> <i class="fa fa-link"></i> ${link}</a><br />`;
    }

    
    this.innerHTML = `
        <h5>${title}</h5>
        <p>
          ${lectureStr}
          ${videoStr}
          ${camtasiaStr}
          ${exerciseStr}
          ${zipStr}
          ${link}          
          ${referenceStr}
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
