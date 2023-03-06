import Player from '@vimeo/player';
import throttle from 'lodash.throttle';




const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const playerTime = 'videoplayer-current-time';
const actualTime = localStorage.getItem(playerTime);

const onPlay = function (timeupdate) {
  
  localStorage.setItem(currentTime, timeupdate.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(actualTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });





// Wykonuj to zadanie w plikach 02-video.html i 02-video.js. Rozbij je na kilka podzadań:

// 1. Zapoznaj się z dokumentacją biblioteki odtwarzacza Vimeo.
// 2. Dodaj bibliotekę jako zależność projektu poprzez npm.
// 3. Inicjalizuj odtwarzacz w pliku skryptu tak, jak opisano w sekcji pre-existing player, ale weź pod uwagę to, że odtwarzacz dodano jako pakiet npm, a nie poprzez CDN.
// 4. Zbadaj dokumentację metody on() i zacznij śledzić zdarzenie timeupdate - aktualizacja czasu odtwarzania.
// 5. Zapisuj czas odtwarzania w local storage. Niech kluczem do storage będzie "videoplayer-current-time".
// 6. Do przeładowywania strony używaj metody setCurrentTime() aby wznowić odtwarzanie od zapisanego momentu.
// 7. Dodaj do projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania aktualizował się w storage nie częściej niż raz na sekundę.
