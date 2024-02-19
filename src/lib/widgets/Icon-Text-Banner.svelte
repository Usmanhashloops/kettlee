<script>

export let heading = ""
export let paragraphs = []
</script>
{#if heading === "Catering"}
        <div id="catering"></div>
    {/if}
<div class="container">
    
<h2 class="heading">
   {heading}
</h2>

<div class="img-container">
<img src="/KnC-Swish.svg" alt="">
</div>
{#each paragraphs as paragraph}
    <p class="paragraph"> 
    {paragraph}
    </p>
{/each}
<slot>

</slot>

</div>

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.container {
    width: 100vw;
    height: fit-content;
    background-color: $cream;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.img-container {
    width: 20%;
    margin: 0 auto;

                @include for-size(tablet-portrait-down) {

                            width: 60%;

                }
}

.heading, .paragraph {
    color: $gold;
    text-align: center;
}

.heading {
    font-size: 40px;
    margin-top: 50px;
    font-weight: 400;
}

.paragraph {
    margin-bottom: 50px;
    width: 45%;

            @include for-size(tablet-portrait-down) {
                    width: 75%;

            }
}

img {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 40px;
}
</style>