<template lang="html">
  <div class="item">
   <div class="meta">
   {{updated(entity)}}
   </div>
     <div class="content">
       <div class="header" v-on:click="open = !open">
         {{ header(entity) || '新建笔记' }}
     </div>

     <div class="extra">
     <editor v-bind:entity='entity'v-if="open"></editor>
     {{words(entity)}} 字
     <i class="right floated trash outline icon"
     v-on:click="destroy(entity)"
     >
     </i>
    </div>
    </div>
   </div>
</template>

<script>
import Editor from './Editor'
import {
  mapGetters,mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters(
      [
        'updated',
        'words',
        'header'
      ]
    )
  },
  methods:{
    ...mapActions([
      'destroy'
    ])
  },
  data(){
    return {
      open:false
    }
  },
  props: [
    'entity'
  ],
  components: {
    Editor
  }
}
</script>

<style lang="css">
</style>
