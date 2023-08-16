import { GetStaticProps } from "next";
import Image from "next/image";
import Link from 'next/link'
import Head from 'next/head'
import Stripe from "stripe";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { useShoppingCart } from 'use-shopping-cart'

import { HomeContainer, Product } from "../styles/pages/home";

import { stripe } from "../lib/stripe";

import shoppingCartImg from '../assets/shopping-cart-white.svg'

interface IProduct {
  id: string;
  name: string;
  price: number;
  priceFormated: string;
  imageUrl: string;
  defaultPriceId: string
}

interface HomeProps {
  products: IProduct[]
}

export default function Home({products}: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  function handleAddItem(product: IProduct, evt: any){
    evt.preventDefault()

    addItem({
      name: product.name,
      price: product.price,
      currency: 'BRL',
      image: product.imageUrl,
      sku: product.defaultPriceId
    })

    return
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map(product => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className='keen-slider__slide'>
                <Image src={product.imageUrl} alt={product.name} width={520} height={480} priority={true}/>     
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormated}</span>
                  </div>
                  <button onClick={(evt) => handleAddItem(product, evt)}
                  >
                    <Image src={shoppingCartImg} alt='Sacola de Compras' />
                  </button>
                </footer>
            </Product>
          </Link>
        ))}

       </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      priceFormated: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format((price.unit_amount || 0) / 100) , 
      imageUrl: product.images[0],
      defaultPriceId: price.id
    }
  }) 

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}