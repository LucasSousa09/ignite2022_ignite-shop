import Image from "next/image";

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

import 
{ 
    CartContainer,
    ItemsContainer,
    ItemListContainer,
    ProductContainer, 
    ImageContainer, 
    FooterContainer, 
    ProductsTotal
} from "../styles/components/cart";

import closeImg from '../assets/close.svg'
import { useState } from "react";
import axios from "axios";

export function Cart(){
    const { cartDetails, handleCartClick, shouldDisplayCart, removeItem } = useShoppingCart()

    const [isCreatingCheckoutSession, setCheckoutSession] = useState(false)

    async function handleBuyProduct(){
        try {
        setCheckoutSession(true)
        const response = await axios.post('/api/checkout', {
            productItems: Object.values(cartDetails || {})
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

    function closeCart(){
        handleCartClick()
    }



    const totalPrice = Object.values(cartDetails || {}).reduce((acc, cur) => acc + cur.price, 0)

    return (
        <CartContainer isOpen={shouldDisplayCart}>
            <ItemsContainer>
                <button onClick={closeCart}>
                    <Image src={closeImg} alt="" />
                </button>
                <strong>
                    Sacola de compras
                </strong>

                <ItemListContainer>
                    {
                        Object.values(cartDetails || {}).map(product => (
                            <ProductContainer key={product.id}>
                                <ImageContainer>
                                    <Image src={product.image || ''} alt="" width={95} height={95} />
                                </ImageContainer>

                                <div>
                                    <span>{product.name}</span>
                                    <strong>{formatCurrencyString({value: product.price, currency: 'BRL'})}</strong>
                                    <button onClick={() => removeItem(product.id)}> Remover </button>
                                </div>
                            </ProductContainer>
                        ))
                    }
                </ItemListContainer>
            </ItemsContainer>

            <FooterContainer>
                <ProductsTotal>
                    <div>
                        <span>Quantidade</span>
                        <span>{Object.keys(cartDetails || {}).length} itens</span>
                    </div>
                    <div>
                        <strong>Valor total</strong>
                        <strong>{formatCurrencyString({value: totalPrice, currency: 'BRL'})}</strong>
                    </div>
                </ProductsTotal>

                <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Finalizar Compra</button>
            </FooterContainer>
        </CartContainer>
    )
}