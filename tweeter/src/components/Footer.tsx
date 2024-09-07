import { ThemeSwitcher } from './ThemeSwitcher';

export function Footer() {
  return (
    <footer className='border-t border-gray-200 p-4 flex items-center justify-between'>
      <div className='text-xs'>
        Made with ❤️ by{' '}
        <a
          href='https://github.com/sreeharsha-rav'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          Sreeharsha
        </a>
      </div>
      <ThemeSwitcher />
    </footer>
  );
}
