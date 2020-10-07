import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;

`;



export const Row = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;

    padding: 16px 0;

    > a {
        font-size: 14px;
        text-decoration:none;
        color: var(--color-blue);

        padding: 2.5px 0;

        & + a {
            padding-left: 10px;
            border-left: 1px solid var(--color-border);
            margin-left:10px;

        }
    }
`



export const Painel = styled.div`
    background-color: var(--color-white);
    box-shadow: var(--painel-shadow);
    display:grid;
    grid-template-columns: 65fr 35fr;
`
 
 

export const Column = styled.div`
    + div{
        border-left:1px solid var(--color-border)
    }
`
 
 

export const  Section = styled.section`
    border-top: 1px solid var(--color-border);
    padding: 48px 32px;

    display:flex;
    flex-direction: column;

    >h4{
        margin-bottom: 40px;
        font-size: 18px;
    }

    > div{
        display:flex;
        flex-direction:column;

        > span + span {
            margin-top: 16px;
        }

        .title{
            font-size: 16px;
            color: var(--color-black);
        }

        .description{
            margin-top: 5px;
            font-size: 14px;
            color: var(--color-gray);
            line-height: 19px;
        }
    }

    > a {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 600;
            color: var(--color-blue);
            text-decoration:none;
        }
`
 
 
export const Description = styled.div`
    border-top: 1px solid var(--color-border);
    padding:44px 32px;

    >h2{
        font-size: 24px;

        margin-bottom:32px;


    }
    >p{
        font-size: 20px;
        color: var(--color-gray);
        line-height:27px;
    }
`


export const  Gallery = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    height: 530px;

    > img{
        height: 75%;
    }
`


export const SellerInfo = styled.div``
export const ProductAction = styled.div``