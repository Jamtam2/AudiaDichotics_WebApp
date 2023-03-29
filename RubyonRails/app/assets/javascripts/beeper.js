const audio = new Audio('http://soundbible.com/grab.php?id=1815&type=mp3'***REMOVED***;
document.addEventListener('click', (event***REMOVED***=>{
  let el = event.target;
  if (el.matches('.beeper'***REMOVED******REMOVED*** {
    console.log("beep!"***REMOVED***;
    audio.play(***REMOVED***;
    el.classList.toggle("disabled"***REMOVED***;
  ***REMOVED***
***REMOVED******REMOVED***;