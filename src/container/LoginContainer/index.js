// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast, View, Spinner } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import LoginScreen from './LoginScreen'

export interface Props {
  navigation: any;
  loginForm: any;
  authStore: any;
}
export interface State {}

@inject('loginForm', 'authStore')
@observer
export default class LoginContainer extends React.Component<Props, State> {
  goToMainMenu () {
    this.props.loginForm.clearStore()
    this.props.navigation.navigate('Drawer')
  }

  login () {
    this.props.loginForm.validateForm()
    if (this.props.loginForm.isValid) {
      this.goToMainMenu()
    } else {
      Toast.show({
        text: 'Enter Valid Email & password!',
        duration: 2000,
        position: 'top',
        textStyle: { textAlign: 'center' }
      })
    }
  }

  componentDidUpdate () {
    const {
      authStore: { currentUser }
    } = this.props
    if (currentUser) {
      this.goToMainMenu()
    }
  }

  loginAnonymous () {
    const { authStore } = this.props
    authStore.loginWithAnonymous()
  }

  _renderLoginForm (form) {
    const Fields = (
      <Form>
        <Item error={!!form.emailError}>
          <Icon active name='person' />
          <Input
            placeholder='Email'
            keyboardType='email-address'
            value={form.email}
            onBlur={() => form.validateEmail()}
            onChangeText={e => form.emailOnChange(e)}
          />
        </Item>
        <Item error={!!form.passwordError}>
          <Icon active name='unlock' />
          <Input
            placeholder='Password'
            value={form.password}
            onBlur={() => form.validatePassword()}
            onChangeText={e => form.passwordOnChange(e)}
            secureTextEntry
          />
        </Item>
      </Form>
    )
    return (
      <LoginScreen
        navigation={this.props.navigation}
        loginForm={Fields}
        onLogin={() => this.login()}
        onLoginAnonymous={() => this.loginAnonymous()}
      />
    )
  }

  render () {
    const form = this.props.loginForm
    const {
      authStore: { currentUser, isProcessing, isReady }
    } = this.props

    if (!isReady || isProcessing) return <Spinner />
    else return currentUser ? <View /> : this._renderLoginForm(form)
  }
}
