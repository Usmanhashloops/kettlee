<script>
  import Modal, { getModal } from "./Modal.svelte";
  let images = [
    "/location/imagesanta.png",
    "/location/MCA-Landscape.jpg",
    "/location/GeneralInside.png",
    "/chickenkarahi.jpg",
    "/location/Diversity.png",
    "/Beverages.jpg",
    "/location/MCA-Landscape.jpg",
    "/location/Layerexperience.png",
  ];
  import { onMount, onDestroy } from "svelte";
  let currentIndex = 0;
  let intervalId;
  function next() {
    if (currentIndex < images.length - 2) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
  }
  function prev() {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = images.length - 2;
    }
  }
  const autoMoveInterval = 4000;
  const modelVisible = false;
  onMount(() => {
    intervalId = setInterval(next, autoMoveInterval);
  });
  function reStartSlider() {
    clearInterval(intervalId);
    intervalId = setInterval(next, autoMoveInterval);
    console.log("re starting slider");
    next();
  }
  // onDestroy(() => {
  //   clearInterval(intervalId);
  // });
  function stopSlider() {
    clearInterval(intervalId);
    getModal().open();
  }
</script>

<!-- <div class="slider-container">
  <div class="title">Through the Looking Glass</div>
  <div class="image-slider">
    <button class={`prev-icon ${currentIndex === 0 && "disabled-btn"}`} on:click={prev} disabled={currentIndex === 0}>
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 29" class="svgIconHeightWidth"
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
    {#each [currentIndex, currentIndex + 1] as index (index)}
      {#if images[index]}
        <img src={images[index]} alt="Slider image" style="object-fit: fill;" on:click={stopSlider} />
      {/if}
    {/each}

    <button class={`next-icon ${images.length - 1 === currentIndex && "disabled-btn"}`} on:click={next} disabled={images.length - 1 === currentIndex}>
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 29" class="svgIconHeightWidth"
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
  </div>
</div> -->
<Modal {reStartSlider}>
  <button class={`prev-iconmodal ${currentIndex === 0 && "disabled-btn"}`} on:click={prev} disabled={currentIndex === 0}>
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
  <img src={images[currentIndex + 1]} alt="Slider image" class="image-height" />
  <button class={`next-iconmodal ${images.length - 1 === currentIndex && "disabled-btn"}`} on:click={next} disabled={images.length - 1 === currentIndex}>
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
    object-fit: fill;
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
