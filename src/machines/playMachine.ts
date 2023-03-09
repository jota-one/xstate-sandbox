import {createMachine} from "xstate";

export default createMachine({
  predictableActionArguments: true,
  initial: 'idle',
  context: {
    playerName: 'Unknown player'
  },
  states: {
    idle: {
      on: {
        START: 'playing',
        QUIT: 'end'
      },
    },
    playing: {},
    end: {
      type: 'final',
    },
  },
})
