function memoizedAddTo256(){
    var cache = {};
    return function(i)
    {
    if(i in cache)
    {
    console.log("cached value");
    return cache[i]
    }
    else{
    cache[i] = i + 256;
    return cache[i];
    }
    }
    }
    var memoizedFunc = memoizedAddTo256();
    console.log(memoizedFunc(20)); // Normal return
    console.log(memoizedFunc(20)); // Cached return