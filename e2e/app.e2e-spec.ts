import { Ng2SimpleQueuePage } from './app.po';

describe('ng2-simple-queue App', function() {
  let page: Ng2SimpleQueuePage;

  beforeEach(() => {
    page = new Ng2SimpleQueuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
