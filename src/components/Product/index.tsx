import React from 'react';
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'
import { Container,
   Row ,
   Painel ,
   Column , 
   Section ,
   Description, 
   Gallery, 
 
    } from './styles'


import tshirtImage from '../../assets/tshirt.png'

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Painel>
        <Column>
            <Gallery>
              <img alt="t-shirt" src={tshirtImage}/>
            </Gallery>

            <Info />
        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo/>
          <WarrantySection/>
          <WarrantySection/>
          <WarrantySection/>
        </Column>
      </Painel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o lorem ipsum</p>
        <p className="description">Receba o produto que voce esta esperando ou devolvemos o seu dinheiro</p> 
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem Garantia</p> 
      </span>
    </div>s

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum eros nec posuere lacinia. Nam nec augue magna. In eu metus nec lacus aliquam vulputate et sit amet enim. Vestibulum sed mattis tortor, nec posuere nibh. In hendrerit augue a tellus accumsan venenatis. Sed faucibus, turpis et lacinia fermentum, lectus odio aliquam mauris, at tincidunt quam urna vitae magna. Fusce feugiat sapien eu quam viverra, id ultricies nulla tempus. Cras dapibus ex a lacus consectetur cursus.
    <br/>
    <br/>
    Intens inclusos: <br />
    - 1 x urubu sem pelo <br />
    - 1 x urubu sem pelo <br />
    - 1 x urubu sem pelo <br />
    - 1 x urubu sem pelo <br />
    - 1 x urubu sem pelo <br />
    - 1 x urubu sem pelo <br />
    <br/>
    Integer ullamcorper tortor nec tellus accumsan laoreet eu eget magna. Aliquam dapibus vehicula lacus nec eleifend. Cras fringilla velit id neque lobortis, eu malesuada ante semper. Pellentesque ac iaculis nunc. Donec et malesuada nisl. In fermentum arcu id purus viverra volutpat. Nullam auctor dui lectus, sit amet malesuada leo commodo vitae. Maecenas tempus elit id porttitor ornare. Proin ligula tellus, elementum id tortor id, interdum tempus risus. Praesent quis ipsum fermentum, interdum dolor nec, aliquet nisi. Curabitur ornare, sapien sed pretium efficitur, erat lorem feugiat ipsum, vel pellentesque elit diam lobortis felis.

    In bibendum ex iaculis ante dictum, quis mollis mi lobortis. Fusce faucibus, lectus sit amet tristique efficitur, sem augue scelerisque purus, vel porttitor massa leo non magna. Suspendisse bibendum nisi eget magna molestie fringilla. In eget lorem neque. Vestibulum justo risus, facilisis et sollicitudin vitae, pulvinar sed nisi. Nullam suscipit egestas lacus vitae accumsan. Donec mollis, libero non tincidunt varius, erat nunc sollicitudin purus, eu auctor eros metus quis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi facilisis nec erat in elementum. Morbi in sem risus. Fusce eget rhoncus ante. Fusce scelerisque quam sit amet varius tempor. Aliquam at libero ac felis iaculis cursus. Aenean semper tortor nec tincidunt efficitur.
    </p>
  </Description>
)

export default Product;
