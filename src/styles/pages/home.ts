import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
    display: 'flex',
    // gap: '3rem',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    marginLeft: 'auto',
    minHeight: '656px',
})

export const Product = styled('div', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    minWidth: '656px',
    cursor: 'pointer',
    overflow: 'hidden',
    
    img: {
        objectFit: 'cover'
    },
    
    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        right: '0.25rem',
        left: '0.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '6px',
        backgroundColor: 'rgba(32,32,36,0.9)',
        padding: '1.25rem',
        paddingRight: '2rem',
        
        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',
        
        div: {
            strong: {
                display: 'block',
                color: '$gray100',
                fontSize: '$lg',
                lineHeight: 1.6,
            },
    
            span: {
                fontSize: '$xl',
                fontWeight: 'bold',
                color: '$green500',
                lineHeight: 1.4
            }
        },

        button: {
            background: '$green500',
            border: 'none',
            borderRadius: 6,
            padding: 12,
            cursor:  'pointer',
            transition: 'background .2s ease',

            '&:hover': {
                background: '$green300'
            }
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }
})