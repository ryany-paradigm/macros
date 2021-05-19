import { expect } from 'chai'
import { spy } from 'sinon'
import { mutations, actions } from '@/store/balance'

describe('The balance store module', () => {
  const request = { proteins: 187, carbs: 187, fats: 178 }

  describe('mutations', () => {
    describe('store', () => {
      it('will update the local macronutrient balance', () => {
        const state = { balance: { proteins: 0, carbs: 0, fats: 0 } }
        mutations.store(state, request)
        expect(state.balance).to.deep.equal(request)
      })
    })
  })

  describe('actions', () => {
    describe('store', () => {
      it('will call the store mutation', () => {
        const commit = spy()
        const context = { commit }
        actions.store(context, request)

        // eslint-disable-next-line no-unused-expressions
        expect(commit.calledWith('store', request)).to.be.true
      })
    })
  })
})
