<script>
import RectangularButton from "$lib/widgets/Rectangular-Button.svelte";


const infoHeading ="Storied past, flavorful future"
const infoPara = "Established in the 1990s, Kabab and Currys has become a favorite of food fanatics in the Bay Area. Starting at it's Santa Clara Location, the restaurant has grown in popular and expanded to Cupertino, the MCA Mosque as well as through the Kettle'e Cafe in Santa Clara."
const infoCtaText = "About Us"
const infoCtaUrl = "#"
const infoImageUrl = "/homepage/icon-about.jpg"
</script>

<div class="info-container">
<div class="img-container">
    <img src="{infoImageUrl}" alt="" class="info-img">
</div>
    <div class="info-text-container">
        <h2 class="info-heading">{infoHeading}</h2>
    <p class="info-para">{infoPara}</p>
    <RectangularButton 
        buttonText = {infoCtaText}
        buttonUrl = {infoCtaUrl}
    />
    </div>
</div>

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

.info-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background: $almost-white;
    padding: 50px 0;

    @include for-size(phone-only) {
        flex-wrap: wrap;
    }
    @include for-size(tablet-portrait-up) {
                flex-wrap: wrap;

}

@include for-size(tablet-landscape-up) {
            flex-wrap: wrap;
}

@include for-size(desktop-up) {
            flex-wrap: nowrap;
}
}

.img-container {
    display: flex;
    justify-content: left;
    width: 40%;
         @include for-size(phone-only) {
        width: 100%;
        justify-content: center;

    }
}
.info-img {
    // width: 400px;
    // height: 400px;
}

.info-text-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    @include for-size(phone-only) {
            width: 90%;
            margin-top: 30px;
            margin-left: $body-left-margin;
            margin-right: $body-right-margin;
            align-items: center;

        }

            @include for-size(desktop-up) {
                    width: 30%;
            }
}

.info-heading {
    color: $dark-grey;
}

.info-para {
    margin: 0px 0px;
}




</style>