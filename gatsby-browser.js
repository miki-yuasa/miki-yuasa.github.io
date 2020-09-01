/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/components/layout.scss";
import "@fluentui/react/dist/sass/_References.scss";
import "prismjs/themes/prism.css";

const ReactDOM = require("react-dom");

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
}

// IntersectionObserver polyfill (Safari, IE)
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};
