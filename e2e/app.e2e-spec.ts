import { Angular4PeticionesPage } from './app.po';

describe('angular4-peticiones App', () => {
  let page: Angular4PeticionesPage;

  beforeEach(() => {
    page = new Angular4PeticionesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
