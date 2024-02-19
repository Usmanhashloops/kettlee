<script>
  import FullBanner from "$lib/widgets/Full-Banner.svelte";
  import LeftRightSection from "$lib/widgets/Left-Right-Section.svelte";
  import CateringSection from "$lib/Catering-Section.svelte";
  import SliderTabs from "$lib/Slider-Tabs.svelte";
  import SliderGallery from "$lib/Slider-Gallery.svelte";
  import { kncImages, sliderTabs, galleryImages, awardImages, infoArray } from "$lib/data";
  import PlainGallery from "$lib/widgets/Plain-Gallery.svelte";
  import HomepageViewMenus from "$lib/homepage/Homepage-View-Menus.svelte";
  import HomepageBannerAlt from "$lib/homepage/Homepage-Banner-Alt.svelte";
  import FullBannerCenterText from "$lib/widgets/Full-Banner-Center-Text.svelte";
  import IconTextBanner from "$lib/widgets/Icon-Text-Banner.svelte";
  import BannerImageBg from "$lib/widgets/Banner-Image-Bg.svelte";
  import ViewMenusAlternate from "$lib/homepage/View-Menus-Alternate.svelte";
  let activeItem = sliderTabs[0].label;
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const title = "ABOUT" + "\n" + "KETTLE'E";
  const imageUrl = "/about/about-us.jpg";
</script>

<!-- <FullBanner 
    h1 = {"An authentic Desi dining experience"}
    p = {"We have been creating culinary memories since the 1990s"}
    ctaText = {"Yeah"}
    ctaUrl = {""}
    backgroundImageUrl = {"/about/banner.jpg"}

/>

<LeftRightSection />

{#each infoArray as info}
	<HomepageBannerAlt
	h1={info.title}
	p={info.paragraph}
	isImageFirst={info.imageFirst}
	isH1 = {false}
	hasCta = {false}
	--backgroundImageUrl = "url({info.imgUrl})"
	
/>
{/each}

<h2 class="award-header">Award-Winning Dining Experience</h2>
<PlainGallery
    	images = {awardImages}
		numberOfColumns = {4}
		gridWidth={"90%"}
/>

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

<FullBannerCenterText h1={title} backgroundImageUrl={imageUrl} p={"data.description"} />

<IconTextBanner
  heading="Where it all started"
  paragraphs={[
    "Starting from the humble roots of Kabab and Curry in Santa Clara, Kettle'e was started as a unique café dining experience, bringing South Asian culinary flavors to the contemporary western café scene of the Bay Area.",
    "Our restaurants have caught the attention of the patrons of the Bay Area as well as critics. We've become mainstays in the area, and the preferred dining spot for South Asian culinary delights.",
    "Over the last decade our restaurants have witnessed a fast expansion, including new branches for Kabab and Curry at the MCA Mosque in Santa Clara, and a modern dining experience in Cupertino. Our bold flavors have wowed our patrons and the first stop for culinary adventurists.",
  ]}
/>

<BannerImageBg heading="Award-Winning Dining Experience" paragraph="Our restaurants have consistently been rated, reviewed and awarded for our culinary creativity and cozy ambiance." />

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
