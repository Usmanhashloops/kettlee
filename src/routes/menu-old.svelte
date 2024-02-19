<script>
  import Menu from "$lib/widgets/Menu.svelte";
  import Tabs from "$lib/widgets/Tabs.svelte";
  import { page } from "$app/stores";
  import IconTextBanner from "$lib/widgets/Icon-Text-Banner.svelte";
  import MenuContainer from "$lib/widgets/Menu-Container.svelte";
  import Form from "$lib/widgets/Form.svelte";
  import BannerImageBg from "$lib/widgets/Banner-Image-Bg.svelte";
  import ViewMenusAlternate from "$lib/homepage/View-Menus-Alternate.svelte";
  import { restaurantData } from "../lib/restaurantData";
  import { sliderTabs } from "$lib/data";
  import FullBannerCenterText from "$lib/widgets/Full-Banner-Center-Text.svelte";
  import BannerCheckOutBg from "$lib/widgets/Banner-checkOut-Bg.svelte";

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

  // $: pageData[0] = pageData[0]

  // $: slug, (() => {
  //     console.log("slug updated:" + slug)
  // })
  let current_data;
  // $: pageData,  (()=>{
  // // and here you do the update (its like watch in vuejs)
  // // document.title = `Page ${data.title}`;
  // current_data = pageData;
  // })();

  // $: pageData = pageData
  // $: pageData2 = pageData

  data = restaurantData[3];

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

<FullBannerCenterText h1={"The Kettlee's Cafe"} backgroundImageUrl={"/location/kettlee-banner.jpg"} p={data.description} />

<IconTextBanner
  heading="So much more than just a cafe"
  paragraphs={[
    "Kettle'e was started by the talented team of foodies at Kabab & Curry to expand their culinary horizons with medleys of South Asian and World cuisine.",
    "Located in a picturesque setting, the café has become a mainstay in the Santa Clara area and has grown a unique fan following.",
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
  <Form />
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

<ViewMenusAlternate />

<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";

  .award-header {
    text-align: center;
    background-color: $dark-grey-light;
    color: $white;
    padding: 30px 0;
  }
</style>
