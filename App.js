import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './Src/Components/Login';
import { Spinner } from 'native-base';
import Estilos from './Src/Css/Estilos';
import { LinearGradient } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Load: false }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ Load: true });
  }

  render() {
    if (this.state.Load) {
      return (<Navigation></Navigation>);
    } else {
      return (
        <LinearGradient colors={['#800080', '#000']} start={[0, 1]} end={[1, 0]} style={[Estilos.Content, Estilos.CenterFlex]}>
          <Spinner color='violet' size='large'></Spinner>
        </LinearGradient>
      )
    }
  }
}

const Navigation = createStackNavigator({
  Login: { screen: Login, navigationOptions: () => ({ header: null }) }
})