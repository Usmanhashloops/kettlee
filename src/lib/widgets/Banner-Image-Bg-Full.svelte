<script>
  export let paragraph = "";
  export let imageBg = "";
</script>

<div class="container" style="background-image: url({imageBg});">
  <div class="row">
    <div class="column" />
    <div>
      <div class="heading">WHERE</div>
      <div class="headingCOFFEE">CHAI COFFEE <span class="headingMeet"> MEETS </span></div>
      <div class="headingCULTURE">CULTURE</div>
      <a href="https://www.toasttab.com/kettle-e-1610-el-camino-real" class="ORDERNOWButton">ORDER NOW</a>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .container {
    // width: 100vw;
    width: 100%;
    height: 93vh;
    margin-top: -50px;
    // padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    // background-image: url("../../../static/location/mini-banner.jpg");
    background-image: url("/location/mini-banner.jpg");
    background-size: cover;
    // background-position-x: 140px;

    @include for-size(phone-only) {
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      float: left;
    }
    @include for-size(tablet-portrait-down) {
      height: 70vh !important;
    }
    @include for-size(tablet-landscape-down) {
      height: 85vh !important;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
      height: 70vh;
    }
    @media only screen and (min-width: 1201px) and (max-width: 1400px) {
      height: 110vh !important;
      background-size: cover;
    }
    @media only screen and (min-width: 1401px) and (max-width: 1600px) {
      height: 107vh !important;
      background-size: cover;
    }
    @media only screen and (min-width: 1601px) and (max-width: 1900px) {
      height: 99vh !important;
      background-size: cover;
    }
    @media only screen and (min-width: 1901px) and (max-width: 2200px) {
      height: 107vh !important;
      background-size: cover;
    }

    // background-repeat: none;
  }
  .ORDERNOWButton {
    height: 40px;
    width: 165px;
    margin-left: 3px;
    border: 2px solid #eeba28;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 800;
    color: #eeba28;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .row {
    display: flex;
    flex-direction: row;
    @include for-size(phone-only) {
      display: block;
      padding-left: 20px;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 52.9%;
    @include for-size(phone-only) {
      // width: 5% !important;
    }
    @include for-size(tablet-portrait-down) {
      width: 58% !important;
    }
    @include for-size(tablet-landscape-down) {
      width: 58% !important;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
      width: 56% !important;
    }
    @media only screen and (min-width: 1201px) and (max-width: 1240px) {
      width: 58% !important;
    }
    @media only screen and (min-width: 1241px) and (max-width: 1280px) {
      width: 58% !important;
    }
    @media only screen and (min-width: 1281px) and (max-width: 1370px) {
      width: 56% !important;
    }
    @media only screen and (min-width: 1371px) and (max-width: 1500px) {
      width: 52% !important;
    }
    @media only screen and (min-width: 1501px) and (max-width: 1650px) {
      width: 50.8% !important;
    }
    @media only screen and (min-width: 1651px) and (max-width: 1900px) {
      width: 52.9% !important;
    }
    @media only screen and (min-width: 1901px) and (max-width: 2400px) {
      width: 50% !important;
    }
  }
  .headingCOFFEE {
    font-size: 35px;
    font-weight: 900 !important;
    text-transform: uppercase;
    color: #eeba28;

    @include for-size(phone-only) {
      font-size: 26px !important;
      font-weight: 800 !important;
    }
    @include for-size(tablet-portrait-down) {
      font-size: 26px;
    }
    @include for-size(tablet-landscape-down) {
      font-size: 28px;
    }
    @media only screen and (min-width: 1350px) and (max-width: 1500px) {
      margin-bottom: 3px !important;

      font-weight: 900 !important;
    }
    @media only screen and (min-width: 1501px) and (max-width: 1600px) {
      margin-top: 3px !important;

      font-weight: 900 !important;
    }
  }
  .headingCULTURE {
    font-size: 135px;
    text-transform: uppercase;
    color: hsl(207, 34%, 11%);
    font-weight: 800 !important;
    margin-left: -4px;
    // font-weight: 900 !important;
    margin-top: -18px;
    @include for-size(phone-only) {
      font-size: 50px !important;
      margin-top: -5px;
      color: #eeba28;
    }
    @include for-size(tablet-portrait-down) {
      font-size: 50px;
      margin-top: -5px;
      color: #eeba28;
    }
    @include for-size(tablet-landscape-down) {
      font-size: 62px;
      margin-top: -10px;
    }
    @media only screen and (min-width: 1201px) and (max-width: 1350px) {
      font-size: 90px;
      margin-top: -13px;
    }
    @media only screen and (min-width: 1350px) and (max-width: 1500px) {
      font-size: 105px;
      margin-top: -2px !important;
    }
    @media only screen and (min-width: 1501px) and (max-width: 1600px) {
      margin-top: -2px !important;
    }
  }
  .heading {
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    margin-bottom: -4px;
    text-transform: uppercase;
    color: #131e27;
    // font-family: "Gotham";
    @include for-size(phone-only) {
      color: #eeba28;
      font-size: 26px;
    }
    @include for-size(tablet-portrait-down) {
      color: #eeba28;
    }
  }
  .headingMeet {
    font-size: 33px;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    color: #131e27;
    // font-family: "Gotham";
    @include for-size(phone-only) {
      color: #eeba28;
      font-size: 26px;
    }
    @include for-size(tablet-portrait-down) {
      color: #eeba28;
    }
  }

  .paragraph {
    color: $gold;
    width: 50%;
    text-align: center;

    font-size: 40px;
    @include for-size(tablet-portrait-down) {
      width: 90%;
    }

    @include for-size(phone-only) {
      font-size: 30px;
    }
  }
</style>
