<template>
  <div>
    <v-img :src=cocktail.img height="400px"/>
    <p class="text-h1">
      {{ cocktail.name }}
    </p>
    <v-subheader class="justify-center">
      {{ cocktail.longAnecdote }}
    </v-subheader>
    <info-grid></info-grid>
  </div>
</template>
<script>
import store from '../store.js'
import infoGrid from '../components/infoGrid.vue'
export default {
  components: {
    'info-grid': infoGrid
  },
  data(){
    return {
      cocktailName: this.$route.params.name,
    }
  },
  computed: {
    cocktail() {
      return store.cocktails.find(
        cocktail => cocktail.name === this.cocktailName
      )
    }
  }

}

</script>