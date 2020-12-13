import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {
	return (
		<div className='shop-page'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
