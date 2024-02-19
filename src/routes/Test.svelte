<script>

export let locations = []
</script>

<div class="container">

    {#each locations as location}
        <div class="location">
            
        </div>
    {/each}
    
</div>

<style lang="scss">
@import '../styles/theme.scss';

.container {
    display: flex;
}
</style>