<script>

    import {createEventDispatcher} from 'svelte'
    
    const dispatch = createEventDispatcher();
    export let itemArray;
    export let activeItem;
    export let isKetlee = false
    export let isKetleeList = false

    if(itemArray[0].label === "Egg Delicacy") {
        isKetlee = true;
        isKetleeList = true
    }

    console.log(isKetlee)
</script>

<div class="tabs">
<ul class="{isKetlee ? 'ketlee' : ''}">
    {#each itemArray as item}
    <li on:click="{() => dispatch('tabChange', item.label)}" class:active={item.label === activeItem} class="{isKetlee ? 'ketleeList' : ''}">
        <div>{item.label}</div>
    </li>
     {/each}
</ul>
</div>


<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.tabs {
    margin-bottom: 0px;
}

ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
    
    flex-wrap: wrap;

                @include for-size(tablet-portrait-down) {
                        justify-content: center;

                }
}

.ketlee {
    width: 50%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.ketleeList {
    margin: 10px 0;
}
li {
    margin: 10px 10px;
    font-size: 18px;
    color: $gold;
    cursor: pointer;
    border: 1px solid $gold;
    width: 160px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    
}

li:first-child {
    margin-left: 0;
}

li > div {
    font-size: 14px;
}

.active {
    background-color: $gold;
    color: $white;
    // color: $primary;
    border: 1px solid $gold;
    font-weight: bold;

}
</style>