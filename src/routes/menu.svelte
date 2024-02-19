<script context="module">
  import { restaurantData } from "$lib/restaurantData.js";
  const MyImage = "/imageMy.png";
  const floralBackground = "/floralback.png";
  export async function load({ params }) {
    console.log("params", params);
    let slug = params.menu;
    let data = restaurantData.find((e) => e.slug === "Kettlee");
    return { props: { data } };
  }
  let currentPathname = "";
  if (typeof window !== "undefined") {
    currentPathname = window.location.pathname;
  }
</script>

<script>
  import Menu from "$lib/widgets/Menu.svelte";
  import { onMount } from "svelte";
  export let data;
  // console.log("data", data);
  export let slug;
  let active = "";
  onMount(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active = entry.target.id;
      });
    }, options);
    data.menu.forEach((menu) => {
      const target = document.getElementById(menu.category);
      observer.observe(target);
    });
  });
  let isActive = false;
  function navToggle(e) {
    isActive = !isActive;
  }
  function scrollToSection(item) {
    active = item;
    const section = document.getElementById(item);
    const yOffset = -10;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y - 157, behavior: "smooth" });
  }
  console.log("slug", slug);
</script>

<div class="menu-container">
  <div class="container">
    <div>
      <nav class="nav-top">
        <ul style="overflow-y: auto;" class="nav-links nav-links-new {isActive ? 'nav-active' : ''}">
          {#each data.menu as menu, index}
            <li class="paddingLeft" style="animation: navlinkFade 1.5s ease forwards {index / 7 + 2.8}s" on:click={navToggle}>
              <a class="{active === menu.category ? 'active' : ''} {index === 0 ? 'first' : ''} {index === data.menu.length - 1 ? 'last' : ''}" on:click={() => scrollToSection(menu.category)}>
                {menu.category}
              </a>
            </li>
          {/each}
        </ul>
        <div>
          <button class="floating-button" on:click={navToggle} type="button">menu </button>
        </div>
      </nav>
    </div>
    <h2 class="heading">From Our Menu</h2>
    <div class="flex-icon-Dine">
      <!-- <img src={"/location/cutlery.png"} class="cutleryImage" />
      <div class="DineInHeading">Dine In</div>
      <img src={"/location/deliveryCourier.png"} class="deliveryCourierImage" />
      <div class="DineInHeading">To Go</div> -->
    </div>

    {#each data.menu as menu}
      <div class="img-container" id={menu.category}>
        <div class="menu-img-border" />
        <img class="menu-image-main" src={menu.src} alt="Not found" style="width: 100%; height: 245px;object-fit:cover" />
        <div class="centered">{menu.category}</div>
      </div>
      <div class="menu-items-background">
        <Menu {data} itemList={menu.items} />
      </div>
    {/each}
  </div>
</div>

<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";
  .img-container {
    position: relative;
  }
  .menu-container {
    position: relative;
  }
  .nav-top {
    position: fixed;
    top: 57px;
    @media only screen and (min-width: 1200px) and (max-width: 1300px) {
      top: 50px;
    }
    @media only screen and (min-width: 1300px) and (max-width: 1400px) {
      top: 52px !important;
    }
    @media only screen and (min-width: 1401px) and (max-width: 1600px) {
      top: 55px;
    }
    @media only screen and (min-width: 1601px) and (max-width: 1800px) {
      top: 69px;
    }
    @media only screen and (min-width: 1801px) and (max-width: 2200px) {
      top: 72px;
    }
  }
  .paddingLeft {
    padding: 4px 18px !important;
  }
  .flex-icon-Dine {
    display: flex;
    justify-content: center;
    margin-bottom: 21px;
  }
  .DineInHeading {
    font-size: 15px;
    margin-left: 8px;
    margin-right: 33px;
    color: #000000;
    font-weight: 400;
    font-family: "Open Sans";
  }
  .deliveryCourierImage {
    height: 20px;
    width: 28px;
  }
  .cutleryImage {
    height: 20px;
    width: 20px;
  }
  .menu-imageMy-border {
    position: absolute;
    height: 220px !important;
    width: 92%;
    border: 4px solid #f5f5f5;
    left: 10%;
    top: 8%;
    left: 57px;
    @include for-size(phone-only) {
      display: none;
    }
    @include for-size(tablet-portrait-up) {
      display: none;
    }
    @include for-size(desktop-up) {
      display: block;
    }
  }

  .menu-img-border {
    position: absolute;
    height: 198px !important;
    width: 92%;
    border: 4px solid #f5f5f5;
    left: 10%;
    top: 8%;
    left: 57px;
    @include for-size(phone-only) {
      display: none;
    }
    @include for-size(tablet-portrait-up) {
      display: none;
    }
    @include for-size(desktop-up) {
      display: block;
    }
  }
  .menu-items-background {
    margin-top: -4px;
    background-color: #131e27; /* a light yellow color with 50% opacity */
    background-image: url("/floralback.png");
    background-size: contain;
    @include for-size(phone-only) {
      background-size: inherit;
    }
    @include for-size(tablet-portrait-up) {
      background-size: contain;
    }
  }
  .floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ba9d56; /* use your preferred color */
    color: black; /* use a contrasting color */
    border: none;
    border-radius: 30px;
    padding: 14px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* add shadow for depth */
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.2s ease-in-out;
    @include for-size(phone-only) {
      font-size: 14px;
      padding: 10px;
    }
    @include for-size(tablet-portrait-up) {
      font-size: 15px;
      padding: 12px;
    }
  }
  .floating-button:hover {
    transform: scale(1.1);
    background-color: #b48c27;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }

  .heading {
    font-size: 60px;
    font-weight: 400;
    color: $gold;
    line-height: 75px;
    color: #eeba28;
    font-family: "Josefin Sans";
    text-align: center;
    margin-bottom: -2px;
    padding-top: 27px !important;
    @include for-size(phone-only) {
      font-size: 40px;
      margin-top: 68px;
    }
    @include for-size(tablet-portrait-up) {
      margin-top: 68px;
      font-size: 50px;
    }
    @media only screen and (min-width: 1201px) and (max-width: 1300px) {
      margin-top: 155px !important;
    }
    @media only screen and (min-width: 1301px) and (max-width: 1440px) {
      margin-top: 158px !important;
    }
    @include for-size(desktop-up) {
      margin-top: 135px;
    }
    @media only screen and (min-width: 1600px) and (max-width: 2200px) {
      margin-top: 153px;
    }
  }
  .active {
    font-weight: 700 !important;
    border-bottom: 2px solid #ba9d56 !important;
  }
  .img-container {
    position: relative;
    text-align: center;
    width: 100%;
  }
  #overlayImage {
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    cursor: pointer;
  }
  .img-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    mix-blend-mode: multiply;
    opacity: 0.2 !important;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 34px;
    font-weight: 300;
    color: #fff !important;
    letter-spacing: 3px;
    text-transform: uppercase;
    @include for-size(phone-only) {
      font-size: 24px;
    }
  }
  .container {
    position: relative;
    text-align: center;
    width: 100%;
    background-color: #fff;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    @include for-size(tablet-portrait-up) {
      width: 100%;
    }
  }
  nav {
    z-index: 100;
  }
  @media only screen and (min-width: 280px) and (max-width: 1200px) {
    nav {
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $black;
      width: 100%;
      flex-wrap: wrap;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
      margin-top: 1px;
    }
  }
  .nav-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #131e27;
    flex-wrap: wrap;
    top: 60px !important;
    width: 101%;
    margin-bottom: -50px;
    min-height: 60px;
    opacity: 0.9;
    margin-left: -44px !important;
    padding-bottom: 2px;

    @include for-size(phone-only) {
      top: 5vh !important;
      display: initial;
      .nav-links::-webkit-scrollbar {
        display: none;
      }
    }

    @include for-size(tablet-landscape-down) {
      background-color: black;
      position: absolute;
      right: 0px;
      display: initial;
      height: 100vh;
      opacity: 1;
      top: -1vh !important;
      flex-direction: column;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      width: 100%;
      padding-left: 0;
      .nav-links::-webkit-scrollbar {
        display: none;
      }
      padding-top: 50px;
    }

    @include for-size(phone-only) {
      top: -1vh !important;
      height: 90vh;
      margin-top: initial;
      padding-top: 50px;
    }
    @include for-size(desktop-up) {
      width: 101%;
      margin-bottom: -50px;
      opacity: 0.8;
      margin-left: -44px !important;
    }
  }

  .nav-links a {
    cursor: pointer;
    color: $gold;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 15px;
    text-transform: uppercase;

    @include for-size(tablet-landscape-down) {
      color: $gold;
    }
    @include for-size(phone-only) {
      font-size: 11px;
    }
  }

  .nav-links a:hover {
    text-decoration: none;
  }

  .nav-links li {
    list-style-type: none;
    @include for-size(tablet-landscape-down) {
      min-height: 15vh;
    }
  }

  .floating-button {
    cursor: pointer;
    display: block;
    @include for-size(phone-only) {
      display: block;
    }

    @include for-size(tablet-landscape-down) {
      display: block;
    }
    @include for-size(desktop-up) {
      width: 100%;
      display: none;
    }
  }
  .nav_container {
    @include for-size(phone-only) {
      background-color: none !important;
    }
    @include for-size(tablet-landscape-down) {
      background-color: none !important;
    }
  }
  .burger div {
    width: 30px;
    height: 30px;
    margin: 5px;
    background-color: #fff;

    @include for-size(phone-only) {
      display: block;
    }

    @include for-size(tablet-portrait-up) {
      display: block;
    }

    @include for-size(tablet-landscape-down) {
      display: block;
    }

    @include for-size(desktop-up) {
      display: none;
    }
  }

  .nav-active {
    transform: translateX(-1px);
    top: 60px;
  }

  @keyframes navlinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  .dropdown-content a {
    color: $dark-grey;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .gold-banner {
    width: 100%;
    z-index: 101;
    background-color: $gold;
    color: black;
    font-weight: 300;
    display: flex;
    justify-content: center;
  }

  .gold-banner-link {
    text-decoration: none !important;
    font-weight: 300;
    font-size: 15px;
    color: #000;
  }
</style>
