<script>
import RectangularButton from "./Rectangular-Button.svelte";

    // export let backgroundImageUrl = "url(/img/6.jpg)";
    // export let backgroundImageAltUrl = "url(/img/7.png)"
    export let heading = "Our Menu";

    export let hasCTA = true;
    export let ctaText = "Order Now";
    export let ctaUrl = "";



</script>

<div class="section-container">

<div style="" class="image-strip">
</div>
    <div class="content-container">
    <h2 class="section-heading">{heading}</h2>
    <slot>

    </slot>

    {#if hasCTA}
    <a href="{ctaUrl}" class="cta">{ctaText}</a>
    {/if}
    </div>

</div>


<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.section-container {
    display: flex;
    justify-content: center;
    background-color: $secondary;
    height: fit-content;

        @include for-size(tablet-portrait-down) {

            flex-direction: column;

        }
    // align-items:;
}

.image-strip {
    flex: 0 1 10%;
    height: 110vh;
    background-image: var(--backgroundImageUrl);

    background-size: cover;


            @include for-size(tablet-portrait-down) {
                flex: unset;
                width: 100%;
                height: 40vh;
                background-image: var(--backgroundImageAltUrl);
                background-size:cover;

                // transform: rotate(90deg);

            }
}

.content-container {
    display: flex;
    flex-direction: column;
    flex: 0 1 90%;
    // justify-content: space-between;
    padding: 50px 30px;

        @include for-size(tablet-portrait-down) {
            flex: 0 1 100%;
        }
}

.section-heading {
    font-weight: bold;
    color: #fff;
}


 .cta {
    width: 180px;
    height: 50px;
    background-color: $white;
    color: $primary !important;
    border-radius: 5px;
    font-size: 22px;
    z-index: 3;
    display: block;
    /* margin: 0 auto; */
    line-height: 50px;
    text-align: center;
    text-decoration: none;

            @include for-size(tablet-portrait-down) {
                margin: 0 auto;
            }
  }

</style>