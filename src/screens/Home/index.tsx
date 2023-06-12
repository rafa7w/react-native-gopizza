import happyEmoji from '@assets/happy.png';
import { 
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Title,
  MenuHeader,
  MenuItemsNumber

} from "./styles";

import { Search } from '@components/Search';
import { ProductCard } from '@components/ProductCard';

import { TouchableOpacity } from "react-native";
import { useTheme } from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';

export function Home() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji 
            source={happyEmoji}
          />
          <GreetingText>Olá, Admin</GreetingText>
        </Greeting>

        <TouchableOpacity>
          <MaterialIcons 
            name='logout' 
            color={COLORS.TITLE}
            size={24}
          />
        </TouchableOpacity>

      </Header>

      <Search 
        onSearch={() => {}}
        onClear={() => {}}
      />

      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemsNumber>10 pizzas</MenuItemsNumber>
      </MenuHeader>

      <ProductCard 
        data={{id: '1', name: 'Pizza', description: 'Ingredientes dessa pizza', photo_url: 'https://github.com/rafa7w.png'}}
      />
    </Container>
  )
}