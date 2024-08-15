import FeedContainer from "./containers/FeedContainer";

const styles = {
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6 items-center justify-center`,
  content: `flex-1 space-y-4 items-center justify-center max-w-2xl`,
};

/**
 * Represents the main application component.
 *
 * @component
 * @returns {JSX.Element} The rendered main application component.
 */
const App: React.FC = () => {
  return (
      <main className={styles.main}>
        <div className={styles.content}>
          <FeedContainer subreddit="ProgrammerHumor" />
        </div>
      </main>
  );
};

export default App;
