<script>
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { navbarArray, iconList } from "$lib/data.js";
  import FooterSmall from "$lib/Footer-Small.svelte";
  import BannerCheckOutBg from "$lib/widgets/Banner-checkOut-Bg.svelte";
</script>

<div class="relativePosition">
  <Navbar />

  <main>
    <slot />
  </main>

  <!-- <Footer 
    linkList1 = {navbarArray}
		linkList2 = {navbarArray}
		footerLogoUrl = "/logo.png"
		footerLogoAlt = {""}
		contactList = {iconList}
		footerDescription = "Kabab and Curry (Est. 1999) is one of the leading restaurants for Pakistani and Indian halal cuisine in the Bay Area, with restaurants serving Santa Clara and Cupertino."
		CustomerName="Kebab and Curry"
/> -->
  <!-- <BannerCheckOutBg /> -->
  <FooterSmall imageBg="/homepage/facebookIcon.png" image1="/homepage/instagramIcon.png" image2="/homepage/yelpIcon.png" />
</div>

<!-- <img src="/facebookIcon.png" alt=""> -->
<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";
  .relativePosition {
    position: relative;
  }
</style>
