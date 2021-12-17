import React from "react"
import { useDispatch } from "react-redux"
import { resolveEns } from "../../state/avatar-slice"
import * as styles from "./search-bar.module.scss"

export default function SearchBar({ label, placeholder, loading }) {
	const dispatch = useDispatch()
	// loading = true

	return (
		<div className={styles.searchbar}>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (loading) return
					// dispatch({ type: "avatar/setUser", payload: e.target.elements.search.value })
					dispatch(resolveEns(e.target.elements.search.value))
					// dispatch(setUser(e.target.elements.search.value))
				}}
				role="search"
			>
				<label htmlFor="search">{label}</label>
				<input autoComplete="off" type="search" placeholder={placeholder} autoFocus required name="search" />
				<button className={loading ? styles.loading : ""} type="submit">
					Go
					<div className={styles.loader}>
						<div></div>
						<div></div>
					</div>
				</button>
			</form>
		</div>
	)
}
