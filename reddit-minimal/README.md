# Reddit Minimal

A minimalist Reddit client built with React, TypeScript, and React Router. This application allows users to browse Reddit posts, view post details, and read comments asynchronously.

![Reddit-Minimal](public/reddit-minimal.gif)

## Project Structure

```
reddit-client/
│
├── src/
│   ├── assets/                         # Contains static assets such as images and icons used in the application.
│   ├── components/                     # Contains reusable React components used throughout the application.
│   │   ├── common/                     # Contains common components used across different parts of the application.
│   │   │   ├── ErrorPage.tsx           # Component for displaying an error page.
│   │   │   ├── Loader.tsx              # Component for displaying a loading spinner.
│   │   │   └── Header.tsx              # Component for the application header.
│   │   ├── feed/                       # Contains components related to browsing Reddit posts.
│   │   │   ├── actions.tsx             # Component for performing actions on a post (e.g., upvoting, saving).
│   │   │   ├── info.tsx                # Component for displaying post information (e.g., title, author, score).
│   │   │   ├── post-preview.tsx        # Component for displaying a preview of a post.
│   │   │   ├── vote.tsx                # Stateful component for voting on a post.
│   │   │   ├── sort.tsx                # Component for sorting posts.
│   │   │   └── feed.tsx                # Component for displaying a feed of Reddit posts.
│   │   ├── post/                       # Contains components related to viewing post details.
│   │   │   └── Post.tsx                # Component for displaying the details of a post.
│   │   └──ui/                          # Contains UI-related components and utilities.
│   │       └── icons.tsx               # Component for rendering icons.
|   ├── containers/                     # Contains container components that manage state and data fetching.
│   │   └── FeedContainer.tsx           # Container component for fetching, displaying and sorting Reddit posts.
│   ├── hooks/                          # Contains custom React hooks used in the application.
|   |   ├── useVote.ts                  # Hook for voting on a post.
│   │   └── useFetchPosts.ts            # Hook for fetching Reddit posts.
│   ├── services/                       # Contains services for interacting with external APIs.
│   │   └── redditApi.ts                # Service for making API requests to the Reddit API.
│   ├── types/                          # Contains TypeScript type definitions used in the application.
│   │   └── subreddit.ts                # Type definition for a subreddit.
│   ├── App.tsx                         # The main component that serves as the entry point for the application.
│   ├── index.css                       # CSS file for styling the application.
│   └── main.tsx                        # The main file that renders the React application.
|
├── index.html                          # The HTML file that serves as the entry point for the application.
└── Other files ...                     # Other configuration files used in the project.
```

### Features

- Browse Reddit posts from various subreddits
- Asynchronous loading of comments
- Responsive design for mobile and desktop
- Error handling and loading states
- Memoization for performance optimization
- Container composition for managing state and data fetching
- Custom hooks for reusable logic
- Routing with React Router
- Minimalist design with Tailwind CSS

## Getting Started

1. Clone the repository:
  ```
  git clone https://github.com/
  cd reddit-minimal
  ```

2. Install dependencies:
  ```
  pnpm install
  ```

3. Start the development server:
  ```
  pnpm dev
  ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Available Scripts

- `pnpm dev`: Runs the app in development mode

### Technologies Used

- React
- TypeScript
- React Router
- Preline UI (for styling)
- pnpm (for package management)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Roadmap

v 0.1.0
- [x] Fetch Reddit posts from the Reddit API
- [x] Display a feed of Reddit posts
- [x] Routing to view post details
- [x] Error handling and loading states
- [x] Error Page for 404

v 0.2.0
- [x] Manage state with container components
- [x] Add sorting and filtering options for posts
- [x] Performance optimizations using React.memo and useMemo

v 0.3.0
- [ ] Improve loading states with loading skeletons and suspense
- [ ] Add virtual scrolling for better performance using react-window
- [ ] Add asynchronous generators for fetching posts (infinite scrolling)

v 0.4.0
- [ ] Design Post Details page
- [ ] Asynchronous loading of comments for Post Details
- [ ] Add support for sharing posts
- [ ] Add tests for components and hooks
- [ ] Deploy the application to Github Pages
- [ ] Setup CI/CD pipeline with GitHub Actions

## License

This project is licensed under the MIT License.

