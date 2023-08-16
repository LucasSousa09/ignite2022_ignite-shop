import { styled } from '../'

export const HeaderComp = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2.5rem 0 2rem',
    width: '100%',
    maxWidth: '1180px',
    margin: '0 auto',
})

export const Button = styled('button', {
    position: 'relative',
    background: '$gray800',
    border: 'none',
    borderRadius: 6,
    padding: 12,
    cursor: 'pointer',
    transition: 'background .2s ease',

   '&:hover': {
        background: '$gray600'
    },

    span: {
        position: 'absolute',
        top: '-12px',
        right: '-12px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        fontSize: '$sm',
        fontWeight: 'bold',

        width: '24px',
        height: '24px',
        
        color: '$white',
        background: '$green500',

        borderRadius: '50%',
        outline: '4px solid $gray900'
    },
})