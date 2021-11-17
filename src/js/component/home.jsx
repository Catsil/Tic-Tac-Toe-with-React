import React, { useEffect, useState } from "react";
import Box from "./box.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
	const [turn, setTurn] = useState("🟊");
	const [winner, setWinner] = useState("");
	const [isfinished, setIsfinished] = useState(false);

	const LINES = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	const isWinner = arr => {
		for (let i = 0; i < LINES.length; i++) {
			const [a, b, c] = LINES[i];
			if (arr[a] && arr[a] == arr[b] && arr[b] == arr[c]) {
				return true;
				// setWinner(turn);
			}
		}
	};

	const [game, setGame] = useState(Array(9).fill(null));
	let squares = [...game];

	const handleGame = position => {
		squares[position] = turn;
		setGame(squares);
		if (isWinner(squares) == true) {
			setWinner(turn);
			setIsfinished(true);
			console.log("aqui esta el ganador", setWinner(turn), winner);
		} else {
			if (turn == "🟊") {
				setTurn("🞉");
			} else {
				setTurn("🟊");
			}
		}
	};

	let Board = [];
	for (let index = 0; index < 9; index++) {
		Board.push(
			<Box
				key={index.toString()}
				value={turn}
				position={index}
				continueGame={handleGame}
				finish={isfinished}
			/>
		);
	}

	return (
		<Container>
			{winner != "" && <p>The winner is:{turn}</p>}
			<Row>
				{Board[0]}
				{Board[1]}
				{Board[2]}
			</Row>
			<Row>
				{Board[3]}
				{Board[4]}
				{Board[5]}
			</Row>
			<Row>
				{Board[6]}
				{Board[7]}
				{Board[8]}
			</Row>
		</Container>
	);
};

export default Home;
