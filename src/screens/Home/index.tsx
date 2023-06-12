import { useEffect, useState } from 'react';
import { TouchableOpacity, Alert, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
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

import { useTheme } from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';

export function Home() {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  const [pizzas, setPizzas] = useState<ProductProps[]>([])
  const [search, setSearch] = useState('')

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

      setPizzas(data)
    }) 
    .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a consulta.'))
  }

  function handleSearch() {
    fetchPizzas(search)
  }

  function handleSearchClear() {
    setSearch('')
    fetchPizzas('')
  }

  function handleOpen(id: string) {
    navigation.navigate('product', {id})
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
        onChangeText={setSearch}
        value={search}
        onSearch={handleSearch}
        onClear={handleSearchClear}
      />

      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemsNumber>10 pizzas</MenuItemsNumber>
      </MenuHeader>

      <FlatList 
        data={pizzas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductCard 
            data={item}
            onPress={() => handleOpen(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24,
        }}
      />
    </Container>
  )
}