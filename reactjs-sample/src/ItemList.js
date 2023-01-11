import React from 'react';
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, hanldeDelete }) => {
	return (
		<ul>
			{items.map((item) => (
				<LineItem item={item} handleCheck={handleCheck} hanldeDelete={hanldeDelete} />
			))}
		</ul>
	);
};

export default ItemList;
