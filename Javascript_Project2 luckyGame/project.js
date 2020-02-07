var i=0;
console.log(rand);
function openimg(z){
// debugger;
var pp=z.split(".");
var x=document.getElementById(pp[0]);// to get the id of img1
var x1=document.getElementById(z);// to get the id of img2
x.style.display="none";
x1.style.display="block"; 
console.log(rand);
var rr1=rand[i];
if(rand[i]==9){//if an unwanted number comes
i=i+1;//to change unwanted number
openimg(z);
}
else{
var arr=["penguin_1.png","penguin_2.png","penguin_3.png","penguin_4.png","penguin_5.png","penguin_6.png","penguin_7.png","penguin_8.png","yeti.png"];//all the images
x1.src=arr[rr1];//to get the image
x1.onclick="hello()";//to not alow to change
i=i+1;
if(rr1==8){
 window.location.href="winerPage.html";//if you lose
}
else if(i==9){
    window.location.href="winerPage1.html"//if you win
}
}

}

function num(){
var z=Math.floor(Math.random()*10);//to get the random number
return z;
}
function rando(){
var n=10;
var i=0;
var k=[];
var count=1;
var b=num();
while(i<n){
if(i==0){
var m=num();//for only first  number
k.push(m);
i=i+1;
}
else{
outer_loop:
for(let p=0;p<i;p++){
  if(k[p]==b){//for conpairizon
       b=num();
       count=1;
      break outer_loop;//for changing number
  }
  else{
      count=0;//for finding unique
  }
}
if(count==0){
  k.push(b);
  i=i+1;
}
}
}
console.log(k);
rand=k;
}
function hello(){
return false;
}