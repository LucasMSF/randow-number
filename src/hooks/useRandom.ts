import { useState } from "react";
import { randomNumber } from "../helpers/numbersHelper";
import { isInteger } from "lodash";

type InputRange = { name: string, value: string };
type initRange = { min: number, max: number };

const useRandom = ({min, max}: initRange) => {

    const [number, setNumber] = useState(0);
    const [range, setRange] = useState({ min, max, error: { min: false, max: false } });


    const changeRange = ({ name, value }: InputRange) => {
        let error = {
            ...range.error,
        };

        let errorState = false;

        if (!isInteger(Number(value))) errorState = true;

        error = {
            ...error,
            [name]: errorState,
        };

        setRange({ ...range, [name]: value, error });
    }

    const generateRandomNumber = () => setNumber(randomNumber(range.min, range.max));

    return {
        number,
        range,
        changeRange,
        generateRandomNumber,
    }
}

export default useRandom;