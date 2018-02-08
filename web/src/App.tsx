import * as Expo from 'expo'
import { AppLoading } from 'expo'
import * as React from 'react'
import { Container } from 'native-base'
import style from './style'
import Navigator from './navigation/index'
import { Provider } from 'react-redux'
import store from './redux/store'

interface IAppProps {

}

interface IAppState {
  isReady: boolean
}

let initialState: IAppState = {
  isReady: false
}

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = initialState
  }

  async _loadAssetsAsync() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      'FontAwesome': require('native-base/Fonts/FontAwesome.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading
        startAsync={this._loadAssetsAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    }

    return (
      <Provider store={store}>
        <Container style={style.container}>
          <Navigator />
        </Container>
      </Provider>
    );
  }
}