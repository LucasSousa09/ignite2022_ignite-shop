import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

import { Button, HeaderComp } from '../styles/components/header'

import logoImg from '../assets/logo.svg'
import shoppingCartImg from '../assets/shopping-cart.svg'

export function Header(){
    const { cartDetails, handleCartClick  } = useShoppingCart()

     
    function showCartInfo(){
        handleCartClick()
    }

    return (
        <HeaderComp>
            <Link href="/">
                <Image src={logoImg} alt="" />
            </Link>
            {
                Object.keys(cartDetails || {}).length > 0 ? 
                (
                    <Button onClick={showCartInfo}>
                        <Image src={shoppingCartImg} alt="" />
                        <span>{Object.keys(cartDetails || {}).length}</span>
                    </Button>
                ) :(
                    <Button onClick={showCartInfo}>
                        <Image src={shoppingCartImg} alt="" />
                    </Button>
                )
            }
        </HeaderComp>    
    )
}