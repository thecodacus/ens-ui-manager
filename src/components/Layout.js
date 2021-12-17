import React from "react"
// import { Provider } from "react-redux"
// import { store } from "../state/store"
import Navbar from "./Navbar"
import "../styles/global.scss"

export default function Layout({ children }) {
	return (
		// <Provider store={store}>
		<div className="layout">
			<Navbar />
			<div className="content">{children}</div>
			<footer>
				<p>
					Open Source <a href="https://github.com/thecodacus/ens-ui-manager/tree/main">Project</a> by <a href="https://codacus.com">Codacus</a>
				</p>
			</footer>
		</div>
		// </Provider>
	)
}
