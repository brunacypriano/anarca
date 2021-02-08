
var introVideo = document.querySelector('#intro');
var playlistOptions = document.querySelector('#playlist-box');
var finalVideo = document.querySelector('#finalVideo');


var player01 = new Vimeo.Player(introVideo);
var player02 = new Vimeo.Player(finalVideo);

const audio = document.querySelector('audio')


    player01.on('ended', ()=>{
        introVideo.classList.add('hide');
        playlistOptions.classList.remove('hide');
        playlistOptions.classList.add('show');
        audio.play()

    });

    player02.on('ended', ()=>{
        finalVideo.classList.remove('show');
        finalVideo.classList.add('hide');
        playlistOptions.classList.remove('hide');
        playlistOptions.classList.add('show')
    })


    function goToFinal(){


        playlistOptions.classList.remove('show');
        playlistOptions.classList.add('hide');
        finalVideo.classList.remove('hide');
        finalVideo.classList.add('show');

    }