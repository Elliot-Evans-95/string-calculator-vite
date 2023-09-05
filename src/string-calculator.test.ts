import { StringCalculator } from "./string-calculator.ts";

describe('String Calculator', () => {
    test('returns null', () => {
        const stringCalculator = StringCalculator()

        expect(stringCalculator).toBe(null)
    })
});
