import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import NavigationHeader from '../components/NavigationHeader';
import { VictoryBar,VictoryLine,VictoryChart, VictoryTheme } from "victory-native";
import colors from '../config/colors';

const data = [
  {quarter: 'Jan', earnings: 13000},
  {quarter: 'Feb', earnings: 16500},
  {quarter: 'Mar', earnings: 14250},
  {quarter: 'Apr', earnings: 19000}
];

 function Statistics() {
  return (
    <Screen  Header={<NavigationHeader ScreenName="Statistics"/>}>
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryLine data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
     </Screen>
  )
}

export default Statistics;
const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.light,
    padding:10,
  }
})