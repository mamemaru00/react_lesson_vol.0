import Article from './components/Article';

function App() {
  return (
    <div>
      <Article
        title={'reactの入門勉強編4'}
        content={'今日のトピックpropsの受け渡しについて'}
      />
      <Article
        title={'reactの入門勉強編5'}
        content={'今日のトピックuseStateについて'}
      />
      <Article
        title={'reactの入門勉強編6'}
        content={'今日のトピックuseEffectについて'}
      />
    </div>
  );
}

export default App;
