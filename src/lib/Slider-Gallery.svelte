<script>
    import { beforeUpdate, afterUpdate } from 'svelte';
    import { flip } from 'svelte/animate'
    import {ChevronLeftIcon, ChevronRightIcon} from 'svelte-feather-icons'
    export let images;
    export let gridWidth;
    export let numberOfColumns = 0;
    export let shouldAutoplay = false;
    export let autoplaySpeed = 3000;
    export let preId;

      import { onMount } from 'svelte';

  onMount(() => {
    if(shouldAutoplay) {
    clearInterval(interval);

    startAutoplay();
    }


    // ...
  });

    let interval;
    // numberOfColumns += 1;
let flexWidth = (100 / numberOfColumns) + "%";

    let dividor = Math.min(images.length, 4)
    let widthOfImage = (100 / numberOfColumns) + "%";

    	beforeUpdate(() => {

    let remainder = images.length % numberOfColumns;

    // for(let i = 0; i < (numberOfColumns - remainder); i++) {
    //     console.log("Here " + i);
    //     images.push({
    //     invisible: true,
    //     src: "",
    //     alt: "ThisIsInvisible123",
    //     id: images.length + i + 1
    // })
    // }

    })


function rotateLeft() {
  // const transitioningImage = images[images.length - 1];
  const transitioningImage = images[0];
  document.getElementById(preId+transitioningImage.id.toString()).style.opacity = 0
  // images = [images[images.length - 1],...images.slice(0, images.length - 1)]
  images = [...images.slice(1, images.length), images[0]]

  setTimeout(() => {
    document.getElementById(preId+transitioningImage.id).style.opacity= 1
  }, 5000)

}
function rotateRight() {
  images = [...images.slice(1, images.length), images[0]]
}

function startAutoplay() {
  if(shouldAutoplay) {
    interval = setInterval(rotateLeft, autoplaySpeed)
  }
}

function stopAutoplay() {
  clearInterval(interval);
}


</script>

<div class="gallery-container" style="width: {gridWidth}">

   
    <div class="image  image-container"
   >
    {#each images as image (image.id)}
<img id="{preId + image.id}"class="image {image.alt ==='ThisIsInvisible123' ? 'invisible-obj' : ''}" src="{image.src}" alt="{image.alt}" style="height: {gridWidth}" animate:flip on:mouseover="{stopAutoplay}" on:mouseout="{startAutoplay}">
           {/each}
    </div>
        
 
    <!-- <button id="left" on:click="{rotateLeft}">
    <ChevronLeftIcon size={"100"} strokeFill={"#555"}/>
    </button>
    <button id="right" on:click="{rotateRight}">
  <ChevronRightIcon size={"100"} strokeFill={"#555"} />

    </button> -->
</div>

<style type="text/scss">
@import '../styles/theme.scss';
@import '../styles/breakpoints.scss';   

.gallery-container {
        display: flex;
        flex-direction: column;
        // flex-wrap: wrap;
        justify-content: space-evenly;
        margin: auto;
        overflow-x: hidden;
        position: relative;
        width: 100% !important;
        background-color: $dark-grey;
        padding: 30px 0;
        padding-bottom: 80px;


}

.invisible-obj {
        height: 0;
        visibility: hidden;
}

.image-container {
  margin: 0 auto;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  height: 45%;
  width: 45%;
  // -webkit-mask: linear-gradient(to right, transparent, black 40%, black 60%, transparent);
  // mask: linear-gradient(to right, transparent, black 40%, black 60%, transparent);
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background: transparent;
  border: none
}

#left {
  left: 30px;
}

#right {
  right: 30px;
}

svg {
  width: 50px !important;
  height: 50px !important;
}
</style>