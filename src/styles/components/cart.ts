import { styled } from "..";

export const CartContainer = styled('aside', {
    position: 'absolute',
    top: 0,
    bottom: 0,
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    width: 480,

    padding: '3rem',

    background: '$gray800',
    zIndex: 999,

    transition: 'all .3s ease',

    variants: {    
        isOpen: {
            true: {
                right: 0,
            },
            false: {
                display: 'hidden',
                right: '-500px'
            }
        }
    }
})

export const ItemsContainer = styled('div', {
    position:  'relative',
    display: 'flex',
    flexDirection: 'column',

    button: {
        border: 'none',
        background: 'transparent',

        fontSize: '$md',
        fontWeight: 'bold',
        lineHiehgt: '1.6',

        cursor: 'pointer',

        '&:first-child': {
            position: 'absolute',
            top: '-1.25rem',
            right: '-1.25rem',

            color: '$gray100',

            transition: 'all .2s ease',
    
            '&:hover': {
                filter: 'brightness(0.8)'
            }
        }

    },

    strong: {
        margin: '1.25rem 0 2rem',
        fontSize: '$lg',
        fontWeight: 'bold',
        color: '$gray100',
    }
})

export const ItemListContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
})

export const ProductContainer = styled('div', {
    display: 'flex',
    gap: '1.25rem',

    img: {
        objectFit: 'cover'
    },

    div: {
        display: 'flex',
        flexDirection: 'column',

        span: {
            fontSize: '$md',
            lineHeight: '1.6'
        },
        strong: {
            margin: 0,
            fontSize: '$md',
            lineHeight: '1.6',
            fontWeight: 'bold'
        },
        button: {
            marginTop: 8,
            fontSize: '1rem',
            lineHeight: '1.6',
            fontWeight: 'bold',
            width: 'fit-content',
            color: '$green500',

            transition: 'color .2s ease',
    
            '&:hover': {
                color: '$green300'
            }
        }
    }
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8
})

export const FooterContainer = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',

    button: {
        color: '$white',
        background: '$green500',
        padding: '1.25rem',

        border: 'none',
        borderRadius: 8,

        fontSize: '$md',
        fontWeight: 'bold',

        cursor: 'pointer',

        transition: 'background .2s ease',

        '&:hover': {
            background: '$green300'
        }
    }
})

export const ProductsTotal = styled('div', {
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',

        '&:first-child': {
            marginBottom: 4
        },

        span: {
            fontSize: '$md',
            lineHeight: '1.6',

            '&:first-child': {
                fontSize: '1rem',
                lineHeight: '1.6',
            },

        },

        strong: {
            fontSize: '$xl',
            fontWeight: 'bold',
            lineHeight: '1.4',

            '&:first-child': {
                fontSize: '$md',
                lineHeight: '1.6',
            }
        }
    }
})