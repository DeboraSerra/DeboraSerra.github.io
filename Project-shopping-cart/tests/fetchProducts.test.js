require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('tests if fetch product is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('verifies if the function fetch is called when the function fetchProducts is executed', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('tests if the function fetch is called with the correct endpoint when the argument is "computador"', () => {
    const url =  "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('tests if the function returns the expected object when the argument is "computador"', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  })
  it('tests if the message "You must provide an url" is returned when the function fetchProducts is called without an argument', () => {
    expect(fetchProducts()).rejects.toEqual(new Error('You must provide an url'));
  })
});
