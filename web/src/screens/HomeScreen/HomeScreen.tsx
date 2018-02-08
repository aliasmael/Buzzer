import * as React from 'react'
import {
  Content,
  Container
} from 'native-base'
import AppHeader from '../../components/AppHeader/AppHeader'
import Stream from '../../components/Stream'

interface IHomeScreenProps {
  navigation: any
}

export default class HomeScreen extends React.Component<IHomeScreenProps> {
  render() {
    return (
      <Container>
        <AppHeader />

        <Content padder>
          <Stream />
        </Content>

      </Container>
    );
  }
}