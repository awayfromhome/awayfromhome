import React from 'react';
import Card from './Card';
import { withRouter } from 'react-router-dom';

const RoomInfo = props => {
	return (
		<Card
			price="$97"
			// img={info.url}
			onClick={() => props.history.push(`/room/${props.info.room_id}`)}
			btnName="Select Room">
			Select Room 
			<h1>{props.info.room_id}</h1>
			<h1>Only 1 Room Left</h1>
			<h1>1 King Bed Leisure Nonsmoking</h1>
			<p>
				Understand the true meaning of contentment in this rm. Stay
				productive at the well lit desk. Relax in the ergonomic chair
				with free high speed internet or let indulgence rain all over
				you from the a pulsating showerhead.
			</p>
		</Card>
	);
};

export default withRouter(RoomInfo);
