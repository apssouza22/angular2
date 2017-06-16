import { MapitPage } from './app.po';

describe('mapit App', function() {
  let page: MapitPage;

  beforeEach(() => {
    page = new MapitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
