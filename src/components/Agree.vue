<template>
  <h1>state = {{ state.value }}</h1>
  <button @click="send('YES')">YES</button>
  or
  <button @click="send('NO')">NO</button>
</template>

<script setup lang="ts">
import { useActor } from "@xstate/vue";

type Props = {
  machine: any
}
const props = defineProps<Props>()

const { state, send } = useActor(props.machine.children.get('agree'))

</script>

<style scoped>

</style>
