<template>
  <div class="relative w-full col-span-2 font-titillium">
    <div
      class="z-50 box"
      data-0="opacity: 1;"
      data-100=""
      data-250=""
      data-500="opacity: 0;"
    >
      <HelloWorld />
    </div>

    <div
      class="box"
      data-0="opacity: 0;"
      data-500="opacity: 0;"
      data-1500="opacity: 1;"
      data-2000="opacity: 0;"
    >
      <Expertise />
    </div>
    <div
      class="box"
      data-0="opacity: 0;"
      data-2000="opacity: 0;"
      data-2500="opacity: 1;"
      data-3000="opacity: 0;"
    >
      <DesignAndCoding />
    </div>
    <div
      class="box"
      data-0="opacity: 0;"
      data-3000="opacity: 0;"
      data-3500="opacity: 1;"
    >
      <Clients />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./content/HelloWorld.vue";
import Expertise from "./content/Expertise.vue";
import DesignAndCoding from "./content/DesignAndCoding.vue";
import Clients from "./content/Clients.vue";

export default {
  components: {
    HelloWorld,
    Expertise,
    DesignAndCoding,
    Clients,
  },
};
</script>
