<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Drankjes hoi
        </h1>
      </v-col>
    </v-row>
        <v-layout row wrap>
          <v-col md4 v-for="(cocktail, i) in cocktails" :key="i" class="d-flex flex-column">
            
              <v-card class="mx-auto flex d-flex flex-column"
                      max-width="344"
              >
              <router-link :to="{name: 'Cocktail', params: {name: cocktail.name}}" style="text-decoration: none; color: inherit;">
                <!-- DISABLED OVERLAY -->
                <div v-if="cocktail.disabled" class="disabled">
                  <p> Not available today :(</p>
                  <button> Request for next time </button>
                </div>
                <!-- DISABLED OVERLAY -->
                <v-img
                  :src=cocktail.img
                  height="200px"/>

                <v-card-title>
                  {{ cocktail.name }}
                </v-card-title>

                <v-card-subtitle class="text-left">
                  {{ cocktail.shortAnecdote }}
                </v-card-subtitle>
              </router-link>
              <v-card-actions v-if="!cocktail.disabled">
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Quick look in the ingredients
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text class="text-left font-weight-bold">
                    Cocktail Maker Ingredients
                  </v-card-text>
                  <v-flex v-for="(quantity, ingredient) in cocktail.bartenderIngredients" :key="ingredient">
                    <v-card-text class="text-left pt-0">
                      {{ ingredient }}: {{ quantity }}ml
                    </v-card-text>
                  </v-flex>
                  <div v-for="(quantity, ingredient) in cocktail.toAddIngredients" :key="ingredient">
                    <v-card-text v-if="ingredient" class="text-left font-weight-bold">
                      Ingriendients to add
                    </v-card-text>
                    <v-card-text class="text-left pt-0">
                      {{ ingredient }} {{ quantity }}
                    </v-card-text>
                  </div>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-layout>
  </v-container>
</template>
<script>
import store from '../store.js'
export default {
  name: 'DrinksList',
  data: () => ({
    show: false,
  }),
  computed: {
    cocktails() {
      return store.cocktails;
    },
    sortCocktails() {
      return store.cocktails.sort((a, b) => a.disabled - b.disabled );
    }
  },
  created() {
    this.sortCocktails;
  },
}
</script>
<style scoped>@import "../styles/global.scss" </style>
