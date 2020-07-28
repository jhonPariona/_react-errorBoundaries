import React from "react";

import Counter from "./components/counter";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => (
  <>
    <header style={{ textAlign: "center" }}>
      <h1>Error Boundary / Límite de error</h1>
    </header>
    <ErrorBoundary>
      <p>Componentes encerrados en un limite de error</p>
      <Counter />
    </ErrorBoundary>
    <hr />
    <p>Componentes indepedientes cada uno en un limite de error</p>
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  </>
);

export default App;
