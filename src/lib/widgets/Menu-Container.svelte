<script>
  export let heading = 'From Our Menu';
  export let paragraph = 'Tuesday - Sunday 10:00 AM - 3:00 PM, 4 PM - 8 PM';

  export let hasCTA = true;
  export let ctaText = 'Order Now';
  export let ctaUrl = '';
</script>

<div class="container">
  <h2 class="heading">
    {heading}
  </h2>

  <p class="paragraph">
    {paragraph}
  </p>
  <slot />
</div>

<style lang="scss">
  @import '../../styles/theme.scss';
  @import '../../styles/breakpoints.scss';

  .container {
    width: 100vw;
    height: fit-content;
    background-color: $black;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
  }

  .heading {
    font-size: 40px;
    margin-top: 50px;
    font-weight: 400;
    color: $gold;
  }

  .paragraph {
    font-size: 20px;
    margin: 30px 0;
    font-weight: 400;
    color: $gold;
  }
</style>
