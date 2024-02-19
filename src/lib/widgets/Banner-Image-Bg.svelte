<script>
    export let heading = ""
    export let paragraph = ""
    export let imageBg = ""

</script>


<div class="container">
<h2 class="heading">{heading}</h2>
<p class="paragraph">{paragraph}</p>
</div>


<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.container {
    width: 100vw;
    height: 40vh;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-image: url("../../../static/location/mini-banner.jpg");
    background-image: url("/location/mini-banner.jpg");
    background-size: contain;
    background-position-x: 140px;

        @include for-size(tablet-portrait-down) {
            background-size: cover;
            background-position-x: -500px;


        }

         @include for-size(phone-only) {
            background-size: auto;
             background-position-x: -700px;
            background-position-y: -350px;



        }

    // background-repeat: none;

}

.heading {
    color: $gold;
    font-size: 40px;
    margin-bottom: 50px;
}

.paragraph {
    color: $gold;
    width: 50%;
    text-align: center;

            @include for-size(tablet-portrait-down) {
                        width: 90%;
            }
}
</style>