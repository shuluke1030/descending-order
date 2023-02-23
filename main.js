function descendingOrder(n){
 let arr = Array.from(String(n), Number);
 arr.sort((a, b) => b - a);
 let ans = arr.join('');
 return ans;
}
descendingOrder(12345)

