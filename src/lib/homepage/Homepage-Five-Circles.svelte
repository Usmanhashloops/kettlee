<script>
    import { beforeUpdate, afterUpdate } from 'svelte';

    export let images;
    export let gridWidth;
    export let imageWidth;
    export let numberOfColumns = 4;
    export let objWidth;

    console.log(images)
    numberOfColumns += 1;
let flexWidth = (100 / numberOfColumns) + "%";

    let dividor = Math.min(images.length, 4)
    console.log(dividor)
    let widthOfImage = (100 / numberOfColumns) + "%";
    widthOfImage = "15%";

    	beforeUpdate(() => {

    let remainder = images.length % numberOfColumns;

    // for(let i = 0; i < (numberOfColumns - remainder); i++) {
    //     console.log("Here " + i);
    //     images.push({
    //     invisible: true,
    //     src: "",
    //     alt: "ThisIsInvisible123",
    //     caption: ""
    // })
    // }

    })


</script>

<div class="gallery-container" style="padding-left: {(100 - gridWidth)/2}%; padding-right: {(100 - gridWidth)/2}%">

    {#each images as image}

    <div class="image-container  {image.alt ==='ThisIsInvisible123' ? 'invisible-obj' : ''}" style="flex: 0 1 {widthOfImage}" 
   >
        <!-- <img class="image" src="{image.src}" alt="{image.alt}" style="width: 100%" 
        > -->

        <div class="image">
            <p class="image-caption">{image.caption}</p>
        </div>
<!-- <p class="image-caption">{image.caption}</p> -->
    </div>

        
    {/each}
</div>

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.gallery-container {
        display: flex;
        justify-content: space-between;
        margin: auto;
        flex-wrap: wrap;
        background-color: $dark-grey;
        padding-bottom: 50px;
        padding-top: 150px;

         @include for-size(tablet-landscape-down) {
                    flex-direction: column;
                    justify-content: center;
         }
}

.invisible-obj {
        height: 0;
        visibility: hidden;
}

.image {
    height: 14rem;
    width: 14rem;
    background-color: $primary;

        border: solid 1px white;
        @include for-size(tablet-landscape-down) {
                filter: grayscale(0%) brightness(0.5);
                margin: 0 auto

        }
    border-radius: 50%;


    filter: grayscale(50%) brightness(0.6);
    transition: all 0.5s ease-in ;
    
}

.image:hover {
    filter: grayscale(0%) brightness(0.9);
    transform: scale(1.2);
    display: block;
}

.image-container {
        margin-right: 10px;
        position: relative;
        border-radius: 50%;

    @include for-size(tablet-landscape-down) {
            flex: 0 1 100% !important;
            margin: 20px auto;

    }
}

.image-container:after {
  content: "";
//   display: block;
  
//   padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
}



.image-container img {
      position: absolute; /* Take your picture out of the flow */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; /* Make the picture taking the size of it's parent */
  width: 100%; /* This if for the object-fit */
  height: 100%; /* This if for the object-fit */
  object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
  object-position: center;
}

.image:last-child {
    margin-right: 0;

        @include for-size(tablet-landscape-down) {

            margin-right: unset;
        }
}

.image-caption {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 23px;
  font-weight: bold;
  color: $white;
  text-align: center;
  white-space: nowrap;
}

.image-container:hover .image-caption {
    display: block;

}
.image-caption:hover {
}

</style>