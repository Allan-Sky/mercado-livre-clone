import React from 'react';

import { 
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  IntallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Action,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 9 vendidos</Condition>

      <Row>
        <h1>Camiseta branca de marca desconhecida</h1>

        <HeartIcon />
      </Row>

      <DispatchTag>Enviado normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
           <span className="symbol">R$</span>
           <span className="fraction">34</span>
           <span className="cents">99</span>

        </PriceRow>

        <IntallmentsInfo>em 3x de R$ 11,67 </IntallmentsInfo>

      </PriceCard>

      <StockStatus>Estoque disponivel</StockStatus>

      <MethodCard>
        <CheckIcon/>

        <div>
          <span className="title">Frete gratis</span>
          <span className="details">Benefio lorem ipsum</span>
          <a href="#" className="more">Ver mais opções</a>

        </div>
      </MethodCard>
      
      <Action>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Action>

      <Benefits>
        <li>
          <ShieldIcon/>
          <p>Compra garantida, receba o produto que esta esperando ou devolvemos seu dinheiro.</p>
        </li>
      </Benefits>

    </Container>
  )
}

export default ProductAction;
