import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({ name, date, description, img }) => {
	return (
		<Card sx={{ maxWidth: 345 }} style={{ margin: 40, maxHeight: 480 }}>
			<CardMedia component='img' height='340' image={img} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{description}
				</Typography>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{date}
					</Typography>
				</CardContent>
			</CardContent>
		</Card>
	);
};

export default CardComponent;
