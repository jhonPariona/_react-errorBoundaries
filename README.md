<h1 align="center">⚛️ Error Boundaries(Límites de error)</h1>
<p align="center">
Son class components que se usan para <b>capturar errores</b> inesperados en el arbol de <b>componentes hijos</b>  (<a href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010">no captura errores de componentes en un mismo nivel</a>)
</p>
<p align="center">
<i>Introducido en React 16, solo funciona para class components</i>
</p>

[📖 Documentación](https://es.reactjs.org/docs/error-boundaries.html) |
[📖 API DOC](https://reactjs.org/docs/react-component.html#error-boundaries) |
[🎬 Codevolution](https://www.youtube.com/watch?v=DNYXgtZBRPE)

<p align="center">
<img src="https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/38945/hmLZ5RnRgqrEBXdXpIYQ_Error_handling_in_React_16_using_Error_Boundaries.png.jpg" alt="ref img"/>
</p>

> Por ejemplo, en Facebook Messenger se envuelven los contenidos de la barra lateral, el panel de información, el registro de conversaciones, y el input de mensajes en límites de errores separados. Si falla un componente en una de esas áreas de la interfaz, el resto continúan estando interactivos

## No captura errores en

- [Manejadores de eventos](https://es.reactjs.org/docs/error-boundaries.html#how-about-event-handlers): para manejar estos errores debemos usar try catch.
- Código asyncrónico
- Server-side rendering

## [static getDerivedStateFromError(error)](https://github.com/jhonPariona/_react-errorBoundaries/blob/f4ba0b54470ef5a9a0a2f168c2c93414cd8766fc/src/components/ErrorBoundary.jsx#L8)

[📖 API DOC](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)

Se usa para **_renderizar una interfaz alternativa(fallback UI)_**.

Se llama despues de que el componente lanza una excepción, recibe el error y debe retornar una actualización al estado y luego recién ocurre el render.

```jsx
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // retorna una actualización del estado
    return { hasError: true };
  }

  render() {
    // destructuring of state
    const { hasError } = this.state;

    //fallback UI render
    if (hasError) {
      return <p>Opss Ocurrio un error!</p>;
    }

    return this.props.children;
  }
}
```

## [componentDidCatch(error, infoError)](https://github.com/jhonPariona/_react-errorBoundaries/blob/f4ba0b54470ef5a9a0a2f168c2c93414cd8766fc/src/components/ErrorBoundary.jsx#L13)

[📖 API Doc](https://reactjs.org/docs/react-component.html#componentdidcatch)

Se usa para **_errores de registro_**.

Se llama en la fase de commit cuando se renderiza el componente.

```jsx
class ErrorBoundary extends React.Component {
  // ...getDerivedStateFromError
  componentDidCatch(error, infoError) {
    // podemos usar sentry para hacer el registro de errores
    console.log("ErrorBoundary -> componentDidCatch -> error🚫", error);
    console.log(
      "ErrorBoundary -> componentDidCatch -> infoError ⚠️",
      infoError.componentStack
    );
  }
  // ...getDerivedStateFromError
}
```

> En el caso de un error, puede representar una IU alternativa con una componentDidCatch() llamando a setState, pero esto quedará en desuso en una versión futura. Utilícelo static getDerivedStateFromError() para manejar el renderizado alternativo.

### Usando un registrador de errores

#### Sentry

[📖 Documentación](https://docs.sentry.io/platforms/javascript/react/) |
[☕ Tuto](https://www.daptontechnologies.com/react-error-boundary/)

```bash
$ yarn add @sentry/react
```
