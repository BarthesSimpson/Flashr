import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import styled from 'styled-components/native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import logo from './src/img/flashr_logo_lite.png' 


const FullScreenImage = styled.Image`
  flex: 1;
  resize-mode: contain;
`
const StyledView = styled.View`
  background-color: papayawhip;
  flex: 1;
`
const StyledStatusBar = styled.StatusBar`background-color: blue;`

function NiceStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StyledStatusBar translucent />
    </View>
  )
}

const Hello = () => (
  <StyledView>
    <NiceStatusBar />
    <Button
      large
      icon={{ name: 'squirrel', type: 'octicon' }}
      title="HELLO"
      buttonStyle={{ backgroundColor: 'blue' }}
    />
  </StyledView>
)

const Goodbye = () => (
  <StyledView>
    <NiceStatusBar />
    <Text>Goodbye!</Text>
  </StyledView>
)

const Tabs = TabNavigator({
  Hello: {
    screen: Hello
  },
  Goodbye: {
    screen: Goodbye
  }
})

export default class App extends React.Component {
  render() {
    return (
        <FullScreenImage style={{width: null, height: null}} source={logo} />
    )
  }
}