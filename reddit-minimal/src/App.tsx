import Feed from "./components/feed/Feed";

const styles = {
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6 items-center justify-center`,
  content: `flex-1 space-y-4 items-center justify-center max-w-2xl`,
};

/**
 * The main component of the application.
 *
 * @returns The rendered JSX element.
 */
function App() {

  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <Feed subreddit="popular"/>
        </div>
      </main>
    </>
  )
}

export default App;
