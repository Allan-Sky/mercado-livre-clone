import React from 'react';

import { 
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SuportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon/>

        <div>
          <p>Localização</p>
          <strong>São Paulo , São paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li/>
          <li/>
          <li/>
          <li/>
          <li className="active"/>
        </ReputationThermometer>
      </ReputationCard>

      <ReputationRow>
        <div>
          <strong>561</strong>
          <span>vendas nos últimos 4 meses</span>
        </div>
        <div>
          <strong><SuportIcon/></strong>
          <span>vendas nos últimos 4 meses</span>
        </div>
        <div>
          <strong><ClockIcon/></strong>
          <span>vendas nos últimos 4 meses</span>
        </div>
      </ReputationRow>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
