import app from 'apprun';
import About from '../src/pages/About';

describe('component', () => {
  it('should render state upon route event', (done) => {
    const component = new About().mount();
    component.run('#About');
    setTimeout(() => {
      expect(component.state).toBe('About');
      done();
    });
  });
});