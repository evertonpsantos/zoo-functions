const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se ao chamar a função sem parametro retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se ao passar um número como parâmetro retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se ao passar `count` como parâmetro retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se ao passar `averageAge` como parâmetro retorna 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se ao passar `names` como parâmetro retorna ["Ilana", "Orval", "Bea", "Jefferson"]', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(expect.arrayContaining(expected));
  });
  it('Testa se ao passar `batata` como parâmetro retorna null', () => {
    expect(handlerElephants('batata')).toBe(null);
  });
  it('Testa se ao passar `batata` como parâmetro retorna null', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
