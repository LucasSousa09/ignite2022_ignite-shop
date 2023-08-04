import { styled } from '..'

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1100,
    margin: '0 auto'
})

export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '676px',
    width: '520px',
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '8px',

    img: {
        objectFit: 'cover'
    },

    '.loading': {
        width: '100%',
        height: '100%',
        background: '$gray800',
        borderRadius: '6px'
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1:{
       color: '$gray300',
       fontSize: '$2xl',
       lineHeight: '1.4',
       marginBottom: '1rem'
    },
    span: {
        display: 'flex',
        color: '$green300',
        fontSize: '$2xl',
        marginBottom: '2.5rem'
    },
    p: {
        color: '$gray300',
        fontSize: '$md',
        lineHeight: '1.6',
        marginBottom: 'auto'
    },

    button: {
        width: '100%',
        padding: '1.25rem 0',
        color: '$white',
        backgroundColor: '$green500',
        border: 'none',
        borderRadius: '8px',
        fontSize: '$md',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '0.2s ease', 

        '&:not(:disabled):hover': {
            backgroundColor: '$green300'
        },
        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed'
        }
    },

    '.loading': {
        display: 'flex',
        width:  '576px',
        height: '45px',
        background: '$gray800',
        borderRadius: '8px',

        '&:first-child': {
            marginBottom: '1.5rem',
        },
        
        '&:last-child': {
            height: '8rem',
        }
    }

})