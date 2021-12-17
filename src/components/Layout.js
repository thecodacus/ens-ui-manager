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
				<p>Copyright 2021 The Codacus</p>
			</footer>
		</div>
		// </Provider>
	)
}
