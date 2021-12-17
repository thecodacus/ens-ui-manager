import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as styles from "./nft-grid.module.scss"
import { useDispatch } from "react-redux"
export default function NftGrid({ items }) {
	console.log(items)
	let dispatch = useDispatch()
	return (
		<div className={styles.grid}>
			{items.map(item => (
				<div onClick={() => dispatch({ type: "avatar/selectNft", payload: item })} key={item.id}>
					<div className={styles.card}>
						<div className={styles.thumbnail}>
							<img className={styles.alternateImage} src={item.image_url} alt={item.token_id} />
						</div>
						<span className={styles.chip}>{item.token_id}</span>
						<div className={styles.excerpt}>
							<h3>{item.asset_contract.name}</h3>
							<p>{item.name}</p>
						</div>
						<div className={styles.footer}>
							<div style={{ flex: 1 }}>
								{item.last_sale ? (
									<div style={{ display: "flex", alignItems: "center" }}>
										<span>Last Price:</span>
										<div className={styles.coinSymbol}>
											<img src={item.last_sale.payment_token.image_url} />
										</div>
										<span> {item.last_sale.total_price / 10 ** item.last_sale.payment_token.decimals}</span>
									</div>
								) : (
									<div style={{ display: "flex", alignItems: "center" }}>
										<span>Last Price: N/A</span>
									</div>
								)}
							</div>
							{/* <div className={styles.readMore}>Read More</div> */}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
