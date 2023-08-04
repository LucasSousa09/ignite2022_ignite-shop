import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Stripe from 'stripe'
import axios from 'axios'

import { stripe } from '../../lib/stripe'

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/products'
import { useState } from 'react'
import Head from 'next/head'

interface ProductProps {
  product: {
    id: string,
    name: string,
    price: string, 
    imageUrl: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product({product}: ProductProps) {
    const [isCreatingCheckoutSession, setCheckoutSession] = useState(false)

    async function handleBuyProduct(){
      try {
        setCheckoutSession(true)
        const response = await axios.post('/api/checkout', {
          priceId: product.defaultPriceId
        })

        const { checkoutUrl } = response.data

        //Redirecionamento para páginas externas
        window.location.href = checkoutUrl

        //Redirecionamento para páginas internas
          //const router = useRouter()
          //router.push('checkout')
      }
      catch(err){
        // Conectar a uma ferramenta de observabilidade (Datadog / Sentry)
        setCheckoutSession(false)
        alert('Falha ao redirecionar ao checkout')
      }
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
            <span>{product.price}</span>

            <p>{product.description}</p>
            
            <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
              Comprar agora
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
          price: new Intl.NumberFormat('pt-BR', {
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