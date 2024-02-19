<script>

    import {createEventDispatcher} from 'svelte'
    
    const dispatch = createEventDispatcher();
    export let tabArray;
    export let activeItem;

</script>
<div class="tabs-container">
<h2>Gallery</h2>
<div class="tabs">
<ul>
    {#each tabArray as item}
    <li on:click="{() => dispatch('tabChange', item.label)}" class:active={item.label === activeItem}>
        <div>{item.label}</div>
    </li>
     {/each}
</ul>
</div>
</div>


<style type="text/scss">
@import '../styles/theme.scss';
@import '../styles/breakpoints.scss';   

.tabs {
    padding: 40px 0;
    background-color: $dark-grey;
}

.tabs-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $dark-grey;
    padding-top: 30px;

}

h2 {
    color: white;
    text-align: center;
}

ul {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    list-style-type: none;
}

li {
    margin: 0 16px;
    font-size: 18px;
    color: $white;
    cursor: pointer;
    width: 200px;
    text-align: center;
}

.active {
    border-bottom: 2px solid $primary;
    padding-bottom: 8px;
}
</style>