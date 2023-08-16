import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '../../lib/stripe'

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/products'
import { useState } from 'react'
import Head from 'next/head'

import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
  product: {
    id: string,
    name: string,
    price: number,
    priceFormated: string, 
    imageUrl: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product({product}: ProductProps) {

    const {addItem} = useShoppingCart()

    function handleAddItem(){
      addItem({
        name: product.name,
        price: product.price,
        currency: 'BRL',
        image: product.imageUrl,
        sku:  product.defaultPriceId
      })

      return
    }

    const { isFallback } = useRouter()  

    if(isFallback){
      return (
        <ProductContainer>
          <ImageContainer>
            <div className='loading' />
          </ImageContainer>
          <ProductDetails>
            <span className='loading' />
            <span className='loading' />
            <span className='loading' />
          </ProductDetails>
        </ProductContainer>
      )
    }

    return (
      <>
        <Head>
          <title>{product.name} | Ignite Shop</title>
        </Head>

        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt={product.name}/>
          </ImageContainer>
          <ProductDetails>
            <h1>{product.name}</h1>
            <span>{product.priceFormated}</span>

            <p>{product.description}</p>
            
            <button onClick={() => handleAddItem()}>
              Colocar na sacola
            </button>
          </ProductDetails>
        </ProductContainer>
      </>
    )
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        {
          params: {id: 'prod_OKq51QJbczMNCu' }
        },
      ],
      fallback: true
    }
  }

  export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params != undefined ? params.id : '';

    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price

    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          price: price.unit_amount,
          priceFormated: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format((price.unit_amount || 0) / 100) , 
          imageUrl: product.images[0],
          description: product.description,
          defaultPriceId: price.id
        }
      },
      revalidate: 60 * 60 * 1,  
    }
  }