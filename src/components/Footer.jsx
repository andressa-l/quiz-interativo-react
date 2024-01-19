import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer className=' py-5 my-5 flex justify-center'>
			<div>
				<h1 className='text-white text-xl font-bold hover:scale-110 transition-all duration-500'>
					<a href='https://github.com/andressa-l' className='text-blue-200'>@andressa-l</a> 💜
				</h1>
			</div>
		</footer>
	);
};