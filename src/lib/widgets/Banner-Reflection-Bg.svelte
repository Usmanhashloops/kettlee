<script>
  export let imagess = "";
  export let image1 = "";
  export let image2 = "";
  export let image3 = "";
  export let image4 = "";
  export let image5 = "";
  export let visible = false;
  console.log("visible", visible);
  import Modal, { getModal } from "./Modal.svelte";
  let images = [imagess, image1, image2, image3, image4, image5];
  let currentIndex = 0;
  function next() {
    if (currentIndex < images.length - 1) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = images.length - 1;
    }
  }
  function reStartSlider() {
    console.log("restarting slider");
  }
  function stopSlider(index) {
    currentIndex = index;
    console.log("Clicked image index:", index);
    getModal().open();
  }
</script>

<div class="container">
  <div class="flavour-container">
    <div class="Reflection">Reflections</div>
    <div class="image-reflection-flex">
      {#each images as image, index}
        <div class="image-container">
          <img src={image} class="image-height-reflection" on:click={() => stopSlider(index)} />
        </div>
      {/each}
    </div>
  </div>
</div>
<Modal {reStartSlider}>
  <button class={`prev-iconmodal ${currentIndex === -1 && "disabled-btn"}`} on:click={prev} disabled={currentIndex === -1}>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 29" class="HeightWidth-svgIcon"
      ><style>
        .a {
          fill: #000;
        }
        .a.disbaled {
          fill: gray;
        }
      </style>
      <path class={currentIndex === 0 ? "a disbaled" : "a"} d="m2.5 0.8l25.4 25.5-2.1 2.1-25.4-25.5z" />
      <path class={currentIndex === 0 ? "a disbaled" : "a"} d="m51.3 2.2l-25.5 25.5-2.1-2.1 25.5-25.5z" />
    </svg>
  </button>
  <img src={images[currentIndex]} alt="Slider image" class="image-height" />
  <button class={`next-iconmodal ${currentIndex === images.length + 1 && "disabled-btn"}`} on:click={next} disabled={currentIndex === images.length + 1}>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 29" class="HeightWidth-svgIcon"
      ><style>
        .a {
          fill: #000;
        }
        .a.disbaled {
          fill: gray;
        }
      </style>
      <path class={images.length - 1 === currentIndex ? "a disbaled" : "a"} d="m2.5 0.8l25.4 25.5-2.1 2.1-25.4-25.5z" />
      <path class={images.length - 1 === currentIndex ? "a disbaled" : "a"} d="m51.3 2.2l-25.5 25.5-2.1-2.1 25.5-25.5z" />
    </svg>
  </button>
</Modal>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";
  @media only screen and (min-width: 900px) and (max-width: 1023px) {
    .image-container {
      flex: 0 0 calc(33.33% - 20px);
      margin: 4px;
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1300px) {
    .image-container {
      flex: 2 0 calc(25.33% - 20px);
      margin: 1px;
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1301px) and (max-width: 2500px) {
    .image-container {
      flex: 0 0 calc(33.33% - 20px);
      margin: 10px;
      display: flex;
      justify-content: center;
    }
  }

  .container {
    // width: 100vw;
    width: 100%;
    min-height: 760px;
    margin-top: -40px;
    background-color: #131e27;
    // padding-bottom: 30px !important;
  }
  .flavour-container {
    padding-left: 140px;
    padding-right: 140px;
    padding-top: 55px;
    padding-bottom: 35px !important;
    @include for-size(phone-only) {
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 20px;
    }
    @media only screen and (min-width: 550px) and (max-width: 1100px) {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 30px;
      padding-bottom: 30px !important;
    }
    @media only screen and (min-width: 1101px) and (max-width: 1300px) {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 30px;
      padding-bottom: 30px !important;
    }
    @media only screen and (min-width: 1301px) and (max-width: 1400px) {
      padding-left: 25px;
      padding-right: 25px;
      padding-top: 30px;
      padding-bottom: 30px !important;
    }
  }
  .Reflection {
    font-size: 73px;
    text-transform: uppercase;
    color: #eeba28;
    font-weight: 800;
    text-align: center;
    @include for-size(phone-only) {
      font-size: 30px;
    }
  }
  .image-height-reflection {
    height: 275px;
    width: 350px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 80px;
    @include for-size(phone-only) {
      height: 260px !important;
      width: 100% !important;
      margin-bottom: 30px;
    }

    @media only screen and (min-width: 1000px) and (max-width: 1100px) {
      width: 310px;
    }
  }
  .image-reflection-flex {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 68px;
    @media only screen and (min-width: 300px) and (max-width: 600px) {
      display: block !important;
      gap: 20px;
    }
    @media only screen and (min-width: 1001px) and (max-width: 1600px) {
      // gap: 20px;
    }
  }

  ///////
  /////Modal
  //////
  .slider-container {
    min-height: 550px;
    background-color: #f7f7f7;
    padding-top: 10px;
    padding-bottom: 30px;
    @include for-size(phone-only) {
      min-height: 300px;
    }
    @include for-size(tablet-portrait-down) {
      min-height: 340px;
    }
  }
  .image-height {
    height: 400px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    @include for-size(phone-only) {
      width: 180px !important;
      height: 250px !important;
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
      width: 250px !important;
      height: 350px !important;
    }
    @media only screen and (min-width: 769px) and (max-width: 950px) {
      width: 350px !important;
      height: 350px !important;
    }
    @include for-size(tablet-portrait-up) {
      width: 400px;
      height: 350px;
    }
    @include for-size(desktop-up) {
      width: 590px;
      height: 400px;
    }
    @media only screen and (min-width: 1900px) and (max-width: 2560px) {
      width: 595px !important;
      height: 500px !important;
    }
  }
  .svgIconHeightWidth {
    height: 45px;
    width: 45px;
    @include for-size(phone-only) {
      height: 25px;
      width: 25px;
    }
    @include for-size(tablet-portrait-down) {
      height: 30px;
      width: 30px;
    }
    @include for-size(tablet-portrait-up) {
      height: 35px;
      width: 35px;
    }
  }
  .HeightWidth-svgIcon {
    height: 20px;
    width: 20px;
    margin-top: 8px !important;
    margin-left: -1px;
  }
  .title {
    font-size: 55px !important;
    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: bold;
    color: #eeba28;
    // font-family: "Parisienne" !important;
    text-align: center;
    @include for-size(phone-only) {
      font-size: 40px !important;
    }
    @include for-size(tablet-portrait-down) {
      font-size: 47px !important;
    }
  }

  .image-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    transition: transform 0.5s ease-out;
    @include for-size(phone-only) {
      gap: 10px;
    }
  }
  .image-slider img {
    // width: 590px;
    // height: 400px;
    border: 4px solid lightgray;
    border-radius: 5px;
    object-fit: fill !important;
    cursor: pointer;
    @include for-size(phone-only) {
      width: 100px !important;
      height: 150px !important;
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
      width: 200px !important;
      height: 200px !important;
    }
    @media only screen and (min-width: 769px) and (max-width: 950px) {
      width: 300px !important;
      height: 300px !important;
    }
    @include for-size(tablet-portrait-up) {
      width: 400px;
      height: 350px;
    }
    @include for-size(desktop-up) {
      width: 590px;
      height: 420px;
    }
    @media only screen and (min-width: 1900px) and (max-width: 2560px) {
      width: 595px !important;
      height: 520px !important;
    }
  }

  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .prev-icon {
    transform: rotate(90deg);
    background: none;
    border: none;
    cursor: pointer;
  }
  .prev-iconmodal {
    transform: rotate(90deg);
    // background: none;
    border: none;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: -35%;
    @include for-size(phone-only) {
      height: 50px;
      width: 50px;
      left: -30%;
    }
  }
  .prev-iconmodal:hover {
    background: rgb(149, 147, 147);
  }
  .next-icon {
    transform: rotate(270deg);
    background: none;
    border: none;
    cursor: pointer;
  }
  .next-iconmodal {
    transform: rotate(270deg);
    // background: none;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    height: 60px;
    width: 60px;
    right: -35%;
    @include for-size(phone-only) {
      height: 50px;
      width: 50px;
      right: -30%;
    }
  }
  .next-iconmodal:hover {
    background: rgb(149, 147, 147);
  }
  .diabled-btn {
    cursor: default;
  }
</style>
