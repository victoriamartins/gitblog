import { Container } from './styles'
import cover from '../../assets/cover.jpg'

export function Cover() {
  return (
    <Container>
      <img
        src={cover}
        alt="Imagem abstrata azul composta por linhas horizontais e o texto Github Blog no centro"
      />
    </Container>
  )
}
