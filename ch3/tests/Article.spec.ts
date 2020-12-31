import app from 'apprun';
import Article from '../src/Article';
import Api from '../src/Article/api';
import './api.mock';

describe('component', () => {
  it('should render state upon route event', (done) => {
    const element = document.createElement('div');
    const component = new Article().mount(element);
    app.run('#Article');
    setTimeout(() => {
      expect(Api.articles).toHaveBeenCalled();
      expect(component.state.articles.length).toBe(5);
      done();
    });
  });
});