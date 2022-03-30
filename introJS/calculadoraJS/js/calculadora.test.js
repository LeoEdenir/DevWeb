const { soma, sub } = require('./soma')

it('Soma de dois positivos', () => {
    expect(soma(2,4)).toBe(6)
})

it('Soma de positivo e negativo', () => {
    expect(soma(-2,4)).toBe(2)
})

it('Subtração de dois positivos', () => {
    expect(sub(6, 4)).toBe(2)
})