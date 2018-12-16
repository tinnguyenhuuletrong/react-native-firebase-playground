import * as React from 'react'
import { Text, Container, List, ListItem, Content } from 'native-base'
import { NavigationActions, StackActions } from 'react-navigation'
import { inject } from 'mobx-react/native'

const routes = [
  {
    route: 'Home',
    caption: 'Home'
  },
  {
    route: 'BlankPage',
    caption: 'Blank Page'
  },
  {
    route: 'Login',
    caption: 'Logout'
  }
]

export interface Props {
  navigation: any;
  authStore: any;
}
export interface State {}
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })]
})

@inject('authStore')
export default class Sidebar extends React.Component<Props, State> {
  render () {
    const {
      authStore: { logout }
    } = this.props
    return (
      <Container>
        <Content>
          <List
            style={{ marginTop: 40 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={async () => {
                    if (data.route === 'Login') {
                      await logout()
                      this.props.navigation.dispatch(resetAction)
                    } else {
                      this.props.navigation.navigate(data.route)
                    }
                  }}
                >
                  <Text>{data.caption}</Text>
                </ListItem>
              )
            }}
          />
        </Content>
      </Container>
    )
  }
}
