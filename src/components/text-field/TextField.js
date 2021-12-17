import React from "react"
import { useDispatch } from "react-redux"
import { resolveEns } from "../../state/avatar-slice"
import * as styles from "./text-field.module.scss"

export default function TextField({ value }) {
	return (
		<div className={styles.textfield}>
			<form
				onSubmit={e => {
					e.preventDefault()
					navigator.clipboard.writeText(e.target.elements.search.value)
				}}
			>
				{/* <label htmlFor="search">Search for stuff</label> */}
				<input autoComplete="off" value={value} type="text" readOnly name="search" />
				<button type="submit">
					copy
					{/* <img style={{ width: "2rem", borderRadius: 0 }} src="https://cdn3.iconfinder.com/data/icons/files-folders-line/100/copy-512.png"></img> */}
				</button>
			</form>
		</div>
	)
}
