<template>
  <section class="h-screen p-16 flex flex-col justify-center items-center">
    <header
      class="h-100 w-3/4 flex sm:flex-col md:flex-row lg:flex-col justify-center items-center gap-10"
    >
      <div class="flex flex-row pt-24 gap-6 justify-center items-center">
        <img
          class="hidden sm:block md:block lg:block sm:mt-5 sm:w-[700px] sm:h-[300px] md:w-[1200px] overflow-hidden scale-120 border-none rounded-lg object-cover"
          src="https://www.vivekarvind.com/content/images/2022/02/Atomic_Habits-2.png"
          alt=""
        />
        <div class="flex flex-col items-center justify-center">
          <h1 class="font-extrabold text-4xl lg:text-6xl mb-6 leading-32">
            Discover
            <span class="text-[#30565a]">Better Insight</span> Every Single Day
          </h1>
          <h2 class="font-serif italic text-lg">
            "Changes that seem small and unimportant at first will compound into
            remarkable results if you're willing to stick with them for years."
            <br />
            - James Clear
          </h2>
        </div>
      </div>
      <!-- arrow -->
      <div class="relative invisible md:lg:visible">
        <a href="#tips">
          <img
            class="relative left-0 bottom-0 w-24 h-16"
            src="https://media.giphy.com/media/mjRKIiDIzryBxbimeq/giphy.gif"
            alt=""
          />
        </a>
      </div>
    </header>
  </section>
</template>

<style>
.shadow-custom {
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>
