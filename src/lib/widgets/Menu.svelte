<!-- <script>
  export let itemList = [
   
  ];
  export let pageData;
</script>

<div class="section-container">
  {#if pageData}
    {#each itemList.slice(0, 6) as item, index}
      <div class="item" class:odd={index % 2 != 0}>
        <div class="item-content-container">
          <div class="flexCenter-Icon">
            <p class="item-title" style="text-align:center">{item.title}</p>
            {#if item.src}
              <img src={item.src} class="cutleryImage" />
            {:else}
              <div />
            {/if}
            {#if item.img}
              <img src={item.img} class="deliveryCourierImage" />
            {:else}
              <div />
            {/if}
          </div>
          <div class="details-container">
            <p class="item-description">{item.description}</p>
          </div>
          <p class="item-cost">{item.cost}</p>
        </div>
        <hr class="rule" />
      </div>
    {/each}
  {:else}
    {#each itemList as item, index}
      <div class="item" class:odd={index % 2 != 0}>
        <div class="item-content-container">
          <div class="flexCenter-Icon">
            <p class="item-title" style="text-align:center">{item.title}</p>
            {#if item.src}
              <img src={item.src} class="cutleryImage" />
            {:else}
              <div />
            {/if}
            {#if item.img}
              <img src={item.img} class="deliveryCourierImage" />
            {:else}
              <div />
            {/if}
          </div>
          <div class="details-container">
            <p class="item-description">{item.description}</p>
          </div>
          <p class="item-cost">{item.cost}</p>
        </div>
        <hr class="rule" />
      </div>
    {/each}
  {/if}
</div>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";
  .flexCenter-Icon {
    display: flex;
  }
  .section-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 0 107px 0;
    @include for-size(tablet-portrait-down) {
      justify-content: center;
    }
  }
  .rule {
    border: 1px solid #333 !important;
    width: 80%;
  }
  .item-content-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 200px;
  }
  .item {
    display: flex;
    flex-direction: column;
    flex: 0 1 35%;
    position: relative;
    margin-bottom: 20px;
    justify-content: space-between;
    @include for-size(tablet-portrait-down) {
      flex: 0 1 80%;
    }
    @include for-size(phone-only) {
      min-height: 300px;
    }
  }

  .item-title:nth-child(2) {
    color: red;
  }

  .details-container {
    display: flex;
    text-align: center;
  }
  .item-title {
    font-weight: 500;
    color: $gold;
    font-size: 25px;
  }
  .deliveryCourierImage {
    height: 20px;
    width: 28px;
    margin-top: 16px;
    margin-left: 15px;
  }
  .cutleryImage {
    height: 20px;
    width: 20px;
    margin-top: 15px;
    margin-left: 15px;
  }
  .item-description {
    color: $gold;
    font-size: 18px;
    padding-bottom: 67px;
    @include for-size(phone-only) {
      max-width: 92%;
      margin-left: 34px;
      padding-top: 12px;
    }
  }

  .item-cost {
    color: $gold;
    text-align: center;
    position: absolute;
    bottom: 25px;
    font-weight: 600;
    font-size: 20px;
    font-family: "Open Sans" !important;
  }

  .odd {
    margin-left: 40px;
    @include for-size(tablet-portrait-down) {
      margin-left: 0;
    }
  }
</style> -->
<script>
  export let itemList = [
    {
      title: "Chicken Tikka Masala",
      description: "Boneless pieces of chicken breast marinated in spices; baked over charcoal and then cooked in onion & tomato sauces along with cream. smooth texture. ",
      cost: "$10.99",
    },
    {
      title: "Butter Chicken",
      description: "Boneless pieces of chicken leg marinated in spices; baked over charcoal and then cooked in onion & tomato sauces along with cream for smooth texture. ",
      cost: "$10.99",
    },
    {
      title: "Chicken Korma",
      description: "More traditional curry using chicken meat with bones cooked in yogurt and onion gravy.",
      cost: "$9.99",
    },
    {
      title: "Chicken Karahi",
      description: "Chicken cooked in traditional pathan-style tomato sauce along with fresh bell peppers, tomatoes and onion. With final sauce with fresh chopped garlic.",
      cost: "$10.99",
    },
    {
      title: "Saag Chicken",
      description: "Spinach cooked with chicken given best of both worlds veg. and non-veg. ",
      cost: "$10.99",
    },
    {
      title: "Murgh Choley",
      description: "Garbanzo beans and chicken cooked using tomato and onion sauce.",
      cost: "$10.99",
    },
  ];
  export let pageData;
  export let slug;
  export let data;

  function capitalizeTextExceptLbs(match) {
    console.log("match", match);
    if (match.toLowerCase() === "lbs") {
      return match.toUpperCase();
    } else {
      return match.toUpperCase();
    }
  }

  // Perform the replacement using regular expressions
  // let modifiedText = data.replace(/\b\w+\b/g, capitalizeTextExceptLbs);
  // console.log("modifiedText ==>", modifiedText);
</script>

<!-- <script>
  export let itemList = [
    {
      title: 'Chicken Tikka Masala',
      description:
        'Boneless pieces of chicken breast marinated in spices; baked over charcoal and then cooked in onion & tomato sauces along with cream. smooth texture. ',
      cost: '$10.99',
    },
    {
      title: 'Butter Chicken',
      description:
        'Boneless pieces of chicken leg marinated in spices; baked over charcoal and then cooked in onion & tomato sauces along with cream for smooth texture. ',
      cost: '$10.99',
    },
    {
      title: 'Chicken Korma',
      description:
        'More traditional curry using chicken meat with bones cooked in yogurt and onion gravy.',
      cost: '$9.99',
    },
    {
      title: 'Chicken Karahi',
      description:
        'Chicken cooked in traditional pathan-style tomato sauce along with fresh bell peppers, tomatoes and onion. With final sauce with fresh chopped garlic.',
      cost: '$10.99',
    },
    {
      title: 'Saag Chicken',
      description:
        'Spinach cooked with chicken given best of both worlds veg. and non-veg. ',
      cost: '$10.99',
    },
    {
      title: 'Murgh Choley',
      description:
        'Garbanzo beans and chicken cooked using tomato and onion sauce.',
      cost: '$10.99',
    },
  ];
</script>

<div class="section-container">
  {#each itemList as item, index}
    <div class="item" class:odd={index % 2 != 0}>
      <p class="item-title">{item.title}</p>
      <div class="details-container">
        <p class="item-description">{item.description}</p>
        <p class="item-cost">{item.cost}</p>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../../styles/theme.scss';
  @import '../../styles/breakpoints.scss';

  .section-container {
    display: flex;
    background-color: inherit;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0;
    @include for-size(tablet-portrait-down) {
      justify-content: space-between;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    flex: 0 1 35%;
    position: relative;
    margin-bottom: 20px;
    @include for-size(tablet-portrait-down) {
      flex: 0 1 90%;
    }
  }

  .item-title:nth-child(2) {
    color: red;
  }

  .details-container {
    display: flex;
  }
  .item-title {
    font-weight: 700;
    color: $gold;
    font-size: 25px;
    text-transform: capitalize;

    @include for-size(tablet-portrait-down) {
      font-size: 20px;
      width: 90%;
    }
  }

  .item-description {
    color: $gold;
    max-width: 100%;

    @include for-size(phone-only) {
      max-width: 92%;
    }
  }

  .item-cost {
    color: $gold;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 20px;
    align-self: flex-end;

    @include for-size(phone-only) {
      right: -25px;
      top: 5px;
    }
  }

  .odd {
    margin-left: 40px;
    @include for-size(tablet-portrait-down) {
      margin-left: 0;
    }
  }
</style> -->
<!-- ///// -->

{#if data?.slug === "Kettlee"}
  <div class="section-container">
    {#if pageData}
      {#each itemList.slice(0, 6) as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title.replace(/\b\w+\b/g, capitalizeTextExceptLbs)}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {:else}
      {#each itemList as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title.replace(/\b\w+\b/g, capitalizeTextExceptLbs)}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {/if}
  </div>
{:else if data?.slug === "Cupertino"}
  <div class="section-container">
    {#if pageData}
      {#each itemList.slice(0, 6) as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {:else}
      {#each itemList as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {/if}
  </div>
{:else if data?.slug === "MCA"}
  <div class="section-container">
    {#if pageData}
      {#each itemList.slice(0, 6) as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {:else}
      {#each itemList as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {/if}
  </div>
{/if}
<!-- <div class="section-container">
  {#if pageData}
    {#each itemList.slice(0, 6) as item, index}
      <div class="item" class:odd={index % 2 != 0}>
        <div class="item-content-container">
          <div class="flexCenter-Icon">
            <p class="item-title" style="text-align:center">{item.title}</p>
            {#if item.src}
              <img src={item.src} class="cutleryImage" />
            {:else}
              <div />
            {/if}
            {#if item.img}
              <img src={item.img} class="deliveryCourierImage" />
            {:else}
              <div />
            {/if}
          </div>
          <div class="details-container">
            <p class="item-description">{item.description}</p>
          </div>
          <p class="item-cost">{item.cost}</p>
        </div>
        <hr class="rule" />
      </div>
    {/each}
  {:else}
    {#each itemList as item, index}
      <div class="item" class:odd={index % 2 != 0}>
        <div class="item-content-container">
          <div class="flexCenter-Icon">
            <p class="item-title" style="text-align:center">{item.title}</p>
            {#if item.src}
              <img src={item.src} class="cutleryImage" />
            {:else}
              <div />
            {/if}
            {#if item.img}
              <img src={item.img} class="deliveryCourierImage" />
            {:else}
              <div />
            {/if}
          </div>
          <div class="details-container">
            <p class="item-description">{item.description}</p>
          </div>
          <p class="item-cost">{item.cost}</p>
        </div>
        <hr class="rule" />
      </div>
    {/each}
  {/if}
</div> -->
<!-- {/if} -->
{#if slug === "Kettlee"}
  <div class="section-container">
    {#if pageData}
      {#each itemList.slice(0, 6) as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {:else}
      {#each itemList as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {/if}
  </div>
{/if}
{#if slug === "Cupertino"}
  <div class="section-container">
    {#if pageData}
      {#each itemList.slice(0, 6) as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {:else}
      {#each itemList as item, index}
        <div class="item" class:odd={index % 2 != 0}>
          <div class="item-content-container">
            <div class="flexCenter-Icon">
              <p class="item-title" style="text-align:center">{item.title}</p>
              {#if item.src}
                <img src={item.src} class="cutleryImage" />
              {:else}
                <div />
              {/if}
              {#if item.img}
                <img src={item.img} class="deliveryCourierImage" />
              {:else}
                <div />
              {/if}
            </div>
            <div class="details-container">
              <p class="item-description">{item.description}</p>
            </div>
            <p class="item-cost">{item.cost}</p>
          </div>
          <hr class="rule" />
        </div>
      {/each}
    {/if}
  </div>
{/if}

{#if slug === "MCA"}
  <div class="section-containerMCA">
    {#each itemList as item, index}
      <div class="itemMCA" class:oddMCA={index % 2 != 0}>
        <p class="item-titleMCA">{item.title}</p>
        <div class="details-containerMCA">
          <p class="item-descriptionMCA">{item.description}</p>
          <p class="item-costMCA">{item.cost}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .section-containerMCA {
    display: flex;
    background-color: inherit;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0;
    @include for-size(tablet-portrait-down) {
      justify-content: center;
    }
  }

  .itemMCA {
    display: flex;
    flex-direction: column;
    flex: 0 1 35%;
    position: relative;
    margin-bottom: 20px;
    @include for-size(tablet-portrait-down) {
      flex: 0 1 80%;
    }
  }

  .item-titleMCA:nth-child(2) {
    color: red;
  }

  .details-containerMCA {
    display: flex;
  }
  .item-titleMCA {
    font-weight: 700;
    color: $gold;
    font-size: 25px;
  }

  .item-descriptionMCA {
    color: $gold;
    @include for-size(phone-only) {
      max-width: 92%;
    }
  }

  .item-costMCA {
    color: $gold;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 20px;
    align-self: flex-end;

    @include for-size(phone-only) {
      right: -25px;
      top: 5px;
    }
  }

  .oddMCA {
    margin-left: 40px;
    @include for-size(tablet-portrait-down) {
      margin-left: 0;
    }
  }
  .flexCenter-Icon {
    display: flex;
  }
  .section-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 0 107px 0;
    // background-color: #131e27;
    // opacity: 0.039;
    @include for-size(tablet-portrait-down) {
      justify-content: center;
    }
  }
  .rule {
    border: 1px solid #000 !important;
    width: 80%;
  }
  .item-content-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 200px;
  }
  .item {
    display: flex;
    flex-direction: column;
    flex: 0 1 35%;
    position: relative;
    margin-bottom: 20px;
    justify-content: space-between;
    @include for-size(tablet-portrait-down) {
      flex: 0 1 80%;
    }
    @include for-size(phone-only) {
      min-height: 300px;
    }
  }

  .item-title:nth-child(2) {
    color: red;
  }

  .details-container {
    display: flex;
    text-align: center;
  }
  .item-title {
    font-weight: 500;
    color: #eeba28;
    font-size: 25px;
    // text-transform: capitalize !important;
  }
  .deliveryCourierImage {
    height: 20px;
    width: 28px;
    margin-top: 16px;
    margin-left: 15px;
  }
  .cutleryImage {
    height: 20px;
    width: 20px;
    margin-top: 15px;
    margin-left: 15px;
  }
  .item-description {
    color: #eeba28;
    font-size: 18px;
    padding-bottom: 67px;
    @include for-size(phone-only) {
      max-width: 92%;
      margin-left: 34px;
      padding-top: 12px;
    }
  }

  .item-cost {
    color: #eeba28;
    text-align: center;
    position: absolute;
    bottom: 25px;
    font-weight: 600;
    font-size: 20px;
    font-family: "Open Sans" !important;
  }

  .odd {
    margin-left: 40px;
    @include for-size(tablet-portrait-down) {
      margin-left: 0;
    }
  }
</style>
