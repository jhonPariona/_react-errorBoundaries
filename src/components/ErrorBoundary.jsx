import React from "react";
import * as Sentry from "@sentry/browser";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    eventId: null,
  };

  static getDerivedStateFromError() {
    // retorna una actualización del estado
    return { hasError: true };
  }

  componentDidCatch(error, infoError) {
    // podemos usar sentry para hacer el registro de errores
    Sentry.withScope((scope) => {
      scope.setTag("error", "ErrorBoundary");
      scope.setExtras(infoError);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  handleReport = () => Sentry.showReportDialog({ eventId: this.state.eventId });

  render() {
    // destructuring
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <p>Upss! ocurrio un error</p>
          <button
            onClick={this.handleReport}
            style={{ backgroundColor: "tomato" }}
          >
            Reportar feedback
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
