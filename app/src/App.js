import Article from './components/Article';
import BadArticle from './components/BadArticle';

function App() {
  return (
    <div>
      <Article
        title={'reactの入門勉強編5'}
        content={'今日のトピックuseStateについて'}
      />
      <BadArticle
        title={'reactの入門勉強編6'}
        content={'アイコンとタイトルを一緒に表示する'}
      />
    </div>
  );
}

export default App;
