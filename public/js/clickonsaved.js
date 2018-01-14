const savedImages = document.getElementsByClassName('saved-image');
const savedImagesOverlay = document.getElementsByClassName('hover-container');
console.log(savedImagesOverlay, 'saved');
const length = savedImages.length;
    console.log(savedImages[0].style.zIndex );
for (let i=0; i < length; i++){
  savedImages[i].style.zIndex = 3;

  savedImages[i].addEventListener('click', () => {
    if(savedImages[i].style.zIndex == 3){
      savedImages[i].style.zIndex = 1;
      console.log('zindex now', savedImages[i].style.zIndex);
    } else if (savedImages[i].style.zIndex == 1){
      savedImages[i].style.zIndex = 3;
      console.log('zindex now', savedImages[i].style.zIndex);
    }
  })
  }


for (let i=0; i < length; i++){
  savedImagesOverlay[i].addEventListener('click', () => {
    console.log('clicked');
    savedImages[i].style.zIndex = 1;
  })
}

const showOverlay = function showOverlay(overlay, i) {

}
// for (overlay of savedImagesOverlay){
//   overlay.addEventListener('click', () => {
//     console.log('overlay clicked', overlay);
//     overlay.style.background = 'red';
//   })
// }
