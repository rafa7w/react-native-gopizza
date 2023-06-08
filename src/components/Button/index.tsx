import { TouchableOpacityProps } from 'react-native';
import { Container, Load, Title, TypeProps } from "./styles";

type Props = TouchableOpacityProps & {
  type?: TypeProps;
  title: string;
  isLoading?: boolean;
}

export function Button({type = 'primary', title, isLoading = false, ...rest}: Props) {
  return (
    <Container 
      type={type}
      disabled={!isLoading}
      {...rest}
    >
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}