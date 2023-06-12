import { useEffect } from 'react';
import { Alert } from 'react-native';
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
import { ProductCard, ProductProps } from '@components/ProductCard';

import firestore from '@react-native-firebase/firestore';

import { TouchableOpacity } from "react-native";
import { useTheme } from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';

export function Home() {
  const { COLORS } = useTheme()

  function fetchPizzas(value: string) {
    const formattedValue = value.toLocaleLowerCase().trim()

    firestore()
    .collection('pizzas')
    .orderBy('name_insensitive')
    .startAt(formattedValue)
    .endAt(`${formattedValue}\uf8ff`)
    .get()
    .then(response => {
      const data = response.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      }) as ProductProps[]
    }) 
    .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a consulta.'))
  }

  useEffect(() => {
    fetchPizzas('') // traz tudo 
  }, [])

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