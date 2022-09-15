import React, {useEffect, useState} from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.135:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  },[])

  return (
    <View style={styles.container}>
      <Image 
        source={logoImg} 
        style={styles.logo}
      />

      <Heading  title="Find your Duo" subtitle="Select the game that you want to play"/>

      <FlatList 
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard 
          data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

    </View>
  );
}