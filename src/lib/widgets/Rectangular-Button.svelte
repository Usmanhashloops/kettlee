<script>
    export let buttonText;
    export let buttonUrl;
</script>

    <a href="{buttonUrl}" class="hero-cta">{buttonText}</a>

<style lang="scss">
@import '../../styles/theme.scss';
@import '../../styles/breakpoints.scss';

 .hero-cta {
    width: 180px;
    height: 50px;
    background-color: $gold;
    color: $white !important;
    border-radius: 5px;
    font-size: 22px;
    z-index: 3;
    display: block;
    /* margin: 0 auto; */
    line-height: 50px;
    text-align: center;
    text-decoration: none;
  }


</style>


