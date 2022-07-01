const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se ao não passar nenhum parâmetro retorna os horarios de abertura de abertura e fechamento', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Testa se ao passar `batata` como primeiro parâmetro lança um erro', () => {
    expect(() => getOpeningHours('batata', '12:05-pm')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se ao passar `hello:05-AM` como parâmetro lança um erro', () => {
    expect(() => getOpeningHours('tuesday', 'hello:05-pm')).toThrow();
  });
  it('Testa se ao passar `12:hello-AM` como parâmetro lança um erro', () => {
    expect(() => getOpeningHours('wednesday', '12:hello-pm')).toThrow();
  });
  it('Testa se ao não passar AM ou PM no parâmetro lança um erro', () => {
    expect(() => getOpeningHours('thursday', '12:12-GTT')).toThrow();
  });
  it('Testa se ao passar uma hora maior que 12 no parâmetro lança um erro', () => {
    expect(() => getOpeningHours('friday', '14:21-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se ao passar um número maior que 59 nos minutos como parâmetro lança um erro', () => {
    expect(() => getOpeningHours('saturday', '11:62-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Testa se ao passar `11:50-am` no segundo parâmetro retorna `The zoo is open`', () => {
    expect(getOpeningHours('sunday', '11:50-am')).toEqual('The zoo is open');
  });
  it('Testa se ao passar `11:11-pm` no segundo parâmetro retorna `The zoo is closed`', () => {
    expect(getOpeningHours('sunday', '11:11-pm')).toEqual('The zoo is closed');
  });
  it('Testa se ao passar `monday` como primeiro parâmetro retorna `The zoo is closed`', () => {
    expect(getOpeningHours('monday', '12:27-am')).toEqual('The zoo is closed');
  });
});
