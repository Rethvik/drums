let tom1 = document.querySelector('.tom1');
let tom2 = document.querySelector('.tom2');
let tom3 = document.querySelector('.tom3');
let tom4 = document.querySelector('.tom4');
let snare = document.querySelector('.snare');
let crash = document.querySelector('.crash');
let kick = document.querySelector('.kick');
let container = document.querySelector('.container');
let tom1Img = document.querySelector('.tom1-img');
let tom2Img = document.querySelector('.tom2-img');
let tom3Img = document.querySelector('.tom3-img');
let tom4Img = document.querySelector('.tom4-img');
let snareImg = document.querySelector('.snare-img');
let kickImg = document.querySelector('.kick-img');
let crashImg = document.querySelector('.crash-img');

tom1.addEventListener('click',tom1Sound);
tom2.addEventListener('click',tom2Sound);
tom3.addEventListener('click',tom3Sound);
tom4.addEventListener('click',tom4Sound);
snare.addEventListener('click',snareSound);
crash.addEventListener('click',crashSound);
kick.addEventListener('click',kickSound);
document.addEventListener('keydown',(e)=>{
   keyPress(e.key);
});

function keyPress(pressedKey){
    switch (pressedKey){
        case "7":
            tom1Sound();
            break;
        case '8':
            tom2Sound();
            break;
        case '9':
            tom3Sound();
            break;
        case '4':
            tom4Sound();
            break;
        case '5':
            snareSound()
            break;
        case '6':
            crashSound();
            break;
        case '1':
            kickSound();
            break;
        default:console.log(pressedKey)
    }
}
function tom1Sound(){
    let audio = new Audio('sounds_tom-1.mp3');
    audio.play();
    tom1Img.classList.toggle('animated');
    setTimeout(()=>{
        tom1Img.classList.remove('animated')
    },200);
}
function tom2Sound(){
    let audio = new Audio('sounds_tom-2.mp3');
    audio.play();
    tom2Img.classList.toggle('animated');
    setTimeout(()=>{
        tom2Img.classList.remove('animated')
    },200);}
function tom3Sound(){
    let audio = new Audio('sounds_tom-3.mp3');
    audio.play();
    tom3Img.classList.toggle('animated');
    setTimeout(()=>{
        tom3Img.classList.remove('animated')
    },200);}
function tom4Sound(){
    let audio = new Audio('sounds_tom-4.mp3');
    audio.play();
    tom4Img.classList.toggle('animated');
    setTimeout(()=>{
        tom4Img.classList.remove('animated')
    },200);}
function snareSound(){
    let audio = new Audio('sounds_snare.mp3');
    audio.play();
    snareImg.classList.toggle('animated');
    setTimeout(()=>{
        snareImg.classList.remove('animated')
    },200);}
function kickSound(){
    let audio = new Audio('sounds_kick-bass.mp3');
    audio.play();
    kickImg.classList.toggle('animated');
    setTimeout(()=>{
        kickImg.classList.remove('animated')
    },200);}
function crashSound(){
    let audio = new Audio('sounds_crash.mp3');
    audio.play();
    crashImg.classList.toggle('animated');
    setTimeout(()=>{
        crashImg.classList.remove('animated')
    },200);}