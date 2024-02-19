<script>
  import RectangularButton from "$lib/widgets/Rectangular-Button.svelte";

  export let menus = [
    {
      label: "Kabab and Currys Santa Clara",
      url: "https://www.kababandcurrys.com/locations/SantaClara",
      address: "1498 Isabella St Santa Clara, CA 95050",
      phone: "(408) 247-0745",
    },
    {
      label: "Kabab and Currys Cupertino",
      url: "https://www.kababandcurrys.com/locations/Cupertino",
      address: "20007 Stevens Creek Blvd, Cupertino, CA 95014",
      phone: "(408) 876-0448",
    },
    {
      label: "Kabab and Currys MCA",
      url: "https://www.kababandcurrys.com/locations/MCA",
      address: "3003 Scott Blvd, Santa Clara, CA 95054",
      phone: "(408) 247-0745",
    },
    {
      label: "Kettle'e Cafe",
      url: "/menu",
      address: "1610 E El Camino Real, Santa Clara, CA 95050",
      phone: "(408) 216-0890",
    },
  ];

  const header = "Our Restaurants";
</script>

<!-- <div class="view-menu-container">
  <h2 class="header">{header}</h2>

  <div class="menus">
    {#each menus as menu, index}
      <div class="menu">
        <h4 class="label">{menu.label}</h4>
        <p class="address">{menu.address}</p>
        <p class="phone">{menu.phone}</p>
        <RectangularButton buttonText="View Menu" , buttonUrl={menu.url} />
      </div>
      {#if index != 3}
        <hr class="separator" />
      {/if}
    {/each}
  </div>
</div> -->
<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .view-menu-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    background-color: $cream;
    padding: 30px 0;
  }

  .header {
    color: $gold;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 400;
  }

  .menus {
    display: flex;
    justify-content: center;
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
      margin-bottom: 50px;
    }
  }

  .separator {
    position: relative;
    align-self: flex-start;
    height: 90px;
    width: 0.5px;
    background-color: #cacaca;
    opacity: 0.5;

    @include for-size(tablet-landscape-down) {
      display: none;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    flex: 0 1 20%;
    // justify-content: space-between;
    height: 300px;
    align-items: center;

    @include for-size(tablet-portrait-down) {
      flex: 0 1 45%;
    }
  }
  .label,
  .address,
  .phone {
    color: $gold;
    // margin-bottom: 20px;
    text-align: center;
  }

  .label {
    font-weight: 600;
    font-size: 22px;
    // min-height: 71px;
    min-height: 71px;

    @include for-size(tablet-portrait-down) {
      min-height: 91px;
    }
  }

  .address,
  .phone {
    font-size: 20px;
    font-weight: 400;
  }
</style>
