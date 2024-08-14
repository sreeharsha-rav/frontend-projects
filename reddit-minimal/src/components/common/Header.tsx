const Header = () => {
    return (
        <header className="flex bg-white text-sm py-3 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-10 justify-center">
            <nav className="max-w-full flex items-center justify-center">
                <img src="src/assets/reddit-icon.png" alt="Reddit Logo" className="w-8 h-8 mr-2" />
                <p className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" aria-label="Brand">Reddit Minimal</p>
            </nav>
        </header>
    );
};

export default Header;