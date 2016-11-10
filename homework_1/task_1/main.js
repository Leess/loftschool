var arr = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];
var lengthArr = arr.length;

function consoleRec(a){ 
    if(1 < a ) { 
        i=0;   
        consoleRec(a - 1);
        i++;
    }    
    console.log(arr[i]);
}
consoleRec(lengthArr);

