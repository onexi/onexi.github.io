/*  ------------------- START commented out spring 2015 -------------------

    var monitor = {};
    monitor.initialized = false;
    monitor.lessonId = '';
    monitor.lessonHeader = '';    
    monitor.userId = '';
    monitor.server = "http://arlington3.mit.edu:8000/";


    //  listens for slide change events
    // ----------------------------------------
    Reveal.addEventListener( 'slidechanged', function( event ) {
        monitor.recordSlideChange(event.indexh,event.indexv);
    } );


    //  called by slideChange listener
    //  records the slide number and time
    // ----------------------------------------
    monitor.recordSlideChange = function (indexh,indexv){
        if (!monitor.initialized) monitor.init();
        var slideChange = '{' +
                              'indexh:\'' + indexh + '\', ' +
                              'indexv:\'' + indexv + '\', ' +
                              'timestamp:\'' + new Date().getTime() + '\'' +
                          '}';

        // if online, post to server, else post to local storage
        if (navigator.onLine) {
            console.log('post to server:');
            var lessonHeader = window.localStorage.getItem(monitor.lessonHeader);
            monitor.postData(slideChange, lessonHeader);
        } else {
            console.log('post to local storage');
            var slideChanges = window.localStorage.getItem(monitor.lessonId);
            slideChanges = slideChanges + ',' + slideChange;            
            window.localStorage.setItem(monitor.lessonId, slideChanges);
        }    
    };


    //  creates local storage for lesson
    //  sets userId, path, lessonId
    // ----------------------------------------
    monitor.init = function (){
        monitor.initialized = true;
        monitor.lessonId = monitor.hash(window.location.pathname);
        monitor.lessonHeader = monitor.lessonId + '_header';
        monitor.userId = monitor.getGuid();

        // construct lesson header
        var lessonHeader ='{' + 
                            'user:   { id: \'' + monitor.userId + '\'},' +    
                            'lesson: {' +
                                        'id: \'' + monitor.lessonId + '\', ' +
                                        'href: \'' + window.location.href + '\', ' +
                                        'path: \'' + window.location.pathname + '\' ' +
                                    '}' +
                           '}';

        // lessonId used for slideChanged data
        window.localStorage.setItem(monitor.lessonId, '{}');  
        window.localStorage.setItem(monitor.lessonHeader, lessonHeader);        
        window.localStorage.setItem('userId', monitor.userId);                

        // add to list of lessons viewed by browser
        if(localStorage.getItem('lessons') === null) {
            window.localStorage.setItem('lessons', monitor.lessonId);    
        } 
        else {
            var lessons = window.localStorage.getItem('lessons');

            // if lesson does not exist, add to list
            if(lessons.indexOf(monitor.lessonId)<0){
                lessons = lessons + ',' + monitor.lessonId;
                window.localStorage.setItem('lessons', lessons);                    
            }
        }
    };


    //  utils 
    // ----------------------------------------
    monitor.getGuid = function (){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
    }

    monitor.hash = function (path){
        var hash = 0, i, char;
        if (path.length == 0) return hash;
        for (i = 0, l = path.length; i < l; i++) {
            char  = path.charCodeAt(i);
            hash  = ((hash<<5)-hash)+char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };


    //  post analytics
    // ----------------------------------------

    window.addEventListener('online', function(e) {
        if (!monitor.initialized) return;

        // read data from local storage
        var lessonHeader = window.localStorage.getItem(monitor.lessonHeader);
        var slideChanges = window.localStorage.getItem(monitor.lessonId); 

        // waits 6 seconds to send message
        // browser takes while to wake up
        window.setTimeout(function(){
                // post lesson data
                monitor.postData(slideChanges,lessonHeader);

                // clear slideChanges history
                window.localStorage.setItem(monitor.lessonId, '{}'); 

                // check for offline lessons
                monitor.postDataOfPreviouslyViewedLessons();
        }, 6000);

    }, false);


    monitor.postDataOfPreviouslyViewedLessons = function (){

        // offline lessons
        var lessons = window.localStorage.getItem('lessons');
        lessons = lessons.split(',');
        var currentLesson = lessons.indexOf(monitor.lessonId);
        lessons.splice(currentLesson,1); // remove current lesson

        // post data and clear previous lessons
        var length = lessons.length;
        if(length > 1){

            // post data
            for (var i=0; i<length; i++){
                var lessonHeader = window.localStorage.getItem(lessons[i] + '_header');
                var slideChanges = window.localStorage.getItem(lessons[i]); 
                monitor.postData(slideChanges,lessonHeader);
            }

            // clear lessons key - only current lesson left
            window.localStorage.setItem('lessons', currentLesson);

            // remove local storage keys for other lessons
            for (var i=0; i<length; i++){
                window.localStorage.removeItem(lessons[i]);
                window.localStorage.removeItem(lessons[i] + '_header');               
            }
        }
    }


    monitor.postData = function (slideChanges,lessonHeader) {

        // compose json message
        lessonHeader = lessonHeader.substring(0, lessonHeader.lastIndexOf('}'));
        slideChanges = 'slideChanges:[' + slideChanges + ']';
        var analytics = lessonHeader + ',' + slideChanges + '}';

        // base64 analytics string
        analytics = window.btoa(analytics);
        var url = monitor.server + "?analytics=" + analytics;

        // create new script
        var script = document.createElement("script");
        script.setAttribute("src", url);
        script.setAttribute("type", "text/javascript");

        // append script to runtime - posts data
        var body = document.getElementsByTagName("body");
        document.body.appendChild(script);    
    }
    ------------------- START commented out spring 2015 ------------------- */

    /*
        Cases:
            navigating online (post immidiately, write copy to local archive)
            navigating offline (post to local queue, update local archive)       
            navigating changing from offline to online (read local queue, post to server)
            navigating changing from online to offline (stop posting to server, write to local queue)

            navigating across lessons (create identifier for lessons - consider overwriting problem)
            navigating across workshops (create identifier for workshop - consider overwriting problem)        
    */

