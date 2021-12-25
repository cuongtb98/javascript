Array.prototype.filter2 = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            callback(this[i], i, this)
        }
    }
    return this
}


a = [2,5,7,9]
b = a.filter2(a=>a)
console.log(b)

