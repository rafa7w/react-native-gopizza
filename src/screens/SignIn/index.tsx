import { useState } from 'react';
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
import { useAuth } from '@hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, isLogging, forgotPassword } = useAuth()

  function handleSignIn() {
    signIn(email, password)
  }

  function handleForgotPassword() {
    forgotPassword(email)
  }

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
            onChangeText={setEmail}
            />
          <Input 
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />
          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button 
            title="Entrar"
            type='secondary'
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}