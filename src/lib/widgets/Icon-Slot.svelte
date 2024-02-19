<script>

export let isTop = false
export let heading = ""
export let paragraphs = []
</script>

<div class="container" class:padding-top="{isTop}">
<h2 class="heading">
   {heading}
</h2>

<div class="img-container">
    <h1>Contact Us</h1>
<img src="/KnC-Swish.svg" alt="">
</div>

<slot name="above">

</slot>
{#each paragraphs as paragraph}
    <p class="paragraph"> 
    {paragraph}
    </p>
{/each}
<slot name="below">

</slot>


</div>

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.padding-top {
    padding-top: 150px;
}

.container {
    width: 100vw;
    height: fit-content;
    background-color: $cream;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    color: $gold;
    font-weight: 300;
    text-align: center;
    margin-bottom: 0;
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