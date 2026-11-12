import { useEffect, useState } from 'react';
import { site } from '@/data/site';
import styles from './CopyEmail.module.scss';

/** Email as plain selectable text (a click selects the whole address) with a copy button. */
export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (permissions, insecure context): the address stays selectable by hand.
    }
  };

  return (
    <span className={styles.wrap}>
      <span className={styles.address}>{site.email}</span>
      <button type="button" className={styles.copy} onClick={copy} aria-live="polite">
        {copied ? 'Copied' : 'Copy'}
      </button>
    </span>
  );
}
