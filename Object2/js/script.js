function isEmpty(obj) {
    if(Object.keys(obj).length == 0)
        return true;
    
    return false;
}
console.log(isEmpty({}));
console.log(isEmpty({name: "John"}));