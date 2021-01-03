import app from 'apprun';
import Contact from '../src/pages/Contact';

describe('component', () => {
  it('should render state upon route event', () => {
    const component = new Contact().mount();
    component.run('#Contact');
    expect(component.state).toBe('Contact');
  });
});