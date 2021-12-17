import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/state/store.js"
require("prismjs/themes/prism-tomorrow.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/show-language/prism-show-language.js")

// eslint-disable-next-line react/display-name,react/prop-types
export function wrapRootElement({ element }) {
	return <Provider store={store}>{element}</Provider>
}
