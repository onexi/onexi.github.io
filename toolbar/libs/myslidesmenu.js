jQuery(document).ready(function($) {
	$('#user-toolbar').toolbar({ 	content: '#user-toolbar-options', 	position: 'bottom' });
	
});                       
var MySlidesMenu = {
    loadLinks : function(lectPage) {
var xmlhttp = new XMLHttpRequest();
 xmlhttp.open("GET", lectPage, false);
           xmlhttp.send();

var loadedPage =  xmlhttp.responseText;    
var mydiv = document.createElement('div');
mydiv.style.display = 'none'
mydiv.innerHTML = loadedPage;
var links = mydiv.querySelectorAll('.well a:first-child');
	   
return links;
	},
    getURLs : function() {
var links = this.loadLinks("../www/lectures.html"); 
var URLs = new Array();
	   
for (var i = 0; i < links.length; i++) {
		temp = links[i].href;
		
		links[i].href = "../";
		separator = links[i].href;
                
		URLs[i] = "'" + "/mit/website/" + (temp).split(separator)[1] + "'";
            }
return URLs;
    } ,
    getTitles : function() {
var links = this.loadLinks("../www/lectures.html");
var titles = new Array();
  
for (var i = 0; i < links.length; i++) {
		titles[i] = links[i].getElementsByTagName("h3")[0].innerHTML;
            }

	  return titles;
	
    },
    toggleAllLects: function() {
        var el = document.getElementById("alllects");
        var sl = "slider";
        var slCld = "slider closed";
        
            if ((el.getAttribute("class") === "slider closed") || (el.getAttribute("className") === "slider closed")) {
                parent.document.getElementById("toolbar").style.height = "600px";
                el.setAttribute("class", sl); 
                el.setAttribute("className", sl); // for IE
            }
            else  {
                el.setAttribute("class", slCld); 
                el.setAttribute("className", slCld); // for IE
                parent.document.getElementById("toolbar").style.height = "100px";
            }
            
        },
    createSlidesMenu:   function(lectURLs, lectTitles, allLec){
	var html = '';
	var actualLect = "'" + parent.location.pathname + "'";
	var prevColor, prevLect, nextColor, nextLect;
	prevColor = nextColor = "#9C9C9C";
	prevLect = nextLect = '#';
			
	for(var i=0;i<lectURLs.length;i++){
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
		
	html += '<div class="slider closed" id="alllects"><div class="carousel">' +
		
	'<a class="prev"><i class="icon-angle-up" style="font-size: 1.5em;  font-weight: bolder; cursor:pointer;"></i></a><div class="window"><ul style="color: white;" class="clr">';
	
	for (var i=0; i < lectTitles.length; i++) {
		var shorty = lectTitles[i];
		if (lectTitles[i].length > 35) {
			shorty = lectTitles[i].slice(0,35) + "...";
		}
		if (actualLect == lectURLs[i]) {
			html += '<li style="list-style-type: disc;"	><a onclick="javascript:parent.location.href=' + lectURLs[i] + '" title="' + lectTitles[i] + '" >' + shorty + '</a></li>';
		} else {
			html += '<li><a onclick="javascript:parent.location.href=' + lectURLs[i] + '" title="' + lectTitles[i] + '" >' + shorty + '</a></li>';		
		}

	}
	
	html += '</ul></div><a class="next"><i class="next icon-angle-down" style="font-size: 1.5em;  font-weight: bolder; cursor:pointer;"></i></a></div></div>';	
		        
        html += '<div id="user-toolbar" class="settings-button"><i class="icon-cog" style="color: #aaa; font-size:  1.5em;"></i></div>';
        html += '<div id="user-toolbar-options" style="display:none">';
        html += '<a onclick="javascript:parent.location.href=' + prevLect + '" style="cursor:pointer; color:' + prevColor + '"><i class="icon-arrow-left fa-lg"></i><br>Previous lecture</a>';
        html += '<a onclick="MySlidesMenu.toggleAllLects()" style="cursor:pointer;"><i class="icon-home fa-lg"></i><br>All lectures</a>';
        html += '<a onclick="javascript:parent.location.href=' + nextLect  + '" style="cursor:pointer; color:' + nextColor + '"><i class="icon-arrow-right fa-lg"></i><br>Next lecture</a>';

	html += '</div>';
        	
	return html;
    },
    insertHTML:   function(id, html){        
    	var el = document.getElementsByTagName(id)[0];
	el.innerHTML = html;

	document.getElementById("user-toolbar").style.margin="1% 85%";	   // always on left side because of the iframe pos  
    },
    runSlidesMenu:   function(allLec){
	
	var html = this.createSlidesMenu(this.getURLs(), this.getTitles(), allLec);
	this.insertHTML('body', html);
    }    
};
MySlidesMenu.runSlidesMenu("http://doval.scripts.mit.edu/www/lectures.html");
jQuery(document).ready(function($) {
 jQuery(".carousel").carousel({
        vertical: true,
	extraOffset: 0
    });	
});  