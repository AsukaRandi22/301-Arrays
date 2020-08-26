//find the largest number in the array

var nums2= [5, 2, 10];
function max(arr){
    var result= arr[0];
    for (var i= 1; i< arr.length; i++){
        var current= arr[i];
        if (current>result){
            result=current;
        }

    }
    return result;
}