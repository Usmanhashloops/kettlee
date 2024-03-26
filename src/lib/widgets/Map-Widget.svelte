<script>
  export let title;
  export let address;
  export let contact;
  export let email;
  export let slug;
  export let mapAddress;
</script>

<div class="container">
  <div class="text-container">
    <h3>{title}</h3>
    <p>{address}</p>
    <p>{contact}</p>
    <!-- <p>{email}</p> -->
    <a href={slug}>View Menu</a>
  </div>
  <div class="map-container">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="500"
          height="350"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q={mapAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        /><style>
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            height: 350px;
            width: 500px;
          }
        </style>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #fff;

    @include for-size(tablet-portrait-down) {
      flex-direction: column;
      height: fit-content;
    }
  }

  .container:nth-child(odd) {
    background-color: $cream;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    max-width: 200px;

    @include for-size(tablet-portrait-down) {
      margin-left: 7px;
    }

    @include for-size(phone-only) {
      max-width: 90%;
      align-items: center;
    }
  }

  .map-container {
    margin-left: 100px;
  }

  h3 {
    font-weight: 400;
    color: $gold;
    font-size: 28px;
    margin-bottom: 10px;
    text-align: left;

    @include for-size(phone-only) {
      text-align: center;
    }
  }

  p {
    color: #000;
    font-weight: 300;
    text-align: left;

    @include for-size(phone-only) {
      text-align: center;
    }
  }

  a {
    line-height: 50px;
    height: 50px;
    width: 180px;
    color: $gold;
    background-color: $black;
    text-align: center;
    display: block;
    border-radius: 5px;
    font-size: 18px;

    @include for-size(phone-only) {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
  }
</style>
