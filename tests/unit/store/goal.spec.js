import { expect } from 'chai'
import { spy } from 'sinon'
import { mutations, actions } from '@/store/goal'

describe('The goal store module', () => {
  describe('mutations', () => {
    describe('set', () => {
      it('will update the current goal', () => {
        const state = { goal: 'cut' }
        mutations.set(state, 'bulk')
        expect(state.goal).to.equal('bulk')
      })
    })
  })

  describe('actions', () => {
    describe('set', () => {
      it('will mutate the current goal', () => {
        const context = { commit: spy() }
        const goal = 'bulk'
        actions.set(context, goal)

        // eslint-disable-next-line no-unused-expressions
        expect(context.commit.calledWith('set', 'bulk')).to.be.true
      })
    })
  })
})
