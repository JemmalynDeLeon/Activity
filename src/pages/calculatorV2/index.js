import { Inter } from 'next/font/google'

import Button from "@components/button/ComponentB"
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '-', '+', '.'];

  const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>);
		}

		return digits;
	}

	const updateCalc = (value) => {
		if (
			ops.includes(value) && calc === '' || 
			ops.includes(value) && ops.includes(calc.slice(-1))
		) {
			return;
		}

		setCalc(calc + value);

		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}
return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					<span>{result ? '(' + result + ')' : ''}</span> {calc || 0}
				</div>

				<div className="operators">
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('*')}>x</button>
					<button onClick={() => updateCalc('-')}>-</button>
					<button onClick={() => updateCalc('+')}>+</button>

					<button onClick={deleteLast}>DEL</button>
				</div>

				<div className="digits">
					{createDigits()}
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>
					<button onClick={calculate}>=</button>
				</div>
			</div>
		</div>
	);



}
