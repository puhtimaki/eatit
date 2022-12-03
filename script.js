'strict'

function checkboxCheck() {
  const lista = [
    'Mcdonalds',
    'Subway',
    'Smart Pizza',
    'Hesburger',
    'Pizzeria Babiloma',
    'Pikku Quattro',
    'Korv-Görans',
    'Calzone',
    'Burger King',
    'Chimaek',
    'Friends & Brgrs',
    'Proper Pizza',
    'Social Burgerjoint',
    'Niska',
    'O Sole Mio',
    'K.achi',
    'Tom Yum Thai',
    'Daiwo Sushi',
    'Härdin Pizzeria',
    'Star - Kebab & Burger',
    'Tian Long',
    'Milano Kebab Pizzeria',
    'Amore',
    'Rax Pizzabuffet',
    'Naarau Kebab Pizzeria',
    'Laanna Thai',
    'Venn Vaasa',
    'Cafe Uimala',
    'Linda Kebab Pizzeria',
    'Wasa Palosaari Pizzeria',
    'Rosso Pizza',
    'Fondis',
    'The Urban Bites',
    'Juku',
    'Amarillo',
    'Cafe Tintin Präntöö',
    'Rosso Vaasa',
    'Pancho Villa',
    'Momento',
    'Valencia',
    'Olympia',
    'El Diablito',
    'Pikku Meksiko',
    'Two Ways Wasa',
  ]

  const listaPizza = [
    'Smart Pizza',
    'Pizzeria Babiloma',
    'Pikku Quattro',
    'Calzone',
    'Proper Pizza',
    'Niska',
    'O Sole Mio',
    'Härdin Pizzeria',
    'Star - Kebab & Burger',
    'Milano Kebab Pizzeria',
    'Rax Pizzabuffet',
    'Naarau Kebab Pizzeria',
    'Linda Kebab Pizzeria',
    'Wasa Palosaari Pizzeria',
    'Rosso Pizza',
    'Momento',
    'Valencia',
  ]

  const listaMuu = [
    'Subway',
    'Niska',
    'Amore',
    'Venn Vaasa',
    'Cafe Uimala',
    'Fondis',
    'The Urban Bites',
    'Amarillo',
    'Cafe Tintin Präntöö',
    'Rosso Vaasa',
    'Pancho Villa',
    'Momento',
    'Olympia',
    'El Diablito',
    'Pikku Meksiko',
    'Two Ways Wasa',
  ]

  const listaSushi = [
    'Chimaek',
    'K.achi',
    'Tom Yum Thai',
    'Daiwo Sushi',
    'Tian Long',
    'Laanna Thai',
    'Juku',
  ]

  const listaBurger = [
    'Mcdonalds',
    'Hesburger',
    'Korv-Görans',
    'Calzone',
    'Burger King',
    'Friends & Brgrs',
    'Social Burgerjoint',
    'Star - Kebab & Burger',
    'Amarillo',
    'Pancho Villa',
    'Momento',
  ]

  let pizzacheck = document.getElementById('Pizza')
  let sushicheck = document.getElementById('Sushi')
  let burgercheck = document.getElementById('Burger')
  let othercheck = document.getElementById('Other')
  let random = document.getElementById('SelectAll')

  if (pizzacheck.checked) {
    let slcPizza = listaPizza[Math.floor(Math.random() * listaPizza.length)]
    document.getElementById('tulos').innerHTML = slcPizza
  } else if (sushicheck.checked) {
    let slcSushi = listaSushi[Math.floor(Math.random() * listaSushi.length)]
    document.getElementById('tulos').innerHTML = slcSushi
  } else if (burgercheck.checked) {
    let slcBurger = listaBurger[Math.floor(Math.random() * listaBurger.length)]
    document.getElementById('tulos').innerHTML = slcBurger
  } else if (othercheck.checked) {
    let slcMuu = listaMuu[Math.floor(Math.random() * listaMuu.length)]
    document.getElementById('tulos').innerHTML = slcMuu
  } else if (random.checked) {
    let slcRandom = lista[Math.floor(Math.random() * lista.length)]
    document.getElementById('tulos').innerHTML = slcRandom
  }
}
