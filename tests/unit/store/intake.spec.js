import { expect } from 'chai'
import { spy } from 'sinon'
import { mutations, actions } from '@/store/intake'

describe('The intake store module', () => {
  const command = {
    name: 'Mixed Nuts',
    quantity: 4,
    macros: { proteins: 5, carbs: 7, fats: 15, calories: 183 },
    calories: 732
  }

  describe('mutations', () => {
    describe('add', () => {
      it('will include the new intake in the eaten list', () => {
        const state = { eaten: [] }
        mutations.add(state, command)
        expect(state.eaten).to.include(command)
      })
    })
  })

  describe('actions', () => {
    describe('add', () => {
      it('will commit the add mutation', () => {
        const commit = spy()
        const context = { commit }
        actions.add(context, command)

        // eslint-disable-next-line no-unused-expressions
        expect(commit.calledWith('add', command)).to.be.true
      })
    })
  })
})
