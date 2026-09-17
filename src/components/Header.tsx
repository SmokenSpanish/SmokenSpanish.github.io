import { NavLink } from 'react-router-dom';
import { site } from '@/data/site';
import { withBase } from '@/lib/base';
import { useTheme } from '@/theme/ThemeProvider';
import styles from './Header.module.scss';

const links = [
  { to: '/#playables', label: 'Playables' },
  { to: '/#work', label: 'Work', secondary: true },
  { to: '/resume', label: 'Resume' },
  { to: '/#contact', label: 'Contact', secondary: true },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          {site.name}
        </NavLink>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) =>
            link.to.startsWith('/#') ? (
              <a
                key={link.to}
                href={withBase(link.to.slice(1))}
                data-priority={link.secondary ? 'secondary' : 'primary'}
              >
                {link.label}
              </a>
            ) : (
              <NavLink key={link.to} to={link.to} data-priority={link.secondary ? 'secondary' : 'primary'}>
                {link.label}
              </NavLink>
            ),
          )}
          <button
            type="button"
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}
