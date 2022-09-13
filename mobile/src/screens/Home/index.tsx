import React from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg} 
        style={styles.logo}
      />

      <Heading  title="Find your Duo" subtitle="Select the game that you want to play"/>

      <FlatList 
        data={GAMES}
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