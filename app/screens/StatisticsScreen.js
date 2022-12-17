import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import NavigationHeader from '../components/NavigationHeader';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

 function Statistics() {
  return (
    <Screen  Header={<NavigationHeader ScreenName="Statistics"/>}>
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
     </Screen>
  )
}

export default Statistics;
const styles = StyleSheet.create({})