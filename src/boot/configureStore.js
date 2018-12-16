import MainStore from '../store/DomainStore/HomeStore'
import LoginStore from '../store/ViewStore/LoginViewStore'
import AuthStore from '../store/DomainStore/AuthStore'

export default function () {
  const mainStore = new MainStore()
  const loginForm = new LoginStore()
  const authStore = new AuthStore()

  authStore.init()

  return {
    loginForm,
    mainStore,
    authStore
  }
}
