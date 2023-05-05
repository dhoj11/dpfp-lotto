import { useState } from 'react';
import './LottoGenerator.css';
const zzal = require( '../../assets/images/zzal.png');

function LottoGenerator() {

    const [numberOfSets, setNumberOfSets] = useState(1);
    const [lottoNumbers, setLottoNumbers] = useState<number[][]>([]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        setNumberOfSets(isNaN(value) ? 0 : value);
    }

    function generateNumbers(): number[] {
        const numbers: number[] = [];

        while (numbers.length < 6) {
            const number = Math.floor(Math.random() * 45) + 1;

            if (numbers.indexOf(number) === -1) {
                numbers.push(number);
            }
        }

        return numbers.sort((a, b) => a - b);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newLottoNumbers: number[][] = [];

        for (let i = 0; i < numberOfSets; i++) {
            newLottoNumbers.push(generateNumbers());
        }

        setLottoNumbers(newLottoNumbers);
    }

    function getColorClass(number: number): string {
        if (number >= 1 && number <= 10) {
            return 'one-to-ten';
        } else if (number >= 11 && number <= 20) {
            return 'eleven-to-twenty';
        } else if (number >= 21 && number <= 30) {
            return 'twenty-one-to-thirty';
        } else if (number >= 31 && number <= 40) {
            return 'thirty-one-to-forty';
        } else {
            return 'forty-one-to-forty-five';
        }
    }

    return (
        <div className="LottoGenerator">
            <header>
                {/*<h1>로또</h1>*/}
                <div className="zzal">
                    <img src={zzal}/>
                </div>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    {/*<label htmlFor="numberOfSets">셋트 수</label>*/}
                    <input
                        type="number"
                        id="numberOfSets"
                        value={numberOfSets}
                        min="1"
                        max="10"
                        onChange={handleInputChange}
                    />
                    <button type="submit">생성</button>
                </form>

                <div className="numberSets">
                    {lottoNumbers.map((numbers, index) => (
                        <div key={index} className="numberSet">
                            <span className="setLabel"></span>
                            {numbers.map((number) => (
                                <span
                                    key={number}
                                    className={`number number-${getColorClass(number)}`}
                                >
                                {number}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
export default LottoGenerator;