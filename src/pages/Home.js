import { useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';

const Home = () => {
	const [bodyPart, setBodyPart] = useState('all');
	const [exercises, setExercises] = useState([]);
	return (
		<div>
			<Box>
				<HeroBanner />
				<SearchExercises
					setExercises={setExercises}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
				/>
				<Exercises
					exercises={exercises}
					setExercises={setExercises}
					bodyPart={bodyPart}
				/>
			</Box>
		</div>
	);
};

export default Home;
