# Simple React TS (CRA) Api context -  ReactQuery - Chakra-ui

## Problem
Need start many projets with React TS (CRA) Api context Chakra-ui and structure folder

## Solution
A template with all the structure configured

##  This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

# Hiérarchie à suivre sur le projet

### Répertoire : `script`

Scripts utiles pour le fonctionnement du projet

- build / pre-commit etc ...

### Répertoire : `src`

Racine du projet

- contient uniquement `App.tsx`
- `setupTests.ts`
- et fichiers de configurations
- aucun autre composant doit être créer ici

### Répertoire : `src/__tests__`

Ici les tests unitaire lié à l'app  ( **non** **réutilisable** )

- répertoire contenant les tests unitaires

### Répertoire : `src/context`

contient tout les fichier de l'api context

- les hooks nécessaires aux contexte

### Répertoire : `src/utils`

Helpers / Utils Si **non réutilisable** dans autre app

Si réutilisable sur autre app (react-native ou autres) alors mettre dans common sinon ici ! 

- contiens tous les helpers
- et les hooks customisés

### Répertoire : `src/common`

 Contient le code Général de l'app   ( **réutilisable** ) toujours penser Si je met mon code sur un autre projet ça doit marcher ! Demain tu lance app mobile tu prend tu colle ça marche comme un module npm. 

- `src/common/constantes` constantes générique
- `src/common/utils/` Les utils / helpers.
- `src/common/api/`
    - `/clients` fonctions call api  exemple  :  login()
    - `/GraphQl/`  pour les const générer par graphQL et autres  ps : a voir
    - `/hooks/` les hooks avec logic **SIMPLE**  lié aux API exemple : useLogin()
- `src/common/__tests__/` Tests unitaire du common

### Répertoire : `src/components`

composants react

- `/icons`  Composant qui retourne icon svg , *peut etre pas utilisé dans ce projet*
- `/ui` Uniquement les composants lié aux design simple ex: <Button>
- `MonComposant/index.tsx/` Composant composé de plusieurs autres
- `index.ts` fichier qui export * from `import { MonCompo } from '/components'`

### Répertoire : `src/forms`

Ici uniquement les formulaire réutilisable exemple  `input + output` pas de call api dedans

- `/partials` des morceaux de form ex : `<AddressForm/>` qui peut être utilisé dans autre form
- `/school/` Si bcp de form regrouper par groupes

### Répertoire : `src/modals`

Ici toutes les modal ( popup )  réutilisables , exemple : popup de confirmation de sauvegarde ou avertissement évite de recoder la logic de la modal open/close etc...

- À la racine créer 1 composant de gestion des modal comme <Dialog /> de material les autre modal utilise ce composant si demain on change de system de modal on change 1 fichier.
- `/school/` Si bcp de modals regrouper par groupes
- Une modal peut contenir un form  des composant etc..

### Répertoire : `src/hooks`

Les hooks lié à cette app front web seulement ( **non réutilisable** ) 

- Par exemple un hook useShowMessage  contrairement au hook de /common on peut pas le reprendre.
- `/src/hooks/school`
- `/src/hooks/studient`

### Répertoire : `src/routes`

Ici les Routes ( voir si on renomme en routes ) 

- `/sous-router` Ce dossier contient 1 index.tsx qui va lui avoir les routes ex `<SchoolsownerRoutes/>`

### Répertoire : `src/theme`

ne pas modifier ou ajouter des fichiers dedans car il seront écraser par le code générer par `hyperTheme`

- contient le thème de `charka ui`
- 

### Répertoire : `src/types`

Certaines lib ne propose pas les types on peut les recréer ici pour quelle soit utilisé partout.  `MesTypes.d.ts` d.ts pour qu'ils soit global

- Éviter les libs sans les types mais parfois pas le choix  donc on rajoute les types
- 

[]() 
## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
