var async_function = function(val, callback){
    process.nextTick(function(){
        callback(val);
    });
};

// The above function when called as

async_function(42, function(val) {
  console.log(val);
});
console.log(43);


/*

Will print 42 to the console asynchronously. In particular process.nextTick fires after the current eventloop callstack is empty. That call stack is empty after async_function and console.log(43) have run. So we print 43 followed by 42.

You should probably do some reading on the event loop.


*/
