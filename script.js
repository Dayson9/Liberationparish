const text=["Welcome to CCC Liberation Parish", "[Dwelling of Peace]"];
const days = document.getElementById('d');
const hrs = document.getElementById('h');
const mins = document.getElementById('m');
const secs = document.getElementById('s');
const anim = document.getElementById('anim');
const out= document.getElementById("animated");
const img= document.getElementById('img');
const prev= document.getElementById('prev');
const next= document.getElementById('next');
const imgArr= ["icover.jpg", "harvest.jpg", "EMF.jpg"];
var counter= 0;
var d, h, m, s;

const date2sec = (sec, min, hr, day) =>{
    let seconds = (sec)+(60*min)+(3600*hr)+(86400*day);
    return seconds;
}

const computeDate = () =>{
let d= new Date();
let sec1= date2sec(d.getSeconds(), d.getMinutes(), d.getHours(), d.getDate());
let sec2= date2sec(0, 0, 10, 17);
let secDiff= sec2-sec1;
let sd= secDiff/86400;
let day= Math.floor(sd);
let hour= Math.floor(((sd)-day)*24);
let minute= Math.floor(((((sd)-day)*24)-hour)*60);
let sm= ((((sd)-day)*24)-hour)*60;
let second= Math.floor((sm-minute)*60);

return [day, hour, minute, second];
}


const updateCountdown = () =>{
if(s == 1){
s= 60;
m-=1;
secs.innerHTML= s;
mins.innerHTML= m;
}else{
s-=1;
secs.innerHTML= s > 9? s : "0"+s;
}

if(m == 0){
m= 60;
h-=1;
mins.innerHTML= m;
hrs.innerHTML= h;
}

if(h == 0){
h= 60;
d-=1;
hrs.innerHTML= h;
days.innerHTML= d;
}

}

const changeImage= (c) =>{
img.style.opacity= 0;
setTimeout(()=> img.src= imgArr[c], 300);
setTimeout(()=> img.style.opacity=1, 300);
}

const animate = (txt, el) =>{
  txt= txt.split('')
let len= txt.length;
let t= 0;
var int= setInterval(()=>{
 
  if(t != len){
el.innerHTML+= txt[t]
t++;
}else{
  clearInterval(int)

}

}, 100)
}


const checkForZero = () =>{
mins.innerHTML= m > 9? m : "0"+m;
hrs.innerHTML= h > 9? h : "0"+h;
days.innerHTML= d > 9? d : "0"+d;
}

window.onload= ()=>{
let diff= computeDate();
days.innerText= diff[0] > -1? diff[0] : -(diff[0]);
hrs.innerText= diff[1] > -1? diff[1] : -(diff[1]);
mins.innerText= diff[2] > -1? diff[2] : -(diff[2]);
secs.innerText= diff[3] > -1? diff[3] : -(diff[3]);
d= parseInt(days.innerHTML);
h= parseInt(hrs.innerHTML);
m= parseInt(mins.innerHTML);
s= parseInt(secs.innerHTML);

}


animate(text[0], out);

setTimeout(()=>{
animate(text[1], anim);
}, 3500)

setInterval(updateCountdown, 1000);
setInterval(checkForZero, 500)

next.ontouchstart= ()=>{
counter++;
changeImage(counter);
}

prev.ontouchstart= ()=>{
if(counter != 0){
counter--;
changeImage(counter)
}
}

