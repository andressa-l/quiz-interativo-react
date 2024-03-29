import React from 'react';
import { Link } from 'react-router-dom';

export const Results = ({ score, questionsFiltered, onReset }) => {
	return (
		<div className='flex flex-col justify-evenly bg-slate-300 items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5'>
			<h1 className='text-4xl font-bold'>Resultados</h1>

			<div className='flex flex-col gap-5 text-center text-lg font-bold'>
				<span>Acertos</span>
				<span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>
					{((score / questionsFiltered.length) * 100).toFixed(0)}%
				</span>
				das perguntas ({score} de {questionsFiltered.length})
			</div>

			<button
				className='border bg-green-500 px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900'
				onClick={onReset}
			>
				Jogar Novamente
			</button>
			<Link to='/'>
				<button
					className='border bg-red-500 px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900'
					// onClick={onReset}
				>
					Início
				</button>
			</Link>
		</div>
	);
};