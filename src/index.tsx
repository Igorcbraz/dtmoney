import React from 'react';
import { App } from './App';
import { hydrate, render } from "react-dom";
 
// Was type any because this libary is made for js not ts
const rootElement: any = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
