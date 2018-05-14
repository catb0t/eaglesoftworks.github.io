<template>
  <div>
    Sieged game view
    <!-- WebGL loader -->

    <!-- might need to use CORSBuster / SOPBuster -->
    <iframe id="game-viewer" src="https://raw.githubusercontent.com/eaglesoftworks/sieged/master/Build/WebGLBuild/index.html" />

    </iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

});
</script>

<style>

</style>