import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, handleCheck, hanldeDelete }) => {
	return (
		<main>
			{items.length ? (
				<ItemList items={items} handleCheck={handleCheck} hanldeDelete={hanldeDelete} />
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty.</p>
			)}
		</main>
	);
};

export default Content;
