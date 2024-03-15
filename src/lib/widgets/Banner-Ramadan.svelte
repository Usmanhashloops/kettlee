<script>
  export let imageBg = "";
</script>

<div class="menu">
  <div class="containerRamadan">
    <h2 class="headingRamadan">
      "Join Us for a Festive Ramadan Buffet: Iftar to 8:00 PM!"
    </h2>
    <slot />
  </div>
</div>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .containerRamadan {
    width: 100vw;
    height: fit-content;
    // background-color: #efefef;
    background-color: #eeba28;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .headingRamadan {
    font-size: 35px !important;
    margin-top: 55px;
    margin-bottom: 85px;
    // margin-bottom: -2px;

    // font-family: "Parisienne" !important;
    font-weight: 800 !important;
    // color: #eeba28;
    color: #131e27;
    @include for-size(phone-only) {
      font-size: 24px !important;
    }
  }
</style>
