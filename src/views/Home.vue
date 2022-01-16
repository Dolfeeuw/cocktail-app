<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/cocktail.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welkom bij de Cocktail-Maker
        </h1>

        <p class="subheading font-weight-regular">
          Hier vind je een handleiding en alle drankjes en de bijbehorende configuratie
          <br>contact <b>Michelle</b> als iets onduidelijk is of als er iets is misgegaan.
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Ga naar drankjes
        </h2>

        <v-row justify="center">
          <v-btn
            color="primary"
            elevation="2"
            large
            outlined
            plain
            x-large
            v-for="(next, i) in drinksList"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
          >
            {{ next.text }}
          </v-btn>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Michelle Socials
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in socials"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      icons: [
        {
          // linkedInIcon: LinkedInIcon,
          // whatsAppIcon: WhatsAppIcon,
          // instagramIcon: InstagramIcon
        },
      ],
      drinksList: [
        {
          text: 'drankjes',
          href: '/drinks-list',
        },
      ],
      socials: [
        {
          text: 'Instagram',
          href: 'https://www.instagram.com/michelle_ermen/',
          // img: this.icons.instagramIcon
        },
        {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/michelle-ermen-027755115/',
          // img: this.icons.linkedInIcon
        },
        {
          text: 'WhatsApp',
          href: 'https://wa.me/31619349592',
          // img: this.icons.whatsAppIcon
        },
      ],
    }),
  }
</script>
