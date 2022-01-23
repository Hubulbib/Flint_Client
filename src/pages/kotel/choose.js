
function NameAndDesc(name) {

    function str(n, s, v) {
        return `Котлы Flint предназначены для отопления жилых домов и зданий коммунально-бытового назначения. Данный котел обладает номинальной мощностью ${n}. Способен отапливать помещения площадью до ${s}. Объём воды в котле составляет не более ${v}.`
    }

    switch (name) {
        case '007F':
            return { name: 'КС-Г-007F', des: str('7кВт', '70м2', '14л') }
        case '010F':
            return { name: 'КС-Г-010F', des: str('10кВт', '100м2', '15л') }
        case '012F':
            return { name: 'КС-Г-012F', des: str('12.5кВт', '125м2', '16л') }
        case '016F':
            return { name: 'КС-Г-016F', des: str('16кВт', '160м2', '18л') }
        case '020F':
            return { name: 'КС-Г-020F', des: str('22.5кВт', '225м2', '21л') }
        case '025F':
            return { name: 'КС-Г-025F', des: str('26кВт', '260м2', '25л') }
        case '030F':
            return { name: 'КС-Г-030F', des: str('31.5кВт', '315м2', '35л') }
        case '040F':
            return { name: 'КС-Г-040F', des: str('40кВт', '400м2', '60л') }
        default:
            return { name: 'КС-Г-007F', des: str('7кВт', '70м2', '14л') }
    }
}

const other = ['007F', '010F', '012F', '016F', '020F', '025F', '030F', '040F']

function otherKotels(now) {
    const result = []
    const others = other.filter(el => el !== now)

    while (result.length < 3) {
        const rand = random(7, 0)
        if (result.length > 0) {
            if (result.find(el => el === others[rand]) === undefined) {
                result.push(others[rand])
            }
        } else {
            if (others[rand] !== now) result.push(others[rand])
        }
    }

    return result
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

export {
    NameAndDesc,
    otherKotels
}