<script>
  export let imageBg = "";
</script>

<div class="container" style="background-image: url({imageBg});">
  <div class="flavour-container">
    <div class="Perfect-Blend-heading">The <span style="color:#eeba28;">Perfect</span> Blend of</div>
    <div class="FlavorComfort-heading">Flavor <span style="color:#131e27">& Comfort</span></div>
    <div class="paragraph-Heading">
      The best things in life have a taste of their own. Unique, flavorful, exciting and scintillating, bringing that great sensation of luxury while also feeling right at home. That is what you can
      expect when you visit Kettle’e.
    </div>
    <div class="paragraph-subHeading">
      The most authentic South Asian cuisine combined with the modern-day aesthetic, Kettle’e is the premium cafe experience that brings the flavor of home right in the heart of the California Bay
      Area. Relax, unwind & enjoy the taste of pure goodness when you visit our quaint little establishment.
    </div>
    <div class="paragraph-subHeading">Because when you’re at Kettle’e, you are exactly where you belong.</div>
  </div>
</div>
<!-- <local> -->
<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .container {
    // width: 100vw;
    width: 100%;
    min-height: 80vh;
    margin-top: -40px;
    background-image: url("/Banner-Comfort.png");
    background-size: cover;
  }
  .flavour-container {
    padding-left: 100px;
    padding-top: 90px;
    padding-bottom: 120px !important;
    @include for-size(phone-only) {
      padding-left: 15px;
      padding-top: 24pc;
    }
    @media only screen and (min-width: 550px) and (max-width: 992px) {
      padding-left: 30px;
    }
    @media only screen and (min-width: 1600px) and (max-width: 2400px) {
      padding-top: 130px;
    }
  }
  .Perfect-Blend-heading {
    font-size: 42px;
    text-transform: uppercase;
    color: #131e27;
    font-weight: 800;

    @include for-size(phone-only) {
      font-size: 24px;
      padding-top: 14pc !important;
    }
    @media only screen and (min-width: 550px) and (max-width: 992px) {
      font-size: 29px;
    }
  }
  .FlavorComfort-heading {
    font-size: 73px;
    text-transform: uppercase;
    color: #eeba28;
    font-weight: 800;
    margin-top: -14px;
    @include for-size(phone-only) {
      font-size: 38px;

      margin-top: -7px;
    }
    @media only screen and (min-width: 550px) and (max-width: 992px) {
      font-size: 47px;
    }
    @media only screen and (min-width: 1300px) and (max-width: 1600px) {
      margin-top: 1px !important;
    }
  }
  .paragraph-Heading {
    font-size: 20px;
    // letter-spacing: 1px;
    line-height: 30px;
    color: #131e27;
    font-weight: 400;
    font-family: "Open Sans";
    width: 60%;
    margin-top: 45px;
    @include for-size(phone-only) {
      width: 95%;
    }
    @media only screen and (min-width: 550px) and (max-width: 992px) {
      width: 90%;
    }
  }
  .paragraph-subHeading {
    font-size: 20px;
    // letter-spacing: 1px;
    line-height: 30px;
    color: #131e27;
    font-weight: 400;
    font-family: "Open Sans";
    width: 60%;
    margin-top: 20px;
    @include for-size(phone-only) {
      width: 95%;
    }
    @media only screen and (min-width: 550px) and (max-width: 992px) {
      width: 90%;
    }
  }
</style>
