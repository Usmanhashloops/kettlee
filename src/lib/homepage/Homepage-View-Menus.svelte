<script>
  import RectangularButton from "$lib/widgets/Rectangular-Button.svelte";

  export let menus = [
    {
      label: "K&K Santa Clara",
      url: "/locations/SantaClara",
    },
    {
      label: "K&K Cupertino",
      url: "/locations/Cupertino",
    },
    {
      label: "K&K MCA",
      url: "/locations/MCA",
    },
    {
      label: "Kettle'e Cafe",
      url: "/locations/Ketlee",
    },
  ];

  const header = "View Our Menus";
</script>

<div class="view-menu-container">
  <h2 class="header">{header}</h2>

  <div class="menus">
    {#each menus as menu, index}
      <div class="menu">
        <RectangularButton buttonText="{menu.label}," buttonUrl={menu.url} />
      </div>
      {#if index != 3}
        <hr class="separator" />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .view-menu-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    background-color: $dark-grey;
    padding: 30px 0;
  }

  .header {
    color: $white;
    text-align: center;
    margin-bottom: 20px;
  }

  .menus {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    align-items: center;

    @include for-size(tablet-landscape-down) {
    }
  }

  .menu:nth-child(n + 1) {
    @include for-size(tablet-landscape-down) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }

  .separator {
    height: 60px;
    width: 0.5px;
    background-color: #cacaca;
    opacity: 0.5;

    @include for-size(tablet-landscape-down) {
      display: none;
    }
  }
</style>
