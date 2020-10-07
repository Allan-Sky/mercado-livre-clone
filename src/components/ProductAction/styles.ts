import styled from 'styled-components';

import { HiOutlineHeart, HiOutlineCheck, HiOutlineShieldCheck} from 'react-icons/hi'



export const Container = styled.div`
    padding: 32px;
    display:flex;
    flex-direction:column;
`;

export const Condition = styled.div`
    font-size: 14px;
    color: var(--color-gray);
    margin-bottom: 16px;
`

export const Row = styled.div`
    display:flex;
    justify-content:space-between;

    >h1{
        width: 100%;
        font-size:24px;
        font-weight: 600;
    }
`

export const HeartIcon = styled(HiOutlineHeart)`
    width:28px;
    height: 28px;
    color: var(--color-blue);
    flex-shrink:0;
    margin-left: 16px;
    cursor:pointer;
`

export const DispatchTag = styled.div`
    margin-top: 12px;
    background-color: var(--color-blue);
    color:var(--color-white);
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 14px;
    width:fit-content;
    font-weight: 600;
`

export const PriceCard = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 18px;
`

export const PriceRow = styled.div`
    display:flex;
    align-items: flex-start;
    font-size: 44px;
    font-weight: 300;

    .fraction{
        margin-left:8.8px;
    }

    .cents{
        font-size: 20px;
        padding-top:3px;
        margin-left: 2px;
    }
`

export const IntallmentsInfo = styled.div`
    font-size: 16px;
`

export const StockStatus = styled.div`
    margin-top:24px;
    font-size: 18px;
`

export const MethodCard = styled.div`
    margin-top: 24px;
    display:flex;
    > div {
        margin-left: 8px;
        display: flex;
        flex-direction: column;

        .title{
            color: var(--color-green);]
            font-size: 16px;
        }

        .details {
            margin-top: 5px;
            color: var(--color-gray);
            font-size: 14px;
        }

        .more{
            color: var(--color-blue);
            font-size: 14px;
            text-decoration:none;
            margin-top: 5px;
            font-weight: 600
        }

        
        
    }
    `

export const CheckIcon = styled(HiOutlineCheck)`
    width:24px;
    height: 24px;

    color: var(--color-green);
`

export const Action = styled.div`
    margin-top: 16px;
    display:flex;
    flex-direction:column;
`

type ButtonProps = {solid?: boolean}

export const Button = styled.button<ButtonProps>`
    display:flex;
    align-items: center;
    justify-content:center;

    font-size: 15px;
    border-radius: 4px;
    padding: 12px 10px;
    margin-top: 10px;

    color: ${props => props.solid ? 'var(--color-white)' : 'var(collor-white)'};
    background:${props => props.solid ? 'var(--color-blue)' : 'transparent'};
    border: ${props => props.solid ? 'none' : '1px solid var(--color-blue)'};
    cursor: pointer;
`   

export const Benefits = styled.ul`
    margin-top: 16px;
    list-style:none;
    display:flex;
    flex-direction:column;
    

    li{
        display:flex;
        align-items:flex-start;
        p{
            margin-top: 10px;
            color: var(--color-gray);
            font-size:14px;
        }
    }
`

export const ShieldIcon = styled(HiOutlineShieldCheck)`
    width:20px;
    height: 20px;
    flex-shrink:0;
    color: var(--color-gray);
`

