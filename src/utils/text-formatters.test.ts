import { titlecase, uppercase } from '@Utils/text-formatters'

// TESTING CONSTS
const ONE_WORD_ENTRY = 'test'
const TWO_WORDS_ENTRY = 'test testing'

// TEST BODY
describe('Utils -> text-formatters', () => {
    describe('uppercase', () => {
        it('should apply propperly with one word', () => {
            expect(uppercase(ONE_WORD_ENTRY)).toBe('TEST')
        })

        it('should apply propperly with more than 1 word', () => {
            expect(uppercase(TWO_WORDS_ENTRY)).toBe('TEST TESTING')
        })
    })

    describe('titlecase', () => {
        it('should apply propperly with one word', () => {
            expect(titlecase(ONE_WORD_ENTRY)).toBe('Test')
        })

        it('should apply propperly with more than 1 word', () => {
            expect(titlecase(TWO_WORDS_ENTRY)).toBe('Test Testing')
        })
    })
})
