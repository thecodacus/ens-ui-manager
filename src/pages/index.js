// import { graphql } from "gatsby"
import { graphql } from "gatsby"
import React from "react"
import { useSelector } from "react-redux"
import EnsAvatar from "../components/ens-avatar/EnsAvatar"
import Layout from "../components/Layout"
import NftGrid from "../components/nft-grid/NftGrid"
import TextField from "../components/text-field/TextField"
import SearchBar from "../components/search-bar/SearchBar"
import * as styles from "../styles/home.module.scss"

export default function Home({ data }) {
	console.log(data)
	const name = useSelector(s => s.avatar.userEns)
	const nfts = useSelector(s => s.avatar.nft)
	const userAddress = useSelector(s => s.avatar.userAddress)
	const selectedNft = useSelector(s => s.avatar.selectedNft)
	console.log(name)
	let avatarUrl = null
	if (selectedNft)
		avatarUrl = `eip155:1/${selectedNft?.asset_contract.schema_name.toLowerCase()}:${selectedNft?.asset_contract.address}/${selectedNft?.token_id}`
	return (
		<Layout>
			<div className={styles.home}>
				<section className={styles.hero}>
					{name ? (
						<div className={styles.avatar}>
							<EnsAvatar
								image={selectedNft?.image_url}
								name={name}
								defaultImg={
									selectedNft?.asset_contract.name === "ENS"
										? selectedNft.image_url
										: "https://app.ens.domains/static/media/heroBG.f5f70c11.jpg"
								}
								forceDefault={selectedNft?.asset_contract.name === "ENS"}
							></EnsAvatar>
							{selectedNft !== null && selectedNft?.asset_contract.name !== "ENS" ? (
								<TextField value={avatarUrl}></TextField>
							) : (
								<div style={{ display: "none" }}></div>
							)}
						</div>
					) : (
						<div style={{ display: "none" }}></div>
					)}
					<div className={styles.searchbar}>
						<SearchBar placeholder="Search Ens Name" loading={userAddress.loading || nfts.loading}></SearchBar>
					</div>
				</section>
				<section>{nfts.loading === false && nfts.error === null && nfts.data != null ? <NftGrid items={nfts.data}></NftGrid> : <div></div>}</section>
			</div>
		</Layout>
	)
}
export const query = graphql`
	query HomePageContent {
		info: site {
			siteMetadata {
				title
				subHeader
				description
			}
		}
	}
`
