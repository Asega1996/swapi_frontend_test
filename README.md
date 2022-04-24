# Prueba técnica Alejandro Segovia Gallardo

## Descripción

Aplicación desarrollada haciendo uso de la librería React y la [API pública de Star Wars](https://swapi.dev):

## Aplicación

## Pre-requisitos

Se requiere tener instalado yarn o npm:

-   [yarn](https://yarnpkg.com/)
-   [npm](https://www.npmjs.com/get-npm)

## Iniciar aplicación

### Arranque inicial

Para el arranque de la aplicación por primera vez es necesario la instalaciión de dependencias de proyecto a través de los comandos proprocionados por npm o yarn.

-   `npm i`
-   `yarn`
    Posteriormente, la aplicación puede ser lanzada mediante el comando `yarn start` o `npm start`, lo cual desplegará la aplicación en un entorno local [http://localhost:3000](http://localhost:3000) a través del puerto 3000 por defecto.

### Arranques posteriores

Una vez las dependencias estan instaladas podremos lanzar la aplicación siempre que lo deseemos a través de los comandos `yarn start` o `npm start` al igual que en apartado anterior.

## Testing

### Herramientas utilizadas

Para la realización de pruebas unitarias se ha utilizado Jest y React Testint Library como core.

Dichos test unitarios localizados al mismo nivel que los diferentes componentes que testean (ficheros `index.test.tsx`)

### Configuración Jest

La configuración por defecto de Jest es visible en el fichero `jest.config.js` exsistente en el directorio raiz de este proyecto, la cual es:

```
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
```

### Ejecución de los test

Para lanzar los test es necesario haber instalado las dependencias del proyecto previamente.

En el caso de que dichas dependencias estén ya instaladas, pueden ejecutarse haciendo uso de los comandos `yarn test` o `npm test`

## Dependencias del proyecto

-   [Babel](https://babeljs.io/): Compilador javascript
-   [TypeScript](https://www.typescriptlang.org/): Superconjunto del lenguaje Javascript para la gestión de tipos
-   [Eslint](https://eslint.org/): Herramienta para definir patrones sobre código JavaScript
-   [Prettier](https://prettier.io/): Formateador de código automático
-   [React](https://es.reactjs.org/): Librería para construir interfaces de usuario/SPAs con JavaScript
-   [React Router](https://reactrouter.com/): Gestor de rutas para la navegación de la aplicación
-   [Redux](https://es.redux.js.org/): Gestor de estados de la aplicación
-   [Redux-saga](https://redux-saga.js.org/): Librería de manejo de side-effects a través de funciones generadoras
-   [Deox](https://deox.js.org): Librería para aplicar un enfoque funcional al flujo de Redux.
-   [Ramda](https://ramdajs.com): Librería de funciones diseñada para realizar programación funcional
-   [React-i18next](https://react.i18next.com/): Plugin de internacionalización para el soporte multidioma
-   [Material UI](https://material-ui.com/): Librería de componentes
-   [Styled Components](https://styled-components.com/): Para la estilización de componentes a través de css
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): Librería para ejecutar tests con jest en React
-   [jest](https://jestjs.io/): Librería de test para JavaScript
-   [Rescripts](https://github.com/harrysolovay/rescripts): Framework para ejecución de scripts de configuración

## Estructura del proyecto

    .
    ├── __mocks__                   # Módulos mockeados utilizados para los test
    ├── public
    │   └── locales                 # Traducciones separadas por código de idioma
    ├── src                         # Contenido de nuestra aplicación
    │   ├── assets                  # Imágenes e iconos(svg) usados en la aplicación
    │   ├── components              # Componentes desarrollados
    │   │   └── {ComponentName}
    │   │       ├── index.test.tsx  # Tests del componente
    │   │       ├── index.tsx       # Componente principal
    │   │       ├── styles.ts       # Estilos/componentes estilizados usados de apoyo (en index.tsx) para la creación del componente
    │   │       └── types.ts        # Tipos del componente
    │   ├── layoyt                  # Layoyt principal de la aplicación
    │   │   └── components          # Componentes del layout
    │   │       ├── Header          # Header de la aplicación
    │   │       ├── Footer          # Componentes de la aplicación
    │   │       └── Content         # Componente de contenido donde se renderizan los componentes de las rutas de la aplicación
    │   ├── routes                  # Configuración de rutas
    │   ├── sreens                  # Lista de pantallas de la aplicación
    │   │   └── {ScreenName}
    │   ├── services                # Configuración de servicios
    │   ├── store                   # Configuración de la store de redux
    │   │   ├── actions             # Listado de acciones permitidas por el store
    │   │   ├── constants           # Constantes utilizadas para el store
    │   │   ├── reducers            # Reducers de la aplicación
    │   │   └── sagas               # Manejadores de los side effects
    │   ├── utils                   # Funciones de utilidad usadas en la aplicación
    │   ├── styles                  # Configuración del tema y estilos generales
    │   ├── App.tsx                 # Desarrollo del componente App exportado para el punto de entrada
    │   ├── index.css
    │   ├── index.tsx               # Punto de entrada de la aplicación
    │   └── react-app-env.d.ts
    ├── .babelrc                    # Configuración de babel
    ├── .eslintrc.js                # Configuración de la herramienta eslint
    ├── .gitignore                  # gitignore del proyecto
    ├── .prettierrc                 # Configuración de Prettier para el formateo de código
    ├── .rescriptsrc.js             # Configuración de rescripts para los alias y su integración con babel
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json               # Configuración de Typescript
    └── tsconfig.paths.json         # Listado de alias
