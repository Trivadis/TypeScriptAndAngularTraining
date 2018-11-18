import { AppPage } from './app.po';

describe('person-editor App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title correctly', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Person Editor');
  });
});
