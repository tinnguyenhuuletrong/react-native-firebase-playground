import { observable, action } from 'mobx'
import firebase from 'react-native-firebase'

class HomeStore {
  @observable
  currentUser = null

  @observable
  isReady = false

  @observable
  isProcessing = false

  @action
  init () {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user
      this.isReady = true
    })
  }

  @action
  async loginWithAnonymous () {
    this.isProcessing = true
    await firebase.auth().signInAnonymously()
    this.isProcessing = false
  }

  @action
  async logout () {
    this.isProcessing = true
    await firebase.auth().signOut()
    this.isProcessing = false
  }
}

export default HomeStore
