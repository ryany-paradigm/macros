import { expect } from 'chai'
import { spy } from 'sinon'
import { mutations, actions } from '@/store/weight'
const command = { weight: 84, date: new Date(2021, 5, 17) }

describe('The weight store module', () => {
  describe('mutations', () => {
    describe('add', () => {
      it('will push the weight and the current date onto the weigh-ins', () => {
        const state = { weighIns: [] }
        mutations.add(state, command)
        expect(state.weighIns).to.deep.equal([command])
      })
    })
  })

  describe('actions', () => {
    describe('add', () => {
      it('will pass through to the mutation', () => {
        const context = { commit: spy() }
        actions.add(context, command)
        expect(context.commit.getCall(0).args).to.deep.equal(['add', command])
      })
    })
  })
})
