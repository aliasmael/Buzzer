import * as React from 'react'
import { Component } from 'react'
import { Header, Body, Title } from 'native-base'
import style from './style'

export default class AppHeader extends Component {
  render() {
    return (
      <Header style={style.header}>
        <Body style={style.body}>
          <Title style={style.title}>Buzzer</Title>
        </Body>
      </Header>
    )
  }
}