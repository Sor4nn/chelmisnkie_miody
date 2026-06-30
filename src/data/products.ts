import type { Product } from '../types'

import lipaImg from '../assets/img/products/honey-lipa.svg'
import wielokwiatImg from '../assets/img/products/honey-wielokwiat.svg'
import grykaImg from '../assets/img/products/honey-gryka.svg'

const productImages: Record<string, string> = {
  lipa: lipaImg,
  wielokwiat: wielokwiatImg,
  gryka: grykaImg,
}

const products: Product[] = [
  {
    id: 'lipa',
    name: 'Miód Lipowy',
    tag: 'Bestseller',
    description:
      'Delikatny, jasny miód o wyraźnym aromacie lipy. Wspiera układ oddechowy, działa napotnie i uspokajająco. Idealny na jesienne i zimowe wieczory.',
    weight: '500 g',
    price: '45 zł',
    image: productImages.lipa,
  },
  {
    id: 'wielokwiat',
    name: 'Miód Wielokwiatowy',
    tag: 'Najpopularniejszy',
    description:
      'Łagodny w smaku, bogaty w minerały i witaminy. Pochodzi z nektaru wielu gatunków kwiatów. Doskonały na co dzień — do herbaty, pieczywa i deserów.',
    weight: '500 g',
    price: '38 zł',
    image: productImages.wielokwiat,
  },
  {
    id: 'gryka',
    name: 'Miód Gryczany',
    tag: 'Bogaty w żelazo',
    description:
      'Ciemny, wyrazisty miód o charakterystycznym, lekko korzennym smaku. Zawiera dużo żelaza i magnezu. Polecany przy anemii i zmęczeniu.',
    weight: '500 g',
    price: '48 zł',
    image: productImages.gryka,
  },
]

export default products
