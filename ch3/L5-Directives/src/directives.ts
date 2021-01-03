import app from 'apprun';

// directive to set styles
app.on('$', ({ key, props }) => {
  if (key.startsWith('$_')) {
    const value = props[key];
    key = key.substring(2).replace(/_/g, '-');
    props.style = props.style || {};
    if (typeof props.style === 'object') {
      props.style[key] = value;
    } else if (typeof props.style === 'string') {
      props.style += `;${key}: ${value};`;
    }
  }
});

// directive to set animation classes
app.on('$', ({ key, props }) => {
  if (key === '$animation') {
    const value = props[key];
    if (value) {
      props.class = (props.class || '') + ` animated ${value}`;
    } else if (props.class) {
      props.class = props.class.replace(/animated/g, '');
    }
  }
});