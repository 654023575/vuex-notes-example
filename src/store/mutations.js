import {loadCollection} from '../database'

export default {
  setInitialData(state) {
    loadCollection('notes').then(collection => {
      // collection.insert([
      //   {body:'hello~'},
      //   {body:'hello11~'},
      // ])
      // db.saveDatabase()
      const _entites = collection.chain().find().simplesort('$loki', 'isdesc').data()
      state.entities = _entites
      console.log(this.entities)
    })
  }
}
