<script setup lang="ts">
import { ref, computed } from 'vue'
import appMachine from "../machines/appMachine";
import Agree from "./Agree.vue";
import Play from "./Play.vue";
import {useMachine} from "@xstate/vue";

defineProps<{ msg: string }>()

const count = ref(0)

const { state, send, service } = useMachine(appMachine)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <button @click="send('ACTIVATE')">ACTIVATE</button>
  <div style="text-align: left;">
    <h2>App State</h2>
    <pre>{{ state.value }}</pre>
  </div>

  <Agree v-if="state.matches('active')" :machine="service" />
  <Play v-if="state.matches('play')" :machine="service" />

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
