var a = [1,9,3];
for (var i = 0;i < a.length; i++){
    console.log(a[i]);
}
var cursor = -1;
var next = function(f){cursor++; f(a[cursor]);};
var print = function(x){console.log(x);}
next(print);
next(print);
next(print);


a.forEach(print);
