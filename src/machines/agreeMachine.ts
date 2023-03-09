import {createMachine, assign} from "xstate";

export default createMachine({
  predictableActionArguments: true,
  initial: 'question',
  context: {
    decision: undefined as boolean|undefined
  },
  states: {
    question: {
      on: {
        YES: 'confirm',
        NO: {
          target: 'end',
          actions: assign({
            decision: (context, event) => false
          })
        }
      },
    },
    confirm: {
      on: {
        YES: {
          target: 'end',
          actions: assign({
            decision: (context, event) => true
          })
        },
        NO: 'question'
      },
    },
    end: {
      type: 'final',
      data: (context, event) => ({
        agreed: context.decision
      })
    },
  },
})
