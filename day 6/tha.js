// window.onload = ()=>{
//1
var array = [1,2,3,4];
console.log(Array.is_array("array"));


// // //2
// //  var arrayclone = function(array){
// //     obj2 = {...array};
// //     console.log(obj2);
// // }


// // //3.
// // var first = function(array ,n)
// // {
// //     if(array == null)
// //     return void 0;
// // if(n==null)
// // return array[0];
// //     if(n<0)
// //     return [];
// //     return array.slice(0,n);
// // }


// // //4.
// // var colorjoin = function(array){
// // console.log(array.join(","));
// // console.log(array.join("+"));
// // }



// // 5.
var arr = [1,2,3]
var count =1;var  c =0;
for(var i=0;i<arr.length();i++)
{
    for(var j = i;i<arr.length();j++)
    {
        if(arr[i]==arr[j])
        c++;
        if(count<c)
        count = c
    }
    c=0;
}
console.log(c);
// // }