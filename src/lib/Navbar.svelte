<script>
  import { navbarArray } from "$lib/data.js";
  const logoUrl = "/kettlee.png";
  const logoSmallUrl = "/logo.png";
  const logoAlt = "Kebab and Curry";

  let tooltipText = "Coming Soon";
  let isActive = false;
  function navToggle(e) {
    // console.log(e.target.innerHtml)
    console.log(e);

    if (e.target.innerText === "CUPERTINO" || e.target.innerText === "MCA" || e.target.innerText === "SANTA CLARA" || e.target.innerText === "KETLEE") {
      console.log("yes");
      isActive = false;
    } else if (e.target.innerText !== "LOCATIONS") {
      isActive = !isActive;
    }

    // if() {
    //     isActive = !isActive

    // }
  }
</script>

<div class="container">
  <div class="gold-banner">
    <!-- <p>
      <a class="gold-banner-link" href="tel:408-247-0745">408-247-0745</a> -->
    <!-- ·  -->

    <!-- <a class="gold-banner-link" href="mailto:info@kebabandcurrys.com">info@kebabandcurrys.com</a> -->
    <!-- </p> -->
  </div>
  <nav>
    <div class="nav-container">
      <div class="logo-container">
        <a href="/">
          <!-- <img class="logo" src={"/logo-text.png"} alt={logoAlt} /> -->
          <img class="logo" src={"/kettlee.png"} alt={logoAlt} />
          <img class="logo-small" src={logoSmallUrl} alt={logoAlt} />
          <!-- <img class="logo-small" src={logoSmallUrl} alt={logoAlt} /> -->
        </a>
      </div>

      <ul class="nav-links {isActive ? 'nav-active' : ''}">
        {#each navbarArray as navItem, index}
          <li
            class={`
            ${navItem.label === "Locations" ? "dropdown" : ""}
            ${index === navbarArray.length - 1 ? "last-item" : null}
          `}
            style="animation: navlinkFade 1.5s ease forwards {index / 7 + 2.8}s"
            on:click={navToggle}
          >
            <a href={navItem.url} class={navItem.label === "Locations" ? "dropbtn" : ""}>{navItem.label}</a>
            <div class="dropdown-content">
              <a href="https://www.kababandcurrys.com/locations/SantaClara">Santa Clara</a>
              <a href="https://www.kababandcurrys.com/locations/Cupertino">Cupertino</a>
              <a href="https://www.kababandcurrys.com/locations/MCA">MCA</a>
              <a href="/" on:click={navToggle}>Kettle'e</a>
              <!-- Added href and on:click attribute -->
              <!-- <a href="https://kababandcurrys.com/locations/SantaClara" on:click={navToggle}>Santa Clara</a>
              <a href="https://kababandcurrys.com/locations/Cupertino" on:click={navToggle}>Cupertino</a>
              <a href="https://kababandcurrys.com/locations/MCA" on:click={navToggle}>MCA</a>
              <a href="/menu" on:click={navToggle}>Kettle'e</a> -->
            </div>
          </li>
        {/each}
      </ul>
      <div class="burger" on:click={navToggle}>
        <div class="" />
        <div class="" />
        <div class="" />
      </div>
    </div>
  </nav>
</div>

<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";

  .container {
    position: fixed;
    z-index: 101;
    top: 0%;
    width: 100vw;
  }

  @media screen and (max-width: 1430px) {
    .logo {
      display: none;
    }
    .logo-small {
      display: block;
    }
  }

  @media screen and (min-width: 1431px) {
    .logo {
      display: block;
    }
    .logo-small {
      display: none;
    }
  }

  .logo {
    height: 54px;
    // height: 50px;
    // width: 100%;
    margin-top: -4px;

    // @include for-size(phone-only) {
    //     display: none;
    // }
    // @include for-size(tablet-portrait-up) {
    //     display: block;
    // }
  }

  .logo-small {
    height: 50px;
    width: 50px;

    margin-top: -2px;
    @include for-size(phone-only) {
      height: 43px;
      width: 43px;
      margin-top: -2px;
    }
    //     @include for-size(tablet-portrait-up) {
    //         display: none;
    //     }
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 50px;
    background-color: #131e27;
    padding-left: 4px;
    padding-top: 2px;
    padding-right: 45px;

    @include for-size(phone-only) {
      padding-left: 10px;
      padding-top: 1px;
      padding-right: 10px;
    }
    @include for-size(tablet-portrait-up) {
      width: 100%;
    }
  }

  nav {
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8vh;
    background-color: $black;
    width: 100%;
    flex-wrap: wrap;
    padding: 5px 30px;
    // border-bottom: 1px solid #555;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  }

  .nav-links {
    display: flex;
    width: 30%;
    justify-content: space-around;
    align-items: center;
    @include for-size(phone-only) {
    }

    @include for-size(tablet-landscape-down) {
      position: absolute;
      right: 0;
      height: 92vh;
      top: 8.2vh;
      background-color: #000;
      flex-direction: column;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      // background-color: $primary;
      width: 100%;
      padding-left: 0;
    }

    @include for-size(phone-only) {
      top: 8vh;
    }

    @include for-size(tablet-landscape-up) {
      // width: 90%;
      // margin-right: 20px;
    }
    @include for-size(desktop-up) {
      width: 85%;
    }
    @include for-size(mid-desktop-up) {
      width: 70%;
    }
  }

  .nav-links a {
    color: #eeba28;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-style: normal;
    // font-weight: 400;
    font-size: 17px;
    text-transform: uppercase;
    // font-family: "Open Sans";
    line-height: 19px;
    @include for-size(tablet-landscape-down) {
      color: $gold;
    }
  }

  .nav-links a:hover {
    text-decoration: none;
  }

  .nav-links li {
    list-style-type: none;
  }

  .nav-links li:last-child {
    // background-color: #ccc !important;
    margin-right: 20px;
    // cursor: not-allowed !important;
    // pointer-events: none;
    cursor: pointer !important;

    @include for-size(tablet-landscape-down) {
      // background-color: $gold;
      margin-right: 0;
    }
  }

  .nav-links li:last-child:hover {
    transition: all 0.2s ease-in;
    cursor: not-allowed;
    // cursor: pointer;

    @include for-size(tablet-landscape-down) {
      color: $white;
    }
  }

  .nav-links li:last-child:hover a {
    color: $white;
    transition: all 0.2s ease-in;
    background-color: $gold;
    cursor: pointer;
  }

  .nav-links li:last-child a {
    color: #000;
    padding: 2px 12px;

    // border: solid 1px $gold;
    // background-color: $gold;
    background-color: #eeba28 !important;
    // filter: brightness(0.8);
    border-radius: 50px;
    font-size: 18px;
    letter-spacing: 1px;
    // line-height: 19px;
    text-transform: uppercase;
    font-weight: bold;
    font-style: normal;
    // font-family: "Open Sans";
    // cursor: not-allowed !important;
    cursor: pointer !important;
    z-index: 99999999;
    @include for-size(tablet-landscape-down) {
      color: $white;
      border: solid 1px $white;
    }
  }
  .burger {
    cursor: pointer;
    margin-right: 60px;

    @include for-size(phone-only) {
      width: 25px;
      margin-right: 60px;
    }

    @include for-size(tablet-landscape-down) {
      width: 25px;
      margin-right: 60px;
      // margin-right: 200px;
      display: block;
    }
    @include for-size(desktop-up) {
      width: 100%;
      display: none;
    }
  }
  .burger div {
    width: 25px;
    height: 2px;
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

  .dropbtn {
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
    z-index: 1;

    @include for-size(tablet-portrait-down) {
      // display: block;
    }
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

  .dropdown:hover .dropbtn {
  }

  .gold-banner {
    width: 100%;
    z-index: 101;
    height: 6px;
    background-color: #eeba28;
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
  .dropdown-content-menu {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
    @include for-size(tablet-landscape-down) {
      margin-left: 45%;
    }
    /* margin-left: 45%; */
  }

  .dropdown-content-menu a {
    color: #252827 !important;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content-menu a:hover {
    background-color: #ddd;
  }
  .dropdown-menu:hover .dropdown-content-menu {
    display: block;
  }
  .last-item a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 164px;
    height: 43px;
    border-radius: 22px;
    background-color: #ccc;
    // background-color: #ba9c56;
    color: black !important;
    cursor: pointer;
    @include for-size(desktop-up) {
      margin-right: 10px;
    }
  }
  /**

@include for-size(small-phone-only) {

}

@include for-size(large-mobile-up) {

}

@include for-size(tablet-portrait-up) {

}

@include for-size(tablet-landscape-up) {

}

@include for-size(desktop-up) {

}

@include for-size(big-desktop-up) {

}
<!-- <li
            class={`
            ${navItem.label === "Locations" ? "dropdown" : navItem.label === "Menu" ? "dropdown-menu" : ""}
            ${index === navbarArray.length - 1 ? "last-item" : null}
          `}
            title={navItem.label === "Order Now" ? tooltipText : ""}
            style="animation: navlinkFade 1.5s ease forwards {index / 7 + 2.8}s"
            on:click={navToggle}
          >
            <a href={navItem.url} class={navItem.label === "Locations" ? "dropbtn" : navItem.label === "Menu" ? "dropbtn-menu" : ""}>{navItem.label}</a>
            <div class="dropdown-content">
              <a>Santa Clara</a>
              <a>Cupertino</a>
              <a>MCA</a>
              <a href="/menu" on:click={navToggle}>Kettle'e</a>
              <a href="https://kababandcurrys.com/locations/SantaClara" on:click={navToggle}>Santa Clara</a>
              <a href="https://kababandcurrys.com/locations/Cupertino" on:click={navToggle}>Cupertino</a>
              <a href="https://kababandcurrys.com/locations/MCA" on:click={navToggle}>MCA</a>
              <a href="/menu" on:click={navToggle}>Kettle'e</a> -->
            <!-- </div>
            <div class="dropdown-content-menu">
              <a href="/menu/SantaClara" on:click={navToggle}>Santa Clara</a>
              <a>Cupertino</a>
              <a>MCA</a>
              <a>Kettle'e</a>
            </div>
          </li>  -->
    
    **/
</style>
