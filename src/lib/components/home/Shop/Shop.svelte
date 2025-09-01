<script>
    import { onMount } from "svelte";
  
    const products = [
      { id: 1, title: "Picmi White-Choco with Caramel Macchiato", price: 59, image: "/assets/illustrations/shop-choco.png" },
      { id: 2, title: "Picmi Shopper bag", price: 19, image: "/assets/illustrations/shop-bag.png" },
      { id: 3, title: "Picmi Baseball Cap", price: 24, image: "/assets/illustrations/shop-cap.png" },
      { id: 4, title: "Picmi Sweatshirt", price: 39, image: "/assets/illustrations/shop-sweatshirt.png" },
      { id: 5, title: "Picmi White-Choco with Caramel Macchiato", price: 59, image: "/assets/illustrations/shop-choco.png" },
      { id: 6, title: "Picmi Shopper bag", price: 19, image: "/assets/illustrations/shop-bag.png" },
      { id: 7, title: "Picmi Baseball Cap", price: 24, image: "/assets/illustrations/shop-cap.png" },
      { id: 8, title: "Picmi Sweatshirt", price: 39, image: "/assets/illustrations/shop-sweatshirt.png" },
      { id: 9, title: "Picmi White-Choco with Caramel Macchiato", price: 59, image: "/assets/illustrations/shop-choco.png" },
      { id: 10, title: "Picmi Shopper bag", price: 19, image: "/assets/illustrations/shop-bag.png" },
      { id: 11, title: "Picmi Baseball Cap", price: 24, image: "/assets/illustrations/shop-cap.png" },
      { id: 12, title: "Picmi Sweatshirt", price: 39, image: "/assets/illustrations/shop-sweatshirt.png" },
      { id: 13, title: "Picmi White-Choco with Caramel Macchiato", price: 59, image: "/assets/illustrations/shop-choco.png" },
      { id: 14, title: "Picmi Shopper bag", price: 19, image: "/assets/illustrations/shop-bag.png" },
      { id: 15, title: "Picmi Baseball Cap", price: 24, image: "/assets/illustrations/shop-cap.png" },
      { id: 16, title: "Picmi Sweatshirt", price: 39, image: "/assets/illustrations/shop-sweatshirt.png" },
    ];
  
    let current = 0;
    let itemsPerView = 4;
    let isDesktop = false;
  
    let startX = 0;
    let endX = 0;
    let isDragging = false;

    let itemsCounter = 0
  
    // адаптивное кол-во элементов
    function updateItemsPerView() {
      const w = window.innerWidth;
      if (w < 768) {
        itemsPerView = 1;
        isDesktop = false;
      } else if (w < 992) {
        itemsPerView = 2;
        isDesktop = false;
      } else if (w < 1200) {
        itemsPerView = 3;
        isDesktop = true;
      } else {
        itemsPerView = 4;
        isDesktop = true;
      }
      // сбросить позицию при ресайзе
      current = 0;
    }

    $: itemsCounter = products.length || 0
  
    onMount(() => {
      updateItemsPerView();
      window.addEventListener("resize", updateItemsPerView);
      return () => window.removeEventListener("resize", updateItemsPerView);
    });
  
    function next() {
      if (current < products.length - itemsPerView) current++;
    }
  
    function prev() {
      if (current > 0) current--;
    }
  
    // тач (мобильные)
    function handleTouchStart(e) {
      startX = e.touches[0].clientX;
    }
  
    function handleTouchEnd(e) {
      endX = e.changedTouches[0].clientX;
      if (endX < startX - 50) next();
      if (endX > startX + 50) prev();
    }
  
    // drag (десктоп)
    function handleMouseDown(e) {
      if (!isDesktop) return;
      isDragging = true;
      startX = e.clientX;
    }
  
    function handleMouseUp(e) {
      if (!isDesktop) return;
      if (!isDragging) return;
      isDragging = false;
      endX = e.clientX;
      if (endX < startX - 50) next();
      if (endX > startX + 50) prev();
    }
  
    function goToStore() {
      window.location.href = "/store";
    }
</script>
  
<section class="shop">
    <div class="shop-header">
      <h2 class='shop-title'>Shop chocolate & new apparel</h2>
      <div class="shop-control-buttons">
        {#if isDesktop}
            <button class="view-more-button" on:click={goToStore}>
                {itemsCounter} MORE ITEMS
            </button>
            <button class="prev" on:click={prev}>
                <img class="arrow" src="/assets/icons/arrow-left.svg" alt="left">
            </button>
            <button class="next" on:click={next}>
                <img class="arrow" src="/assets/icons/arrow-right.svg" alt="right">
            </button>
        {/if}
      </div>
    </div>
  
    <div class="slider-wrapper">
      
  
      <div
        class="slides"
        style="transform: translateX(-{current * (100 / itemsPerView)}%);"
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
        on:mousedown={handleMouseDown}
        on:mouseup={handleMouseUp}
      >
        {#each products as p}
          <div class="slide" style="flex: 0 0 calc(100% / {itemsPerView})">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.price} $</p>
          </div>
        {/each}
      </div>
  
      
    </div>
    {#if !isDesktop}
        <button class="view-more-button center" on:click={goToStore}>
            {itemsCounter} MORE ITEMS
        </button>
      {/if}
  </section>
  
  <style>
    .shop {
      max-width: 1600px;
      margin: 40px auto;
    }
  
    .shop-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .shop-title {
        font-family: var(--font-decorative);
        font-size: 68px;
        font-weight: normal;
        max-width: 545px;
    }
    .shop-control-buttons {
        display: flex;
        width: auto;
        align-items: center;
        gap: 20px;
    }
  
    .view-more-button {
      background: none;
      color: #8273ef;
      font-size: 20px;
      border: 1px solid #8273ef;
      border-radius: 40px;
      padding: 16px 40px;
      cursor: pointer;
    }

    button.prev,
    button.next {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      cursor: pointer;
    }
    .arrow {
        margin: 0 auto;
    }
  
    .slider-wrapper {
      position: relative;
      overflow: hidden;
    }
  
    .slides {
      display: flex;
      transition: transform 0.3s ease;
    }
  
    .slide {
      padding: 10px;
      text-align: center;
      box-sizing: border-box;
    }
  
    .slide img {
      max-width: 100%;
      border-radius: 8px;
    }
    .center {
        margin: 0 auto;
    }

    @media (max-width: 1700px) {
        .shop {
            max-width: 1380px;
            margin: 40px auto;
        }
    }
    @media (max-width: 1400px) {
        .shop {
            max-width: 970px;
            margin: 40px auto;
        }
        .shop-title {
            font-size: 54px;
            font-weight: normal;
            max-width: 435px;
        }
        .view-more-button {
            font-size: 16px;
            border: 1px solid #8273ef;
            border-radius: 40px;
            padding: 14px 30px;
        }
        button.prev,
        button.next {
            width: 50px;
            height: 50px;
        }
    }
    @media (max-width: 992px) {
        .shop {
            max-width: 750px;
            margin: 40px auto;
        }
    }
    @media (max-width: 768px) {
        .shop {
            max-width: 750px;
            margin: 40px auto;
        }
    }
  </style>