<template>
  <div v-if="state.matches('idle')">
    <p>What to do now?</p>
    <button @click="send('START')">START</button>
    or
    <button @click="send('QUIT')">QUIT</button>
  </div>
  <h1 v-if="state.matches('playing')">Now playing = {{ state.context.playerName }}</h1>
  <p v-if="state.matches('playing')">...and by the way, you're stuck here forever.</p>
</template>

<script setup lang="ts">
import { useActor } from "@xstate/vue";

type Props = {
  machine: any
}
const props = defineProps<Props>()

const { state, send } = useActor(props.machine.children.get('player'))

</script>

<style scoped>

</style>
