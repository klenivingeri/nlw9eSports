import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../component/GameCard';
import { Heading } from '../../component/Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games'

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        horizontal
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />

    </View>
  );
}


// keyExtractor: chave, valor unico

// FLatlist: horizontal deixa horizontal
// showsHorizontalScrollIndicator: remove a rolagem