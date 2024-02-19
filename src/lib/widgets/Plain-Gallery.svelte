<script>
    import { beforeUpdate, afterUpdate } from 'svelte';

    export let images;
    export let gridWidth;
    export let numberOfColumns = 0;
    // numberOfColumns += 1;
let flexWidth = (100 / numberOfColumns) + "%";

    let dividor = Math.min(images.length, 4)
    let widthOfImage = (100 / numberOfColumns) + "%";

    	beforeUpdate(() => {

    let remainder = images.length % numberOfColumns;

    for(let i = 0; i < (numberOfColumns - remainder); i++) {
        images.push({
        invisible: true,
        src: "",
        alt: "ThisIsInvisible123"
    })
    }

    })


</script>

<div class="gallery-container" style="width: {100}%;">

    {#each images as image}

    <div class="image-container  {image.alt ==='ThisIsInvisible123' ? 'invisible-obj' : ''}" style="flex: 0 1 {widthOfImage}" 
   >
        <img class="image" src="{image.src}" alt="{image.alt}" >
    </div>

        
    {/each}
</div>

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.gallery-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: auto;
        background-color: $dark-grey-light;
}

.invisible-obj {
        height: 0;
        visibility: hidden;
        display: none !important;
}


.image-container {
    display: flex;
    justify-content: space-around;
}
.image {
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 20px;
}


</style>