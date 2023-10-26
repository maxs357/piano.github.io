 const pianoKeys = document.querySelectorAll(".piano-keys .key");
      const pianoVolumeSlider = document.querySelector(".volume-slider input");

      const rushEButton = document.getElementById("rush-e");
      const rushESong = new Audio("tunes/rush-e.mp3");
      const rondaAllaTurcaButton = document.getElementById("ronda-alla-turca");
      const rondaAllaTurcaSong = new Audio("tunes/ronda-alla-turca.mp3");
	  const alorsButton = document.getElementById("alors");
      const alorsSong = new Audio("tunes/alors.mp3");
	  const supermanButton = document.getElementById("superman");
      const supermanSong = new Audio("tunes/superman.mp3");
	  const notlovingButton = document.getElementById("notloving");
      const notlovingSong = new Audio("tunes/notloving.mp3");
	  const saxoButton = document.getElementById("saxo");
      const saxoSong = new Audio("tunes/saxo.mp3");
	  const cavallButton = document.getElementById("cavall");
      const cavallSong = new Audio("tunes/cavall.mp3");
	  const omgButton = document.getElementById("omg");
      const omgSong = new Audio("tunes/omg.mp3");
	  const dangerButton = document.getElementById("danger");
      const dangerSong = new Audio("tunes/danger.mp3");
	  const ohioButton = document.getElementById("ohio");
      const ohioSong = new Audio("tunes/ohio.mp3");
	  const phoneButton = document.getElementById("phone");
      const phoneSong = new Audio("tunes/phone.mp3");
	  const shockButton = document.getElementById("shock");
      const shockSong = new Audio("tunes/shock.mp3");
	  const morgen2023Button = document.getElementById("m1");
      const morgen2023Song = new Audio("tunes/morgennegre.mp3");
	  const verkaButton = document.getElementById("m2");
      const verkaSong = new Audio("tunes/verka.mp3");
	  const macoButton = document.getElementById("m3");
      const macoSong = new Audio("tunes/maco.mp3");

      let allKeys = [];
      let audio = new Audio(`tunes/a.mp3`); // by default, audio src is "a" tune

      const playTune = (key) => {
        audio.src = `tunes/${key}.mp3`; // passing audio src based on key pressed 
        audio.play(); // playing audio

        const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
        clickedKey.classList.add("active"); // adding active class to the clicked key element
        setTimeout(() => { // removing active class after 150 ms from the clicked key element
          clickedKey.classList.remove("active");
        }, 150);
      }

      pianoKeys.forEach(key => {
        allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
        // calling playTune function with passing data-key value as an argument
        key.addEventListener("click", () => playTune(key.dataset.key));
      });

      const handlePianoVolume = (e) => {
        const volume = e.target.value; // get the volume value from the range slider
        audio.volume = volume; // adjust the volume of the piano tune
      }

      const pressedKey = (e) => {
        // if the pressed key is in the allKeys array, only call the playTune function
        if (allKeys.includes(e.key)) playTune(e.key);
      }

      pianoVolumeSlider.addEventListener("input", handlePianoVolume);
      document.addEventListener("keydown", pressedKey);
	  
		
const songVolumeSlider = document.getElementById('song-volume-slider');
    songVolumeSlider.addEventListener('input', () => {
      const volume = songVolumeSlider.value;
      rushESong.volume = volume;
      rondaAllaTurcaSong.volume = volume;
	  alorsSong.volume = volume;
    });
	
const songVolumeSlider2 = document.getElementById('song-volume-slider2');
    songVolumeSlider2.addEventListener('input', () => {
      const volume = songVolumeSlider2.value;
	  supermanSong.volume = volume;
	  morgen2023Song.volume = volume;
	  verkaSong.volume = volume;
	  macoSong.volume = volume;
	  notlovingSong.volume = volume;
	  saxoSong.volume = volume;
    });

      function reproducirRushE() {
        rushESong.play();
      }

      rushEButton.addEventListener("click", reproducirRushE);

      function reproducirRondaAllaTurca() {
        rondaAllaTurcaSong.play();
      }

      rondaAllaTurcaButton.addEventListener("click", reproducirRondaAllaTurca);
	  
	  function reproduciralors() {
        alorsSong.play();
      }

      alorsButton.addEventListener("click", reproduciralors);
	  
	  function reproducirsuperman() {
        supermanSong.play();
      }

      supermanButton.addEventListener("click", reproducirsuperman);
	  
	   function reproducirnotloving() {
        notlovingSong.play();
      }

      notlovingButton.addEventListener("click", reproducirnotloving);
	  
	  function reproducirsaxo() {
        saxoSong.play();
      }

      saxoButton.addEventListener("click", reproducirsaxo);
	  
	  function reproducircavall() {
        cavallSong.play();
      }

      cavallButton.addEventListener("click", reproducircavall);
	  
	  document.addEventListener('keydown', function(event) {
  if (event.key === '1') {
    reproducircavall();
  }
});
	  
	  function reproduciromg() {
        omgSong.play();
      }

      omgButton.addEventListener("click", reproduciromg);
	  
	  document.addEventListener('keydown', function(event) {
  if (event.key === '2') {
    reproduciromg();
  }
});
	  
	  function reproducirdanger() {
        dangerSong.play();
      }

      dangerButton.addEventListener("click", reproducirdanger);
	  
	  document.addEventListener('keydown', function(event) {
  if (event.key === '3') {
    reproducirdanger();
  }
});
	  
	  function reproducirohio() {
        ohioSong.play();
      }

      ohioButton.addEventListener("click", reproducirohio);
	  
	  document.addEventListener('keydown', function(event) {
  if (event.key === '4') {
    reproducirohio();
  }
});
	  
	  function reproducirphone() {
        phoneSong.play();
      }

      phoneButton.addEventListener("click", reproducirphone);
	  
	  document.addEventListener('keydown', function(event) {
  if (event.key === '5') {
    reproducirphone();
  }
});
	  
	  function reproducirshock() {
        shockSong.play();
      }

      shockButton.addEventListener("click", reproducirshock);
	  
	  document.addEventListener('keydown', function(event) {
  if (event.key === '6') {
    reproducirshock();
  }
});
	  
	  function cambiarFondo1() {
  var pianoKeysWhite = document.querySelectorAll(".piano-keys .white");
  pianoKeysWhite.forEach(function (key) {
    key.style.backgroundImage = "linear-gradient(#fff 96%, #eee 4%)";
	key.style.backgroundPosition = "initial";
  });
}
	  
	  function cambiarFondo2() {
  var pianoKeysWhite = document.querySelectorAll(".piano-keys .white");
  pianoKeysWhite.forEach(function (key) {
    key.style.background = "url(tunes/foto1.jpg)";
    key.style.backgroundPosition = "center"; 
    key.style.backgroundSize = "cover"; 
  });
}

function cambiarFondo3() {
  var pianoKeysWhite = document.querySelectorAll(".piano-keys .white");
  pianoKeysWhite.forEach(function (key) {
    key.style.background = "url(tunes/foto2.jpg)";
    key.style.backgroundPosition = "center"; 
    key.style.backgroundSize = "cover"; 
  });
}


function reproducirVideo() {
  
  var video = document.createElement('video');
  video.src = "tunes/boom2.mp4"; 
  video.autoplay = true;
  video.controls = false;
  video.style.position = "fixed";
  video.style.top = "0";
  video.style.left = "0";
  video.style.width = "90%";
  video.style.height = "90%";
  video.style.transform = "rotate(20deg)";
  video.style.zIndex = "9999";

  document.body.appendChild(video);

  video.addEventListener('ended', function() {
    
    video.parentNode.removeChild(video);

    var imagenNegra = document.createElement('div');
    imagenNegra.style.position = 'fixed';
    imagenNegra.style.top = '0';
    imagenNegra.style.left = '0';
    imagenNegra.style.width = '100%';
    imagenNegra.style.height = '100%';
    imagenNegra.style.backgroundColor = 'black';
    imagenNegra.style.zIndex = '9999';

    document.body.appendChild(imagenNegra);
  });
}

// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
  // Esperar 5 segundos y luego agregar la clase 'hidden'
  setTimeout(function() {
    var wrapper3 = document.querySelector(".wrapper3");
    if (wrapper3) {
      wrapper3.classList.add("hidden");
    }
  }, 5000); // 5000 milisegundos = 5 segundos
});

const morgenButton = document.getElementById("morgen");
const amagarDiv = document.querySelector(".amagar");

morgenButton.addEventListener("click", function () {
  amagarDiv.classList.toggle("visible");
});

function reproducirmorgen2023() {
        morgen2023Song.play();
      }

      morgen2023Button.addEventListener("click", reproducirmorgen2023);

function reproducirverka() {
        verkaSong.play();
      }

      verkaButton.addEventListener("click", reproducirverka);

function reproducirmaco() {
        macoSong.play();
      }

      macoButton.addEventListener("click", reproducirmaco);
	  
	  
	  let currentSong = null; // Almacena la canción actualmente en reproducción

// Función genérica para reproducir una canción
function reproducirCancion(song) {
  if (currentSong !== song) {
    if (currentSong !== null) {
      currentSong.pause();
    }
    song.play();
    currentSong = song;
  }
}

// Asocia la función reproducirCancion a cada botón de canción
rushEButton.addEventListener("click", () => reproducirCancion(rushESong));
alorsButton.addEventListener("click", () => reproducirCancion(alorsSong));
supermanButton.addEventListener("click", () => reproducirCancion(supermanSong));
notlovingButton.addEventListener("click", () => reproducirCancion(notlovingSong));
saxoButton.addEventListener("click", () => reproducirCancion(saxoSong));
morgen2023Button.addEventListener("click", () => reproducirCancion(morgen2023Song));
verkaButton.addEventListener("click", () => reproducirCancion(verkaSong));
macoButton.addEventListener("click", () => reproducirCancion(macoSong));
