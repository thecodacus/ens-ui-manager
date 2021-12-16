import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "../styles/navbar.module.scss"

class NavbarClass extends React.Component {
	constructor(props) {
		super(props)
		this.state = { menuToogle: false }
	}
	toggle() {
		this.setState({
			menuToogle: !this.state.menuToogle,
		})
		console.log(this.state)
	}
	render() {
		console.log(styles)
		const { data } = this.props
		const { title } = data.site.siteMetadata
		let hamburgerClass = [styles.hamburger]
		let menuClass = [styles.links]
		if (this.state.menuToogle) hamburgerClass = [styles.hamburger, styles.active]
		if (this.state.menuToogle) menuClass = [styles.links, styles.active]
		return (
			<nav className={styles.nav}>
				<Link to="/">
					<h1>{title}</h1>
				</Link>
				<div className={menuClass.join(" ")}>
					<Link to="/">Home</Link>
					<Link to="/posts">Posts</Link>
					<Link to="/about">About</Link>
				</div>
				<div onClick={this.toggle.bind(this)} className={hamburgerClass.join(" ")}>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
				</div>
			</nav>
		)
	}
}

export default function Navbar() {
	const data = useStaticQuery(graphql`
		query MyQuery {
			site {
				siteMetadata {
					copyright
					description
					title
				}
			}
		}
	`)
	return <NavbarClass data={data}></NavbarClass>
}
