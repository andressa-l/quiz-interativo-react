import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<header className='bg-gray-950 py-5 flex justify-center'>
			<Link to='/'>
				<h1 className='text-white text-2xl font-bold hover:scale-110 transition-all duration-500'>
					Quiz Interativo
				</h1>
			</Link>
		</header>
	);
};