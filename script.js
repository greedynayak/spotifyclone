console.log("welcome to spotify");
let songIndex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');


let songs=[
    {songName:"Ghoomar",filePath:"1.mp3",coverPath:"firstsong.webp"},
    {songName:"O Mere Dil ke Chain",filePath:"2.mp3",coverPath:"secondsong.jpg"},
    {songName:"Drishyam",filePath:"3.mp3",coverPath:"thirdsong.webp"},
    {songName:"Senorita",filePath:"4.mp3",coverPath:"four.jpg"},
   
]

songitems.forEach((element,i)=>{
    console.log(element,i);
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})


masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value *audioelement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        // element.addEventListener('click',(e)=>{

        // })
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
   
element.addEventListener('click',(e)=>{
makeallplays();
songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioelement.src=`${songIndex+1}.mp3`;
mastersongname.innerText= songs[songIndex].songName;
audioelement.currentTime=0;
audioelement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
    })
})