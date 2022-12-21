# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

ESTRUCTURAS DE LAS CARPETAS

**imagen de estructura

pure: Esta carpeta esta dentro de components y lo que contiene son aquellos archivos .jsx utilizados (componentes), tambien dentro de ella podemos tener otros componentes en otras carpetas como forms por ejemplo.

container: Esta carpeta esta dentro de components, son componentes de orden superior, componentes que renderizan a componentes de mas bajo nivel, los componentes de tipo contenedor van a ser los encargados de llevar la logica y los datos. 

hooks: Esta carpeta esta a la misma altura que components, dentro de hooks vamos a crear nuestros propios hooks. 

routes: Esta carpeta al igual que hooks va a estar a la misma altura que components, y lo que se coloca en su interior son las rutas de nuestro proyecto. Estableceremos que ruta va con cada componente.

pages: Otra carpeta asi como las dos anteriormente mencionadas es pages, que lo que contiene son archivos .jsx que rendericen una pagina

models: Esta carpeta esta dentro de src y la idea de la misma es crear datos o especificar los datos con los que vamos a trabajar

HOOKS   

Los hooks son funciones que se incorporaron en 2018/19 que lo que hacen es especificar mecanismos para trabajar con componentes funcionales, mientras que los componentes de tipo clase tenian un constructor o metodos privados. Cuando creamos componentes de tipo funcion que lo que devuelven son otros componentes (.jsx) necesitamos un mecanismo que nos ayude a trabajar con estados o con otras cosas como referencias. 