<script context="module">
  import { restaurantData } from "$lib/restaurantData.js";
  import FullBannerCenterText from "$lib/widgets/Full-Banner-Center-Text.svelte";
  import SliderTabs from "$lib/Slider-Tabs.svelte";
  import SliderGallery from "$lib/Slider-Gallery.svelte";
  import { sliderTabs, galleryImages, awardImages } from "$lib/data";
  import PlainGallery from "$lib/widgets/Plain-Gallery.svelte";
  import CateringSection from "$lib/Catering-Section.svelte";
  import HomepageViewMenus from "$lib/homepage/Homepage-View-Menus.svelte";
  import ImageSlider from "$lib/widgets/Image-Slider.svelte";

  export async function load({ params }) {
    function isTitle(obj) {
      return obj.slug === params.slug;
    }
    let pageData = restaurantData.filter((slug) => {
      return isTitle(slug);
    });
    let pageObject = {};
    pageObject.pageData = pageData;

    let slug = params.slug;
    $: pageData = restaurantData.filter((pop) => {
      return {
        props: {
          pageData: isTitle(pop),
          slug: params.slug,
          title: pageData[0].title,
          data: pageData[0],
        },
      };
    });

    // console.log(params.slug)
    // console.log(pageObject.pageData)

    return {
      props: {
        pageData: restaurantData.filter((slug) => {
          return isTitle(slug);
        }),

        slug: params.slug,

        data: restaurantData.filter((slug) => {
          return isTitle(slug);
        })[0],

        title: restaurantData.filter((slug) => {
          return isTitle(slug);
        })[0].title,

        overlayData: restaurantData.filter((slug) => {
          return isTitle(slug);
        })[0].overlayData,
      },
    };
  }
</script>

<script>
  import OverlaySection from "$lib/widgets/Overlay-Section.svelte";
  import SideImageSection from "$lib/widgets/Side-Image-Section.svelte";
  import Menu from "$lib/widgets/Menu.svelte";
  import Tabs from "$lib/widgets/Tabs.svelte";
  import { page } from "$app/stores";
  import IconTextBanner from "$lib/widgets/Icon-Text-Banner.svelte";
  import MenuContainer from "$lib/widgets/Menu-Container.svelte";
  import Form from "$lib/widgets/Form.svelte";
  import BannerImageBg from "$lib/widgets/Banner-Image-Bg.svelte";
  import ViewMenusAlternate from "$lib/homepage/View-Menus-Alternate.svelte";

  export let pageData;
  export let pageObject;
  // $: pageData = pageObject.pageData
  export let slug;
  export let data;
  export let title;
  export let overlayData;
  // export let menu;

  // console.log(pageData)
  // console.log(slug)

  $: pageData[0] = pageData[0];

  // $: slug, (() => {
  //     console.log("slug updated:" + slug)
  // })
  let current_data;
  // $: pageData,  (()=>{
  // // and here you do the update (its like watch in vuejs)
  // // document.title = `Page ${data.title}`;
  // current_data = pageData;
  // })();

  $: pageData = pageData;
  $: pageData2 = pageData;

  // export let data = pageData[0]

  // const overlayData = data.overlayData
  let categoryArray = [];
  // console.log(data)
  let activeMenu = data.menu[0].items;

  data.menu.forEach((category) => {
    categoryArray.push({
      label: category.category,
    });
  });
  // console.log(categoryArray)
  let activeItem = categoryArray[0];

  const tabChange = (e) => {
    activeItem = e.detail;
    activeMenu = data.menu.filter((obj) => {
      return isMenu(obj);
    })[0].items;
  };

  function isMenu(obj) {
    return obj.category === activeItem;
  }

  let activeGalleryItem = sliderTabs[0].label;

  const galleryTabChange = (e) => {
    activeGalleryItem = e.detail;
  };
</script>

<FullBannerCenterText h1={title} backgroundImageUrl={restaurantData[0].bannerBackgroundImageUrl} p={data.description} />

<IconTextBanner
  heading="A culinary journey"
  paragraphs={[
    "Kabab and Curry's Santa Clara Restaurant, our very first location, began our collective culinary journeys to explore the delightful tastes of the east.",
    "With delicious food and a well-rounded menu in a cozy setting, Kabab and Curry's Santa Clara has become a popular mainstay in the Bay Area.",
  ]}
/>

<!-- <h2>{title}</h2> -->
<!-- <OverlaySectionn
    overlayTitle= {overlayData.overlayTitle}
	column1TopText= {overlayData.column1TopText}
	column1MiddleText= {overlayData.column1MiddleText}
	column1BottomText= {overlayData.column1BottomText}
	column2TopText= {overlayData.column2TopText}
	column2MiddleText= ""
	column2BottomText= {overlayData.column2BottomText}
	--backgroundImageUrl = {overlayData.backgroundImageUrl}
/> -->

<MenuContainer>
  <Tabs itemArray={categoryArray} {activeItem} on:tabChange={tabChange} />

  <Menu itemList={activeMenu} />
</MenuContainer>

<IconTextBanner
  heading="Catering"
  paragraphs={[
    "Our restaurants are a popular choice for catering in the Bay Area.",
    "With diverse and halal Pakistani and Indian cuisine, our menus satisfy the needs of many of our regular patrons at their events and gatherings.",
  ]}
>
  <Form emailMessage="This user filled out a catering form on Kabab and Curry" />
</IconTextBanner>

<!-- <SideImageSection 
    
    hasCTA = {true}
    ctaText = {"Order Now"}
    ctaUrl = {""}
    heading = {"Our Menu"}
    --backgroundImageUrl={"url(/location/menu.jpg)"}
    --backgroundImageAltUrl={"url(/location/menu-rotated.jpg)"}
    >

    
    <Tabs
        itemArray = {categoryArray}
        activeItem = {activeItem}
        on:tabChange = {tabChange}

    />

    <Menu
     itemList = {activeMenu}
    />
</SideImageSection> -->

<!-- <SliderTabs
	tabArray = {sliderTabs}
	activeItem = {activeGalleryItem}
	on:tabChange={galleryTabChange}
/>

{#each galleryImages as item}
	{#if activeGalleryItem === item.label}
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

<BannerImageBg heading="Award-Winning Dining Experience" paragraph="Our restaurants have consistently been rated, reviewed and awarded for our culinary creativity and cozy ambiance." />

<!-- <h2 class="award-header">Award-Winning Dining Experience</h2> -->

<!-- <PlainGallery
    	images = {awardImages}
		numberOfColumns = {4}
		gridWidth={"90%"}
/> -->

<!-- 
<CateringSection 
    infoHeading="Catering"
		tinyTopText="odd little bit of text"
		infoPara1="Our restaurants are a popular choice for catering in the Bay Area." 

        infoPara2="With diverse and halal Pakistani and Indian cuisine, our menus satisfy the needs of many of our regular patrons at their events and gatherings."
		imgUrl="/img/icon.jpg"
        imgAlt=""
        marginLeft = "10%"
/> -->

<!-- <HomepageViewMenus /> -->
<!-- <ImageSlider /> -->
<ViewMenusAlternate />

<style type="text/scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .award-header {
    text-align: center;
    background-color: $dark-grey-light;
    color: $white;
    padding: 30px 0;
  }
</style>
