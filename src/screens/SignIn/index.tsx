import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { 
  Brand, 
  Container, 
  Content, 
  Title, 
  ForgotPasswordButton,
  ForgotPasswordLabel
} from "./styles";
import brandImg from "@assets/brand.png"
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function SignIn() {
  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Brand source={brandImg}/>
          <Title>Login</Title>
          <Input 
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input 
            placeholder="Senha"
            type="secondary"
            secureTextEntry
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button 
            title="Entrar"
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}