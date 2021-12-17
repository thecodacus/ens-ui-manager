import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/state/store.js"

// eslint-disable-next-line react/display-name,react/prop-types
export function wrapRootElement({ element }) {
	return <Provider store={store}>{element}</Provider>
}
