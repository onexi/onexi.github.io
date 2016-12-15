jQuery(document).ready(function($) {
	$('#user-toolbar').toolbar({ 	content: '#user-toolbar-options', 	position: 'bottom' });
});                       
var MySlidesMenu = {
	
    lectURLs: ['abel/01_introduction/slides.html',
	          'abel/02_development_environment/slides.html',
		     'abel/03_web_document_basics/slides.html',
		        'jrw/L3a-SimpleBrowserDOM/L03-SimpleBrowser.html',
			   'jrw/L3b-NamingElementsInDOM/L03-NamingElementsInDOM.html',
				'jrw/L4a-GettingElementsFromDOM/L4-GettingObjectsInDOM.html',
					'jrw/L4b-PacManExercise/L4-PacManExercise.html',
						'abel/05_syntax_basics/slides.html',
							'abel/06_binary/slides.html',
								'jrw/L6-Strings/L6-BasicStringOperations.html',
									'jrw/L7-SimpleArrays/Arrays.html',
										'jrw/L7-ObjectsPart1/ObjectsPart1.html',
											'abel/08_functions/slides.html'],
     
    createSlidesMenu:   function(prevLect, allLec, nextLect){
	var html = '';
	var host = 'http://doval.scripts.mit.edu/';
	
	html += '<div id="user-toolbar" class="settings-button"><i class="icon-cog" style="color: #aaa; font-size:  1.5em;"></i></div>';
        html += '<div id="user-toolbar-options" style="display:none">';
	
        html += '<a href="' + prevLect + '"><i class="icon-arrow-left fa-lg"></i><br>Previous lecture</a>';
        html += '<a href="' + allLec + '"><i class="icon-home fa-lg"></i><br>All lectures</a>';
        html += '<a href="' + nextLect  + '"><i class="icon-arrow-right fa-lg"></i><br>Next lecture</a>';

	html += '</div>';
        	
	return html;
    },
    insertHTML:   function(id, html, pos){
    	var el = document.getElementsByTagName(id)[0];
	el.innerHTML = html;
	if (pos == "left") {
	document.getElementById("user-toolbar").style.margin="1em 1em";
	} else if (pos == "right") {
	document.getElementById("user-toolbar").style.margin="1em 91em";	    
	} else {
	document.getElementById("user-toolbar").style.margin="1em 50%";	  
	}
    },
    runSlidesMenu:   function(allLec, pos){
	var actualURL = window.location.pathname;
	var i = 0;
	
	while (actualURL != lectURLS[i]) {
		i++;
	}
	
	prevLect = this.lectURLs[i--];
	nextLect = this.nextLect[i++];
	
	var html = this.createSlidesMenu(prevLect, allLec, nextLect);
	this.insertHTML('body', html, pos);
    }    
};
