import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";

import { useEffect } from "react";
import { useShoppingCart } from 'use-shopping-cart'

import { GetServerSideProps } from "next";

import { stripe } from "../lib/stripe";

import { ImageContainer, SuccessContainer, ImagesBox } from "../styles/pages/success";

interface SuccessProps {
  customerName: string,
  productsQuantity: number,
  productsInfo: {
    name: string,
    imageUrl: string
  }[],
  product: {
    name: string,
    imageUrl: string
  }
}

export default function Success({ customerName, product, productsInfo, productsQuantity }: SuccessProps) {
    const {clearCart} = useShoppingCart()

    useEffect(() => {
      clearCart()
    },[])

    return (
      <>
        <Head>
          <title>Compra Efetuada | Ignite Shop</title>
          <meta name='robots' content='noindex'/>
        </Head>
        <SuccessContainer>

          <ImagesBox>

            {
              productsInfo.map(product => (
                <ImageContainer key={product.imageUrl}>
                  <Image src={product.imageUrl} alt={product.name} width={114} height={106} />
                </ImageContainer>    
              ))
            }

          </ImagesBox>
          
          <h1>Compra efetuada!</h1>

          <p>
            Uhuul {' '} 
            <strong>{customerName}</strong>, sua compra de {productsQuantity} camisetas já está a caminho da sua casa.
          </p>

          <Link href="/">Voltar ao catálogo</Link>
        </SuccessContainer>
      </>
    )
  }

  export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if(!query.session_id){
      return{
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
    })

    const productsInfo = session.line_items?.data.map(product => {
      const productInfo = product.price?.product as Stripe.Product


      return {
        name: productInfo.name,
        imageUrl: productInfo.images[0]
      }
    })

    const customerName = session.customer_details?.name
    const productsQuantity = session.line_items?.data.length
    const product = session.line_items?.data[0].price?.product as Stripe.Product

    return {
      props: {
        customerName,
        productsQuantity,
        productsInfo,

        product: {
          name: product.name,
          imageUrl: product.images[0],
        }
      }
    }
  }