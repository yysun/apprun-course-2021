import app from 'apprun';
import About from '../src/About';

describe('component', () => {
  it('should render state upon route event', () => {
    const element = document.createElement('div');
    const component = new About().mount(element);
    app.run('#About');
    expect(element.textContent).toBe('About');
    expect(component.state).toBe('About');
  });
});