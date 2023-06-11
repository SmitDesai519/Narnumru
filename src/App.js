import React from "react";
import { Route, Routes } from "react-router";
import BaseLayout from "./Component/BaseLayout/BaseLayout";
import Home from "./Container/Home/Home";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
