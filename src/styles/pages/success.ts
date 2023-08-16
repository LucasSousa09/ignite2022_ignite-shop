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
        paddingBottom: '1.5rem',
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

export const ImagesBox = styled('div', {
    display: 'flex',

    marginBottom: '3rem',
})

export const ImageContainer = styled('div', {
    height: 140,
    width: 140,
    
    
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '50%',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    img:{
        objectFit: 'cover',
        borderRadius: '50%',
        height: '100%',
        width: '100%',
        boxShadow: '0 0 60px 12px rgba(0,0,0,0.8)',
    },
    
    '&:nth-child(1)': {
        
    },

    '&:nth-child(2)': {
        marginLeft: -55
    },

    '&:nth-child(3)': {
        marginLeft: -55
    }
})

