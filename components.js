// Create a class for the element
class Submodule extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // attribute content 
    let title  = this.getAttribute('title');
    let url    = this.getAttribute('url');    
    let icon   = this.getAttribute('icon');    

    if (!title) {
        title = 'No Title'
    }
    if (icon) {
        icon = `<i class="${icon}"></i>`
    }
    else{
        icon = '<i class="fa-solid fa-file"></i>';
    }
    if (!url) {
        title = 'No-URL';
    }


    this.innerHTML = `
          <a href="${url}" class="text-decoration-none"> ${icon} ${title}</a><br />
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
    let title = this.getAttribute('title');
    let background = this.getAttribute('background');

    if (!background) {
        background = 'text-bg-secondary'
    }

    this.innerHTML = `
        <div class="card">
          <h5 class="card-header ${background}">${title}</h5>

            <div class="card-body">
              ${this.innerHTML}
            </div>

        </div>
    `;    
  }
}

// Define the new element
customElements.define('mit-module', Module);
