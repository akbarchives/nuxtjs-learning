<template>
  <div class="px-16 pt-32 flex flex-col justify-center items-center">
    <h1 class="mb-16 text-center">Article about Atomic Habits Book</h1>
    <nuxt-link to="/articles/fokus">
      <Card
        id=""
        title=" Mengapa Harus Fokus?"
        desc="Fokuslah pada perubahan kecil seiring waktu: Alih-alih mencoba untuk
      melakukan perubahan besar dan drastis dalam hidup Anda, fokuslah pada
      kebiasaan kecil yang dapat Anda lakukan secara konsisten setiap hari."
      >
        <img
          class="w-full sm:w-full sm:h-64 sm:object-cover sm:object-center"
          src="~/assets/img/tips/fokus.jpg"
          alt=""
      /></Card>
    </nuxt-link>

    <nuxt-link to="/articles/kebiasaan">
      <CardReverse
        id="2. "
        title="Kebiasaan"
        desc="Buatlah kebiasaan menjadi bagian dari identitas Anda: Alih-alih melihat
        kebiasaan sebagai tindakan yang harus dilakukan, lihatlah mereka sebagai
        bagian dari siapa Anda."
      >
        <img
          class="w-full sm:w-full sm:h-64 sm:object-cover sm:object-center"
          src="~/assets/img/tips/kebiasaan.jpg"
          alt=""
        />
      </CardReverse>
    </nuxt-link>
  </div>
</template>
