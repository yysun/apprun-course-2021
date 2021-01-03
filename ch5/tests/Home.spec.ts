import app from 'apprun';
import Home from '../src/pages/Home';

describe('component', () => {
  it('should render state upon route event', () => {
    const element = document.createElement('div');
    const component = new Home().mount(element);
    app.run('#Home');
    expect(element.textContent).toBe('Home');
    expect(component.state).toBe('Home');
  });
});