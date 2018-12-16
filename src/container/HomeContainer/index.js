// @flow
import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import HomeScreen from './HomeScreen'
import data from './data'

export interface Props {
  navigation: any;
  mainStore: any;
}
export interface State {}

@inject('mainStore')
@observer
export default class HomeContainer extends React.Component<Props, State> {
  componentWillMount () {
    this.props.mainStore.fetchItems(data)
  }
  render () {
    const list = this.props.mainStore.items.toJS()
    return <HomeScreen navigation={this.props.navigation} list={list} />
  }
}
