import { SsowebPage } from './app.po';

describe('ssoweb App', () => {
  let page: SsowebPage;

  beforeEach(() => {
    page = new SsowebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
