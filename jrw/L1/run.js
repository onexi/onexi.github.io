 var run = function() {
     var e1 = document.getElementById('end');
     var s = e1.innerHTML;
     if (s === 'End of World') s = '100';
     var i = Number.parseInt(s);
     e1.innerHTML = i - 1; // automatically converts to a string
 };
 window.onload = setInterval(run, 1000);