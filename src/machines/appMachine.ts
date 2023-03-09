import { createMachine } from "xstate";
import agreeMachine from './agreeMachine'
import playMachine from './playMachine'

export default createMachine({
  predictableActionArguments: true,
  id: 'parent',
  initial: 'idle',
  context: {
    playerName: 'Jorinho'
  },
  states: {
    idle: {
      on: { ACTIVATE: 'active' },
    },
    active: {
      invoke: {
        id: 'agree',
        src: agreeMachine,
        onDone: [
          { target: 'end', cond: (context, event) => event.data.agreed === false },
          { target: 'play', cond: (context, event) => event.data.agreed === true },
        ],
      }
    },
    play: {
      invoke: {
        id: 'player',
        src: playMachine,
        data: {
          playerName: (context) => context.playerName
        },
        onDone: 'end'
      }
    },
    end: {},
  },
})
