require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('checks if fetchItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('verifies if the fetch function is called when the function fetchItem is executed', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('verifies if the fetch function is called with the correct url', () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('tests if the function fetchItem return the correct object', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
  it('tests if the function fetchItem throws an error', () => {
    expect(fetchItem()).rejects.toEqual(new Error('You must provide an url'));
  })
});
