import app from 'apprun';
import Contact from '../src/Contact';

describe('component', () => {
  it('should render state upon route event', () => {
    const element = document.createElement('div');
    const component = new Contact().mount(element);
    app.run('#Contact');
    expect(element.textContent).toBe('Contact');
    expect(component.state).toBe('Contact');
  });
});