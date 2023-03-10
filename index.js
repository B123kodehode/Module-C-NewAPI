











const numItemsToGenerate = 5; //how many gallery items you want on the screen
const numImagesAvailable = 57; //how many total images are in the collection you are pulling from
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels
const collectionID = 2008146; //the collection ID from the original url
const $galleryContainer = document.querySelector('.gallery-container');

function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`) 
    .then((response)=> {    
      let galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
      `
      galleryItem.addEventListener("mouseover", function() {
        this.classList.add("highlight");
      });
      galleryItem.addEventListener("mouseout", function() {
        this.classList.remove("highlight");
      });
      $galleryContainer.appendChild(galleryItem);
    })
}

for(let i=0;i<numItemsToGenerate;i++){
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  renderGalleryItem(randomImageIndex);
}



