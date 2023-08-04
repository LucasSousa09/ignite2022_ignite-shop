import {styled} from '..'

export const SuccessContainer = styled('main', {
    margin: '0 auto',
    maxWidth: 1100,
    height: 656,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    h1: {
        color: '$gray100',
        fontSize: '$2xl',
        paddingBottom: '4rem',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 590,
        textAlign: 'center',
        lineHeight: 1.4,
        paddingBottom: '5.5rem'
    },

    a: {
        color: '$green500',
        fontSize: '$lg',
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: '.2s ease',

        '&:hover': {
            color: '$green300'
        },
    }


})

export const ImageContainer = styled('div', {
    height: 145,
    width: 130,
    
    marginBottom: '2rem',
    
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img:{
        objectFit: 'cover',
    },
})