import type { AppProps } from 'next/app'

import { CartProvider } from 'use-shopping-cart'


import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { Header } from '../components/Header'
import { Cart } from '../components/Cart'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY || ''}
      successUrl={`${process.env.NEXT_URL}/success`}
      cancelUrl={`${process.env.NEXT_URL}`}
      currency="BRL"
      shouldPersist
    >
    <Container>
      <Header />
      <Cart />
      <Component {...pageProps} />
    </Container>
    </CartProvider>
  )
}
