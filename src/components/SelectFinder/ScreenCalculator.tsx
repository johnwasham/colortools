type RGB = [number, number, number]

export class ScreenCalculator {
    static calculate(baseR: number, baseG: number, baseB: number,
                        resultR: number, resultG: number, resultB: number): RGB {
        let baseRGB: RGB = [baseR, baseG, baseB]
        let resultRGB: RGB = [resultR, resultG, resultB]

        let baseLinear = this.toLinearRGB(baseRGB)
        let resultLinear = this.toLinearRGB(resultRGB)

        let screenLinear = this.calculateScreenLinear(baseLinear, resultLinear);

        return this.to255RGB(screenLinear)
    }

    private static toLinearRGB(RGB: RGB): RGB {
        const [r, b, g] = RGB;

        return [this.toLinear(r), this.toLinear(b), this.toLinear(g)] as RGB
    }

    private static toLinear(color: number): number {
        return color/255;
    }

    private static to255RGB(RGB: RGB): RGB {
        const [r, b, g] = RGB;

        return [this.to255(r), this.to255(b), this.to255(g)] as RGB
    }

    private static to255(color: number): number {
        return Math.round(Math.max(0, Math.min(1, color)) * 255)
    }

    private static calculateScreenLinear(base: RGB, result: RGB): RGB {
        const screen: number[] = [];
        
        for (let i = 0; i < 3; i++) {
            let b = base[i]
            let r = result[i]

            let denom = 1 - b;
            let s: number;

            if (denom == 0) { // base is pure white
                s = r == 1 ? 1 : 0; // any result other than white would be impossible
            } else {
                s = 1 - (1 - r) / denom
            }

            screen.push(s);
        }

        return screen as RGB;
    }
}
