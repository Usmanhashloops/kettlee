<script context="module" lang="ts">
  let onTop;
  const modals = {};
  export function getModal(id = "") {
    return modals[id];
  }
</script>

<script lang="ts">
  import { onDestroy } from "svelte";

  let topDiv;
  let visible = false;
  let prevOnTop;
  let closeCallback;
  export let reStartSlider;

  export let id = "";

  function keyPress(ev) {
    if (ev.key == "Escape" && onTop == topDiv) close(); //ESC
  }

  /**  API **/
  function open(callback) {
    closeCallback = callback;
    if (visible) return;
    prevOnTop = onTop;
    onTop = topDiv;
    window.addEventListener("keydown", keyPress);
    document.body.style.overflow = "hidden";

    visible = true;
    document.body.appendChild(topDiv);
  }

  function close(retVal) {
    console.log("ssdadasdjasdjasd");
    reStartSlider();
    if (!visible) return;

    window.removeEventListener("keydown", keyPress);

    onTop = prevOnTop;

    if (onTop == null) document.body.style.overflow = "";
    visible = false;
    if (closeCallback) closeCallback(retVal);
  }

  //expose the API
  modals[id] = { open, close };

  onDestroy(() => {
    delete modals[id];
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", keyPress);
    }
  });
</script>

<div id="topModal" class:visible bind:this={topDiv} on:click={() => close()}>
  <div id="modal" on:click|stopPropagation={() => {}}>
    <svg id="close" on:click={() => close()} viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="6" />
      <line x1="3" y1="3" x2="9" y2="9" />
      <line x1="9" y1="3" x2="3" y2="9" />
    </svg>
    <div id="modal-content">
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";
  #topModal {
    visibility: hidden;
    z-index: 9999;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #modal {
    position: relative;
    border-radius: 6px;
    border-top-right-radius: 9px;
    background: white;
    filter: drop-shadow(5px 5px 5px #2d2c2c);
    padding: 0.3em;
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
  .visible {
    visibility: visible !important;
  }
  #close {
    position: absolute;
    top: -10px;
    right: -11px;
    width: 27px;
    height: 24px;
    cursor: pointer;
    background: none !important;
    fill: #999696;
    // transition: transform 0.3s;
  }
  // #close:hover {
  //   transform: scale(2);
  // }
  #close line {
    stroke: #fff;
    stroke-width: 1;
    background-color: #fff;
  }
  #modal-content {
    max-width: calc(100vw - 20px);
    max-height: calc(100vh - 20px);
    overflow: auto;
  }
</style>
