import disney from '../../assets/images/disney+.png'
import efood from '../../assets/images/efood.png'
import eplay from '../../assets/images/eplay.png'

import * as S from './styles'

const Card = () => (
  <>
    <S.Case to="https://siteclonedisneyplus.vercel.app/" target="_blank">
      <img src={disney} alt="Disney+" />
      <S.Title>Disney+</S.Title>
      <S.Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        fugiat delectus minus, ad molestiae quis deleniti dolorum voluptas
        deserunt, voluptatum mollitia, tenetur qui.
      </S.Description>
    </S.Case>
    {/*  */}
    <S.Case to="https://efood-fast.vercel.app/" target="_blank">
      <img src={efood} alt="Efood" />
      <S.Title>Efood</S.Title>
      <S.Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        fugiat delectus minus, ad molestiae quis deleniti dolorum voluptas
        deserunt, voluptatum mollitia, tenetur qui.
      </S.Description>
    </S.Case>
    {/*  */}
    <S.Case to="https://lojaprogames.vercel.app/" target="_blank">
      <img src={eplay} alt="Eplay" />
      <S.Title>Eplay</S.Title>
      <S.Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        fugiat delectus minus, ad molestiae quis deleniti dolorum voluptas
        deserunt, voluptatum mollitia, tenetur qui.
      </S.Description>
    </S.Case>
  </>
)

export default Card
