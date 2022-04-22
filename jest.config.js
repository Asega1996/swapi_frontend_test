// eslint-disable-next-line no-undef
module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '\\.svg$': 'svg-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '^@Components(.*)$': '<rootDir>/src/components$1',
        '^@Styles(.*)$': '<rootDir>/src/styles$1',
        '^@Utils(.*)$': '<rootDir>/src/utils$1',
        '^@Store(.*)$': '<rootDir>/src/store$1',
        '^@Services(.*)$': '<rootDir>/src/services$1',
        '^@Screen(.*)$': '<rootDir>/src/screen$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    testEnvironment: 'jsdom',
}
