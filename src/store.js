export default {
  cocktails: [
    {
      disabled: true,
      name: 'Cosmopolitan',
      bartenderIngredients: {
        'Vodka': 30,
        'Cranberry juice': 15,
        'Lime juice': 10,
        'Cointreau': 10,
      },
      toAddIngredients: {
          1: 'Orange slice'
      },
      img: require('/src/assets/cosmopolitan.jpeg'),
      shortAnecdote: 'The cosmopolitan gained popularity in the 1990s. It was further popularized among young women by its frequent mention on the TV show Sex and the City.',
      longAnecdote: 'The roots of the Cosmopolitan came from a drink called the Daisy from the 1930s. This version had gin, cointreau, lemon juice and raspberry syrup. Similar but sweeter than our Cosmo. The Cosmo was popularized by the movie Sex and the City, since it was a favorite drink of the actors in the series.'
    },
    {
      disabled: true,
      name: 'Mojito',
      bartenderIngredients: {
        'Sparkling water': 30,
        'Lime juice': 15,
        'White rum': 30
      },
      img: require('/src/assets/mojito.jpeg'),
      shortAnecdote: 'Havana, Cuba, is the birthplace of the mojito, although its exact origin is the subject of debate.'
    },
    {
      disabled: false,
      name: 'Sex On The Beach',
      bartenderIngredients: {
        'Vodka': 30,
        'Peach liquor': 30,
        'Orange juice': 90,
        'Cranberry juice': 30
      },
      img: require('/src/assets/sex_on_the_beach.jpeg'),
      shortAnecdote: 'The alcohol-free variation is sometimes referred to as "Safe Sex on the Beach," "Cuddles on the Beach," or "Virgin(s) on the Beach".'
    },
    {
      disabled: false,
      name: 'Vodka Sunrise',
      bartenderIngredients: {
        'Vodka': 45,
        'Orange juice': 150,
        'Grenadine syrup': 15,
        'White rum': 30
      },
      toAddIngredients: {
        1: 'Pineapple slice'
      },
      img: require('/src/assets/vodka_sunrise.jpeg'),
      shortAnecdote: 'Because the specific gravity of grenadine is heavier than that of orange juice and vodka, it is always going to sink to the bottom and turn it red.'
    },
    {
      disabled: true,
      name: 'Michelle',
      bartenderIngredients: {
        'Sparkling water': 30,
        'Lime juice': 15,
        'White rum': 30
      },
      img: require('/src/assets/mojito.jpeg'),
      anecdote: 'Havana, Cuba, is the birthplace of the mojito, although its exact origin is the subject of debate. '
    },
    {
      disabled: true,
      name: 'Michelle',
      bartenderIngredients: {
        'Sparkling water': 30,
        'Lime juice': 15,
        'White rum': 30
      },
      img: require('/src/assets/mojito.jpeg'),
      anecdote: 'Havana, Cuba, is the birthplace of the mojito, although its exact origin is the subject of debate. '
    },
  ]
};
