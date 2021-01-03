import Article from '../src/pages/Article';
import Api     from '../src/pages/Article/api';
import './api.mock';

describe('component', () => {
  it('should render state upon route event', (done) => {
    const component = new Article().mount();
    component.run('#Article');
    setTimeout(() => {
      expect(Api.articles).toHaveBeenCalled();
      expect(component.state.articles.length).toBe(5);
      done();
    });
  });
});
