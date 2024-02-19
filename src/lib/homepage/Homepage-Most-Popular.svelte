<script>


import { beforeUpdate, afterUpdate } from 'svelte';
import {mostPopularDishes} from "$lib/data.js"

export let dishes = mostPopularDishes;
export let numberOfColumns = 4;
export let objWidth;
export let gridWidth = "90%";

numberOfColumns += 1;
let flexWidth = "20%";
let header = "Our Most Popular Dishes"

	beforeUpdate(() => {

    })


</script>

<div class="grid-container" style="width: 100%">
<h2 class="header">{header}</h2>
<div class="dish-container" style="width: 90%">
    {#each dishes as dish}
    
        <div class="obj {dish.title === 'ThisIsInvisible123' ? 'invisible-obj' : ''}" style="flex: 0 1 {flexWidth}">

        <img src="{dish.imgUrl}" alt="{dish.imgAlt}" class="obj-img" style="width: 100%; height: {gridWidth}">

            <div class="text-container" style="width: 100%">
            <h4 class="title">{dish.title}</h4>
            <p class="dish-para">{dish.description}</p>
            </div>
        </div>
    {/each}
    </div>
</div>

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

    $column-width: 300px;

    .grid-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        padding-top: 40px;
        background-color: $dark-grey-light;
    }

    .header {
        text-align: center;
        color: $white;
    }
    .dish-container {
        display: flex;
        flex-wrap: wrap;
        margin: 50px auto;
        justify-content: space-evenly;
    }

    .obj {
        flex: 0 1 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

        // margin-right: 10px;
    }

    .dish-para {
        width: 90%;
        margin: 10px auto;
        text-align: center;
        color: $white
    }

    .invisible-obj {
        height: 0;
        visibility: hidden;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: $primary;
        border: 1px solid $primary;
        min-width: 250px;
        padding: 20px 0px;
    }

    .obj-img {
        // width: $column-width;
        // height: $column-width;
        min-width: 250px;
        min-height: 250px;
    }

    .title {
        color: $white;
    }

</style>