let isPrime=0;
let num=12;
for(let i=1; i<=num; i++){
    if(num%i==0){
        isPrime++;
    }
}
if(isPrime=1){
    console.log(num,"Is a Prime")
}else{
    console.log(num,"is Not a Prime");
}