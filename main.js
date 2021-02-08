
var introVideo = document.querySelector('#intro');
var playlistOptions = document.querySelector('#playlist-box');
var finalVideo1 = document.querySelector('#finalVideo1');
var finalVideo2 = document.querySelector('#finalVideo2');
var finalVideo3 = document.querySelector('#finalVideo3');


var player00 = new Vimeo.Player(introVideo);
var player01 = new Vimeo.Player(finalVideo1);
var player02 = new Vimeo.Player(finalVideo2);
var player03 = new Vimeo.Player(finalVideo3)

const audio = document.querySelector('audio')


    player00.on('ended', ()=>{
        console.log('acabou')
        introVideo.classList.add('hide');
        playlistOptions.classList.remove('hide');
        playlistOptions.classList.add('show');
        audio.play();

    });

    player01.on('ended', ()=>{
        finalVideo1.classList.remove('show');
        finalVideo1.classList.add('hide');
        playlistOptions.classList.remove('hide');
        playlistOptions.classList.add('show');
        audio.play();
    });

    player02.on('ended', ()=>{
        finalVideo2.classList.remove('show');
        finalVideo2.classList.add('hide');
        playlistOptions.classList.remove('hide');
        playlistOptions.classList.add('show');
        audio.play();
    });

    player03.on('ended', ()=>{
        finalVideo3.classList.remove('show');
        finalVideo3.classList.add('hide');
        playlistOptions.classList.remove('hide');
        playlistOptions.classList.add('show');
        audio.play();
    });


    function goToFinal1(){


        playlistOptions.classList.remove('show');
        playlistOptions.classList.add('hide');

        finalVideo3.classList.remove('show');
        finalVideo3.classList.add('hide');
        finalVideo2.classList.remove('show');
        finalVideo2.classList.add('hide');

        finalVideo1.classList.remove('hide');
        finalVideo1.classList.add('show');

        audio.pause();
        audio.currentTime = 0;

    }

    function goToFinal2(){


        playlistOptions.classList.remove('show');
        playlistOptions.classList.add('hide');

        finalVideo1.classList.remove('show');
        finalVideo1.classList.add('hide');
        finalVideo3.classList.remove('show');
        finalVideo3.classList.add('hide');


         finalVideo2.classList.remove('hide');
         finalVideo2.classList.add('show');

        audio.pause();
        audio.currentTime = 0;

    }

    function goToFinal3(){


        playlistOptions.classList.remove('show');
        playlistOptions.classList.add('hide');

        finalVideo2.classList.remove('show');
        finalVideo2.classList.add('hide');
        finalVideo1.classList.remove('show');
        finalVideo1.classList.add('hide');

         finalVideo3.classList.remove('hide');
         finalVideo3.classList.add('show');

        audio.pause();
        audio.currentTime = 0;

    }


