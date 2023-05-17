<template>
  <div>
    <nav
      class="px-8 py-4 pl-16 w-100 border-b fixed bg-[#fde68a] border-black w-full flex flex-row justify-between items-end"
    >
      <h1 class="text-slate-900 font-semibold text-3xl">Atomic Habits</h1>

      <ul
        class="flex flex-row justify-center items-center gap-6 text-lg font-semibold"
      >
        <li class="px-4 py-2 hover:text-white hover:bg-slate-900">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="px-4 py-2 hover:text-white hover:bg-slate-900">
          <NuxtLink to="/author">Author</NuxtLink>
        </li>
        <li class="px-4 py-2 hover:text-white hover:bg-slate-900">
          <NuxtLink to="/articles">Article</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
