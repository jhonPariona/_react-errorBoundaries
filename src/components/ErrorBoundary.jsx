import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // retorna una actualización del estado
    return { hasError: true };
  }

  componentDidCatch(error, infoError) {
    // podemos usar sentry para hacer el registro de errores
    console.log("ErrorBoundary -> componentDidCatch -> error🚫", error);
    console.log(
      "ErrorBoundary -> componentDidCatch -> infoError ⚠️",
      infoError.componentStack
    );
  }

  render() {
    // destructuring
    const { hasError } = this.state;

    if (hasError) {
      return <p>Opss Ocurrio un error!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
