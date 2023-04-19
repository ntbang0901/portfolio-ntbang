import auth from '../modules/auth'
import { createStore } from 'vuex'
import todos from '../modules/todo'

const storeDate = {
  modules: {
    auth,
    todos
  }
}

const store = createStore(storeDate)

export default store
