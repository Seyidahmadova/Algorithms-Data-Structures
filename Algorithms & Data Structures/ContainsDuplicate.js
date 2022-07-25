var containsDuplicate = function(nums=[]) {
    // for(let num of nums){
    //     nums.splice(nums.indexOf(num), 1);
       
    //     if(nums.includes(num)){
    //         return true;
    //     }
    // }
    // return false;

    newarr=[]
    for(let num of nums){
        if(newarr.includes(num)){
            return true;
        }
        newarr.push(num)
    }
    return false

};