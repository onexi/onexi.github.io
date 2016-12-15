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
    createSlidesMenu:   function(prevLect, prevColor, allLec, nextLect, nextColor){
	var html = '';
	
	html += '<div id="user-toolbar" class="settings-button"><i class="icon-cog" style="color: #aaa; font-size:  1.5em;"></i></div>';
        html += '<div id="user-toolbar-options" style="display:none">';
	
        html += '<a href="' + prevLect + '" style="color:' + prevColor + '"><i class="icon-arrow-left fa-lg"></i><br>Previous lecture</a>';
        html += '<a href="' + allLec + '"><i class="icon-home fa-lg"></i><br>All lectures</a>';
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
	document.getElementById("user-toolbar").style.margin="1% 95%";	    
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