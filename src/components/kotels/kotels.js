class Kotel {
    constructor(name, N, S, V) {
        this.name = name
        this.N = N
        this.S = S
        this.V = V
    }
}

const F007 = new Kotel('КС-Г-007F', 7, 70, 14)
const F010 = new Kotel('КС-Г-010F', 10, 100, 15)
const F012 = new Kotel('КС-Г-012F', 12.5, 125, 16)
const F016 = new Kotel('КС-Г-016F', 16, 160, 18)
const F020 = new Kotel('КС-Г-020F', 22.5, 225, 21)
const F025 = new Kotel('КС-Г-025F', 26, 260, 25)
const F030 = new Kotel('КС-Г-030F', 31.5, 315, 35)
const F040 = new Kotel('КС-Г-040F', 40, 400, 60)

const kotels = [F007, F010, F012, F016, F020, F025, F030, F040]

export default kotels