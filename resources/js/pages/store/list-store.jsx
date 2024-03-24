import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout } from '../../components/layout';

const LIST_STORE_QUERY = gql`
	query ListStores {
		stores {
			items {
				address
				email
				id
				name
			}
		}
	}
`;

export default function ListStore() {
	const { loading, error, data } = useQuery(LIST_STORE_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			<Layout title={'Stores'}>
				<ul>
					{data.stores.items.map((store) => (
						<li key={store.id}>
							{store.name} - {store.address}
						</li>
					))}
				</ul>
			</Layout>
		</>
	);
}
