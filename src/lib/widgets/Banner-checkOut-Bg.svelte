<script>
  export let imageBg = "";
</script>

<div class="container" style="background-image: url({imageBg});">
  <div class="row">
    <div class="column" />
    <div>
      <div class="heading">Check Out</div>
      <div class="headingCULTURE">Our Menu</div>
      <a
        href="https://www.toasttab.com/kettle-e-1610-el-camino-real"
        class="ORDERNOWButton">ORDER NOW</a
      >
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .container {
    // width: 100vw;
    width: 100%;
    height: 415px;
    margin-top: -40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("/BannerCheckOut.png");
    background-size: cover;
    @media only screen and (min-width: 300px) and (max-width: 400px) {
      height: 300px !important;
      float: left;
    }
    @media only screen and (min-width: 400px) and (max-width: 550px) {
      height: 200px !important;
    }
    @media only screen and (min-width: 550px) and (max-width: 700px) {
      height: 250px !important;
    }
    @include for-size(tablet-portrait-down) {
      height: 285px;
    }

    @include for-size(tablet-landscape-down) {
      height: 285px;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
      height: 350px;
    }
    @media only screen and (min-width: 1201px) and (max-width: 1500px) {
      height: 378px;
    }
    @media only screen and (min-width: 1800px) and (max-width: 2600px) {
      height: 550px;
    }

    // background-repeat: none;
  }
  .ORDERNOWButton {
    height: 39px;
    width: 170px;
    border: 2px solid #131e27;
    border-radius: 50px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    color: #131e27;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .row {
    display: flex;
    flex-direction: row;
    @media only screen and (min-width: 300px) and (max-width: 400px) {
      display: block;
      padding-left: 20px;
    }

    // @include for-size(phone-only) {
    //   display: block;
    //   padding-left: 20px;
    // }
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 35%;

    @media only screen and (min-width: 300px) and (max-width: 400px) {
      width: 6% !important;
    }
    @media only screen and (min-width: 400px) and (max-width: 550px) {
      width: 55% !important;
    }
    @media only screen and (min-width: 550px) and (max-width: 700px) {
      width: 50% !important;
    }
    @include for-size(tablet-portrait-down) {
      width: 47% !important;
    }
    @include for-size(tablet-landscape-down) {
      width: 47%;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
      width: 42% !important;
    }
    @media only screen and (min-width: 1201px) and (max-width: 1350px) {
      width: 38.6% !important;
    }
    @media only screen and (min-width: 1350px) and (max-width: 1500px) {
      width: 33.6% !important;
    }
    // @media only screen and (min-width: 1501px) and (max-width: 2400px) {
    //   width: 52.8% !important;
    // }
  }
  .headingCULTURE {
    font-size: 120px;
    text-transform: uppercase;
    color: #131e27;
    font-weight: bold !important;
    margin-top: -2px;
    @media only screen and (min-width: 300px) and (max-width: 400px) {
      font-size: 40px !important;
      margin-top: 5px !important;
      margin-bottom: 10px !important;
      color: #eeba28;
    }
    @media only screen and (min-width: 400px) and (max-width: 550px) {
      font-size: 28px !important;
      margin-top: 2px !important;
    }
    // @include for-size(phone-only) {
    //   font-size: 40px !important;
    //   margin-top: -5px;
    // }
    // @include for-size(tablet-portrait-down) {
    //   font-size: 50px;
    //   margin-top: -5px;
    // }
    @media only screen and (min-width: 550px) and (max-width: 700px) {
      font-size: 45px !important;
      margin-top: -7px !important;
    }
    @include for-size(tablet-landscape-down) {
      font-size: 60px;
      margin-top: -10px;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
      font-size: 75px;
      margin-top: -10px;
    }
    // @media only screen and (min-width: 1201px) and (max-width: 1500px) {
    //   font-size: 90px;
    //   margin-top: -15px;
    // }
  }
  .heading {
    font-size: 46px;
    font-weight: 600;
    text-transform: uppercase;
    color: #131e27;
    @media only screen and (min-width: 300px) and (max-width: 400px) {
      font-size: 22px !important;
    }
    @media only screen and (min-width: 400px) and (max-width: 550px) {
      font-size: 23px !important;

      font-weight: 600;
    }
  }
</style>
