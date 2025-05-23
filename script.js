console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement= new Audio('songs/LetMeBeWith_RoundTable(1).mp3.');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs = [ 
    {songName: "Song_1", filePath: "songs/LetMeBeWith_RoundTable(1).mp3", coverPath: "covers/letMe.jpg"},
    {songName: "Song_2", filePath: "songs/Another Day(3).mp3", coverPath: "covers/AnotherDay.jpg"},
    {songName: "Song_3", filePath: "songs/AasmanKoChukarDekha.mp3", coverPath: "covers/Aasman.jpg"},
    {songName: "Song_4", filePath: "songs/chandSitare.mp3", coverPath: "covers/chandsitare.jpg"},
    {songName: "Song_5", filePath: "songs/girGayaJhumka.mp3", coverPath: "covers/Jhumka.jpg"},
    {songName: "Song_6", filePath: "songs/KrishnaTrance.mp3", coverPath: "covers/Krishna.jpg"},
    {songName: "Song_7", filePath: "songs/KaalBhairavAstkam.mp3", coverPath: "covers/KaalBhairav.jpg"},
    {songName: "Song_8", filePath: "songs/tumAaGyeHo.mp3", coverPath: "covers/TumAaGyeHoo.png"},
    {songName: "Song_9", filePath: "songs/SuzumeNoTojimari_RADWIMPS(2).mp3", coverPath: "covers/Suzume.jpg"},
    {songName: "Song_10", filePath: "songs/MainHiShivHoon.mp3", coverPath: "covers/MainHiShivHoo.jpg"},

]

songItems.forEach((element, i)=>{
   // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//let audioElement = new Audio('songs/LetMeBeWith_RoundTable(1).mp3.');
//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('ri-play-circle-line');
        masterPlay.classList.add('ri-pause-circle-line');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('ri-pause-circle-line');
        masterPlay.classList.add('ri-play-circle-line');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
    //console.log('timeupdate')
    // Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    e.target.classList.add('ri-pause-circle-line');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((elements)=>{
        element.classList.remove('ri-pause-circle-line');
        element.classList.add('ri-play-circle-line');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('ri-play-circle-line');
        e.target.classList.add('ri-pause-circle-line');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('ri-play-circle-line');
        masterPlay.classList.add('ri-pause-circle-line');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9) {
    songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('ri-play-circle-line');
    masterPlay.classList.add('ri-pause-circle-line');

})
    document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0) {
    songIndex = 0;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('ri-play-circle-line');
        masterPlay.classList.add('ri-pause-circle-line');

})
