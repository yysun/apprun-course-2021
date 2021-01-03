import Api from '../src/pages/Article/api';

Api.articles = jest.fn(() =>
  new Promise((r) => {
    const articles = [1, 2, 3, 4, 5].map(i => ({
      id: i,
      title: `title ${i}`,
      cover_img: `img ${i}`,
      description: `desc ${i}`,
      path: `/${i}/${i}`
    }));
    r(articles);
  })
);

Api.article = jest.fn(i =>
  new Promise((r) => {
    const article = {
      id: i,
      title: `title ${i}`,
      cover_img: `img ${i}`,
      description: `desc ${i}`,
      body_html: `body ${i}`,
      path: `/${i}/${i}`
    };
    r(article);
  })
);
