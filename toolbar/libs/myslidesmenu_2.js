jQuery(document).ready(function($) {
	$('#user-toolbar').toolbar({ 	content: '#user-toolbar-options', 	position: 'bottom' });
});                       
var MySlidesMenu = {
    lectPage: "../../www/lectures.html",
    findURLs : function() {
	   var xmlhttp = new XMLHttpRequest();
	   xmlhttp.open("GET", this.lectPage, false);
           xmlhttp.send();

	   var loadedPage =  xmlhttp.responseText;    
	   var mydiv = document.createElement('div');
	   mydiv.style.display = 'none'
           mydiv.innerHTML = loadedPage;
	   
	   var links = mydiv.querySelectorAll('.well a');
	   var URLs = new Array();
	   
	   for (var i = 0; i < links.length; i++) {
		temp = links[i].href;
		
		links[i].href = "../";
		separator = links[i].href;
                
		URLs[i] = "/" + (temp).split(separator)[1];
            }
	    
	   return URLs;
    } ,
    toggleAllLects: function() {
        var el = document.getElementById("alllects");
        var sl = "slider";
        var slCld = "slider closed";
        
            if ((el.getAttribute("class") === "slider closed") || (el.getAttribute("className") === "slider closed")) {
                parent.document.getElementById("toolbar").style.height = "600px"
                el.setAttribute("class", sl); 
                el.setAttribute("className", sl); // for IE
            }
            else  {
                el.setAttribute("class", slCld); 
                el.setAttribute("className", slCld); // for IE
                setTimeout(function(){parent.document.getElementById("toolbar").style.height = "100px";}, "500") // wait .5s for the sliding in transition effect
            }
            
        },
    createSlidesMenu:   function(prevLect, prevColor, allLec, nextLect, nextColor){
	var html = '';
        
        html += '<div class="slider closed" id="alllects"><div class="inside_slider">' +
        '<ul style="color: white;">' +
        '<li><a style="cursor: pointer;">Lecture 1 - Introduction</a></li>'+'<li><a>Lecture 2 - Development Environment</a></li>' +'<li><a>Lecture 3 - Web Platform I</a></li>' +'<li><a>Lecture 3 - The DOM</a></li>' +'<li><a>Lecture 4 - Getting Elements from the DOM</a></li>' +'<li><a>Lecture 4 - PacMan Exercie</a></li>' +'<li><a>Lecture 5 - Javascrip Syntax Basics</a></li>' +'<li><a>Lecture 6 - Binary Numbers</a></li>' +'<li><a>Lectire 6 - Strings and Arrays</a></li>' +'<li><a>Lecture 7 - Simple Arays</a></li>' +'<li><a>Lecture 7 - Objects Part 1</a></li>' +'<li><a>Lecture 7 - Functions</a></li>'+'</ul></div>'+'</div>';
	
        
        html += '<div id="user-toolbar" class="settings-button"><i class="icon-cog" style="color: #aaa; font-size:  1.5em;"></i></div>';
        html += '<div id="user-toolbar-options" style="display:none">';
        html += '<a href="' + prevLect + '" style="color:' + prevColor + '"><i class="icon-arrow-left fa-lg"></i><br>Previous lecture</a>';
        html += '<a onclick="MySlidesMenu.toggleAllLects()" style="cursor:pointer;"><i class="icon-home fa-lg"></i><br>All lectures</a>';
        html += '<a href="' + nextLect  + '" style="color:' + nextColor + '"><i class="icon-arrow-right fa-lg"></i><br>Next lecture</a>';

	html += '</div>';
        	
	return html;
    },
    insertHTML:   function(id, html, pos){
        
        
        
    	var el = document.getElementsByTagName(id)[0];
	el.innerHTML = html;
	if (pos === "left") {
	document.getElementById("user-toolbar").style.margin="1% 2%";
	} else if (pos === "right") {
	document.getElementById("user-toolbar").style.margin="1% 85%";	    
	} else {
	document.getElementById("user-toolbar").style.margin="1% 50%";	  
	}
    },
    runSlidesMenu:   function(allLec, pos){
	var actualLect = window.location.pathname;
	var prevColor = nextColor = "#9C9C9C";
	var prevLect = nextLect = '#';
	var lectURLs = this.findURLs();
	
	for(i=0;i<lectURLs.length;i++){
		if (actualLect == lectURLs[i]) {
			break;
		}
	}
	
	if (lectURLs[i] != undefined) {
		if (lectURLs[(i-1)] != undefined) {
			prevLect = lectURLs[(i-1)]
			prevColor = "#555555";
		};
		if (lectURLs[(i+1)] != undefined) {
			nextLect = lectURLs[(i+1)]
			nextColor = "#555555";
		}  ;
	}

	var html = this.createSlidesMenu(prevLect, prevColor, allLec, nextLect, nextColor);
	this.insertHTML('body', html, pos);
    }    
};
MySlidesMenu.runSlidesMenu("http://doval.scripts.mit.edu/www/lectures.html", "right");