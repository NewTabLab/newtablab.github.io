<template>
  <div class="relative z-40 w-full col-span-2 font-titillium">
    <div class="mt-20"><HelloWorld /></div>
    <div class="mt-20"><Expertise /></div>
    <div class="mt-20"><DesignAndCoding /></div>
    <div class="mt-20"><Clients /></div>
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
