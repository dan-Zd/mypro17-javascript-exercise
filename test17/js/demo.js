var arr=["a","x","b","d","m","a","k","m","p","j","a"];
var count={};//计数
var pos={};//索引
for(var i=0;i<arr.length;i++){
    var b=arr[i];
    if(count[b]){
    	count[b]+=1;
    	pos[b]+=","+i;
    }else{
    	count[b]=1;
    	pos[b]=i;
    }
}
console.log(count);
console.log(pos);
//出现最多的次数
var max=count[Object.keys(count).sort(
    function(m,n){
    	return count[m]<=count[n];
    })[0]];
console.log(max);
//出现最多次数的字母
var arr_pu=[];
for (i in count){
	if(count[i]>=max){
		max=count[i];
		arr_pu.push(i);
		console.log(arr_pu)
	}
}
document.write('出现次数最多的字母是:' + arr_pu + '<br>');
var char;
for(var i=0;i<arr_pu.length;i++){
	char=arr_pu[i];
	document.write(char + '出现的次数为:' + count[char] + '<br>');
    document.write(char + '的位置分别为:' + pos[char] + '<br>');
}        