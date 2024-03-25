<script>
  import { kncImages, sliderTabs, galleryImages } from "$lib/data";
  import HomepageBanner from "$lib/homepage/Homepage-Banner.svelte";
  import HomeageAboutUs from "$lib/homepage/Homeage-About-Us.svelte";
  import HomepageMostPopular from "$lib/homepage/Homepage-Most-Popular.svelte";
  import HomepageViewMenus from "$lib/homepage/Homepage-View-Menus.svelte";
  import CateringSection from "$lib/Catering-Section.svelte";
  import HomepageFiveCircles from "$lib/homepage/Homepage-Five-Circles.svelte";
  import HomepageBannerAlt from "$lib/homepage/Homepage-Banner-Alt.svelte";
  import HomepageGallery from "$lib/homepage/Homepage-Gallery.svelte";
  import SliderTabs from "$lib/Slider-Tabs.svelte";
  import SliderGallery from "$lib/Slider-Gallery.svelte";
  import { restaurantData } from "$lib/restaurantData";
  import BannerImageBg from "$lib/widgets/Banner-Image-Bg.svelte";
  import BannerImageBgFull from "$lib/widgets/Banner-Image-Bg-Full.svelte";
  import BannerFlavorComfort from "$lib/widgets/Banner-Flavor-Comfort.svelte";
  import BannerCheckOutBg from "$lib/widgets/Banner-checkOut-Bg.svelte";
  import BannerReflectionBg from "$lib/widgets/Banner-Reflection-Bg.svelte";
  import BannerRamadan from "$lib/widgets/Banner-Ramadan.svelte";
  import ImageSlider from "$lib/widgets/Image-Slider.svelte";
  let activeItem = sliderTabs[0].label;
  const tabChange = (e) => {
    activeItem = e.detail;
  };
  $: innerWidth = 0;

  // let styles = []
  // $: cssVarStyles = Object.entries(styles)
  // 		.map(([key, value]) => `--${key}:${value}`)
  // 		.join(';');
  // export let pageData;
  // export let pageObject;
  // export let slug;
  // export let data;
  // export let title;
  // export let overlayData;
  // export let categoryArrayy;
  // export let id;
  // export let menuItems;

  // if (categoryArrayy != undefined) {
  // }

  // $: pageData[0] = pageData[0];

  // let current_data;

  // $: pageData = pageData;
  // $: pageData2 = pageData;
  // let categoryArray = [];
  // let activeMenu = menuItems(data);
  // data.menu.forEach((category) => {
  //   categoryArray.push({
  //     label: category.category,
  //   });
  // });

  // function isMenu(obj) {
  //   return obj.category === activeItem;
  // }

  // let activeGalleryItem = sliderTabs[0].label;

  // const galleryTabChange = (e) => {
  //   activeGalleryItem = e.detail;
  // };
  // const scrollToMenu = () => {
  //   const div = document.getElementById("menu");
  //   div.scrollIntoView({ behavior: "smooth", inline: "start" });
  // };
</script>

<svelte:window bind:innerWidth />
<!-- 
<HomepageFiveCircles 
		images = {kncImages}
		numberOfColumns = {5}
		objWidth={"200px"}
		gridWidth={"90"}
		imageWidth={"300px"}
    />
    
<HomepageBanner />

<HomepageBannerAlt
	--backgroundImageUrl = "url(/homepage/KnC-bg.jpg)"
/>

<HomepageMostPopular />

<HomepageViewMenus />

<CateringSection 
    infoHeading="Catering"
		tinyTopText="odd little bit of text"
		infoPara1="Our restaurants are a popular choice for catering in the Bay Area." 

        infoPara2="With diverse and halal Pakistani and Indian cuisine, our menus satisfy the needs of many of our regular patrons at their events and gatherings."
		imgUrl="/img/icon.jpg"
		imgAlt=""
/>

<SliderTabs
	tabArray = {sliderTabs}
	activeItem = {activeItem}
	on:tabChange={tabChange}
/>

{#each galleryImages as item}
	{#if activeItem === item.label}
		<SliderGallery 
		images = {item.list}
		numberOfColumns = {4}
		gridWidth={"90%"}
		shouldAutoplay={true}
		preId={item.label}
		/>
	{/if}
{/each}
 -->

<!-- <HomepageGallery /> -->
<!-- style="background-image: url({location.backgroundImageUrl})" -->

<div class="container">
  <!-- {#if innerWidth > 1430}
	{#each restaurantData as location}

<a href="/locations/{location.slug}">
<div class="location"
	style="background-image: url({location.backgroundImageUrl})"
	>

	<div class="overlay"></div>

   <h2 class="header">{location.imageTitle}</h2>

   </div>
   </a>
{/each}
   {:else}
   {#each restaurantData as location}

<a href="/locations/{location.slug}">
<div class="location"
	style="background-image: url({location.backgroundImageLandscapeUrl}); background-size: cover;"
	>

	<div class="overlay"></div>

   <h2 class="header">{location.imageTitle}</h2>

   </div>
   </a>
{/each}
	{/if}
	 -->

  <BannerImageBgFull imageBg="/homepage/kattleHome4x.png" />
  <BannerRamadan />
  <BannerFlavorComfort imageBg="/homepage/Banner-Comfort.png" />
  <BannerReflectionBg
    imagess="/location/kettlee1.jpg"
    image1=" /location/kettlee2.jpg"
    image2="/location/kettlee3.jpg "
    image3=" /location/kettlee4.jpg"
    image4="/location/kettlee5.jpg"
    image5="/location/kettlee6.jpg"
  />
  <BannerCheckOutBg imageBg="/homepage/BannerCheckOut.png" />
  <!-- <ImageSlider /> -->
</div>

<style lang="scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";

  html {
    // overflow-y: hidden !important;
  }
  .container {
    // display: flex;
    // justify-content: space-evenly;
    padding-top: 117px;
    // padding-bottom: 10px;

    @include for-size(laptop-down) {
      flex-direction: column;
    }
  }
  .red {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }
  .location {
    height: 80vh;
    width: 25vw;
    background-size: cover;
    // background-color: red;
    position: relative;

    @include for-size(laptop-down) {
      display: flex;
      height: 50vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
      background-size: contain;
    }
  }
  a {
    text-decoration: none;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 4;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(186, 156, 86, 0.4) 0%,
      rgba(186, 156, 86, 0.4) 40%,
      rgba(255, 255, 255, 1) 100%
    );
    transition: background-color 400ms ease-in-out;

    @include for-size(laptop-down) {
      background: rgba(0, 0, 0, 0.6);
    }
  }
  .overlay:hover {
    // background: rgba(0, 0, 0, 0.0);
  }
  h2 {
    position: absolute;
    color: $gold;
    bottom: 50%;
    right: 5%;
    font-weight: 300;
    transform: rotate(-270deg);
    // transform-origin:20% 40%;
    width: 0;
    text-align: left;
    z-index: 5;
    text-transform: uppercase;
    transition: font-weight 200ms ease-in-out;

    @include for-size(laptop-down) {
      transform: rotate(0deg);
      position: static;
      text-decoration: none !important;
      text-align: center;
      width: 100%;
      margin: 0 auto;
    }
  }

  h2:hover {
    font-weight: 600;
  }

  .location:first-child h2 {
    width: 350px;
    right: -29%;
    bottom: 40%;
  }
</style>
