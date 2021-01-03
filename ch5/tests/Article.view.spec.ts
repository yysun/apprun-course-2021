import ArticleComponent from '../src/Article';

describe('ArticleComponent', () => {
  it('view snapshot: #1', () => {
    const component = new ArticleComponent();
    const state = {
      'articles': [
        {
          'id': 1,
          'title': 'title 1',
          'cover_img': 'img 1',
          'description': 'desc 1'
        },
        {
          'id': 2,
          'title': 'title 2',
          'cover_img': 'img 2',
          'description': 'desc 2'
        },
        {
          'id': 3,
          'title': 'title 3',
          'cover_img': 'img 3',
          'description': 'desc 3'
        },
        {
          'id': 4,
          'title': 'title 4',
          'cover_img': 'img 4',
          'description': 'desc 4'
        },
        {
          'id': 5,
          'title': 'title 5',
          'cover_img': 'img 5',
          'description': 'desc 5'
        }
      ],
      'article': {
        'id': 1,
        'title': 'title 1',
        'cover_img': 'img 1',
        'description': 'desc 1'
      }
    };
    const vdom = component['view'](state);
    expect(JSON.stringify(vdom)).toMatchSnapshot();
  });

  it('view snapshot: #2', () => {
    const component = new ArticleComponent();
    const state = {
      'articles': [
        {
          'id': 1,
          'title': 'title 1',
          'cover_img': 'img 1',
          'description': 'desc 1'
        },
        {
          'id': 2,
          'title': 'title 2',
          'cover_img': 'img 2',
          'description': 'desc 2'
        },
        {
          'id': 3,
          'title': 'title 3',
          'cover_img': 'img 3',
          'description': 'desc 3'
        },
        {
          'id': 4,
          'title': 'title 4',
          'cover_img': 'img 4',
          'description': 'desc 4'
        },
        {
          'id': 5,
          'title': 'title 5',
          'cover_img': 'img 5',
          'description': 'desc 5'
        }
      ],
      'article': {
        'id': '2',
        'title': 'title 2',
        'cover_img': 'img 2',
        'description': 'desc 2',
        'body_html': 'body 2'
      }
    };
    const vdom = component['view'](state);
    expect(JSON.stringify(vdom)).toMatchSnapshot();
  });
});
