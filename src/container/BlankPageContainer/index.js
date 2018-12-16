// @flow
import * as React from 'react'
import BlankScreen from './BlankScreen'
export interface Props {
  navigation: any;
}
export interface State {}
export default class BlankPageContainer extends React.Component<Props, State> {
  render () {
    return <BlankScreen navigation={this.props.navigation} />
  }
}
