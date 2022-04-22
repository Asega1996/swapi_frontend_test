import { checkIfLanguagesAreTheSame } from './checkIfLanguagesAreTheSame'

// TESTING CONSTS
const ES_LANGUAGE_CODE = 'es'
const EN_LANGUAGE_CODE = 'en'

// TEST BODY
describe('Utils -> checkIfLanguagesAreTheSame', () => {
    it('should return true with a valid entry ', () => {
        expect(
            checkIfLanguagesAreTheSame(ES_LANGUAGE_CODE, ES_LANGUAGE_CODE)
        ).toBeTruthy()
    })
    it('should return false with an invalid entry ', () => {
        expect(
            checkIfLanguagesAreTheSame(ES_LANGUAGE_CODE, EN_LANGUAGE_CODE)
        ).toBeFalsy()
    })
})
