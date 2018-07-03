<template>
  <div :class="$style.choice">
    <i :class="$style.edit" @click="$refs.in.focus()"> edit </i>

    <div 
      :class="$style.icon"
      @click="$refs.in.focus()"
      :style="{'border-radius': (this.type == 'radio') ? '10px' : '4px'}"/>

    <input :class="$style.input" placeholder="choice"
      :value="title"
      @input="$emit('input',$event.target.value)"
      ref="in"/>

    <i 
      :class="$style.delete" 
      v-if="canBeRemoved"
      @click="$emit('choice-delete', index)"
    > delete </i>
  </div>
</template>


<script>

  export default {
    name: 'Choice',

    components: {
      
    },

    props:{
      title: String,
      type: String,
      index: Number,
      canBeRemoved: Boolean
    },

    data() {
      return {
        
      }
    },
  }
</script>


<style module>

.choice {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.icon {
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border: 2px rgba(151, 151, 151, 0.555) solid;
}

.input {
  border-bottom: 1px rgb(94, 94, 94) solid;
  border-color: #68686800;
  color: #6b6b6b;
  width: 180px;
  font-size: 15px;
  -webkit-transition: border-color 0.2s ease-in-out;
  transition: border-color 0.2s ease-in-out;
  margin-right: 15px;
}

.input:focus {
  border-bottom: 1px solid #367edb;
  outline: none;
}

.input::placeholder {
  color: #00000049;
}

.delete, .edit {
  color: #636363;
  font-size: 20px;
}

.edit {
  margin-right: 7px;
}
</style>
