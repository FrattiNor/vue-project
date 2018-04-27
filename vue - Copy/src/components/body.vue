<template>
<div>
<movieBody></movieBody>
<!-- <searchResult></searchResult> -->
</div>
</template>

<script>
import movieBody from "./movie.vue";
import searchResult from "./searchResult.vue";


export default {
  name: 'movie',
  components: {
    movieBody,
    searchResult,
  },
}
</script>
