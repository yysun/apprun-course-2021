const prefix = 'note:';

export default {

  notes: () => {
    const all = { ...localStorage };
    return Object.keys(all)
      .map(key => key.startsWith(prefix) ? localStorage.getItem(key) : null)
      .filter(item => !!item)
      .map(item=>JSON.parse(item));
  },

  note: (id) => {
    if (!id) { return null; }
    const note = localStorage.getItem(prefix + id);
    return note && JSON.parse(note);
  },

  save: (id, note) => {
    if (note) {
      localStorage.setItem(prefix + id, JSON.stringify(note));
    } else {
      localStorage.removeItem(id);
    }
  },
  del: (id) => {
    localStorage.removeItem(prefix + id);
  }
};