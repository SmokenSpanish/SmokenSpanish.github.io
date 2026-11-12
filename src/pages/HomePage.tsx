import { Hero } from '@/components/Hero';
import { PlayableCard } from '@/components/PlayableCard';
import { Process } from '@/components/Process';
import { FrontendWork } from '@/components/FrontendWork';
import { ExperienceList } from '@/components/ExperienceList';
import { playables } from '@/data/playables';
import { site } from '@/data/site';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import styles from './HomePage.module.scss';

export function HomePage() {
  useDocumentTitle('Maksim Basov — Frontend / Creative Developer');
  return (
    <main id="main">
      <Hero />
      <section className="section" id="playables">
        <div className="container">
          <p className="kicker">Selected playables</p>
          <h2 className="section__title">Production HTML5 builds, playable here</h2>
          <p className="section__lede">
            Packed Cocos Creator playables served as HTML — 2D and 3D — plus one full HTML5 game. Click Play to
            load the demo. No source archives, no download button.
          </p>
          {playables.map((playable) => (
            <PlayableCard key={playable.slug} playable={playable} />
          ))}
        </div>
      </section>
      <section className="section" id="approach">
        <div className="container">
          <p className="kicker">How I work</p>
          <h2 className="section__title">Frontend craft, playable constraints</h2>
          <p className="section__lede">
            {site.studio} is a small Cyprus-based studio. I implement playables end to end: from prototype to
            a network-ready HTML5 build, in 2D and 3D.
          </p>
          <Process />
        </div>
      </section>
      <section className="section" id="work">
        <div className="container">
          <p className="kicker">Frontend background</p>
          <h2 className="section__title">Commercial web before playables</h2>
          <p className="section__lede">
            Four years of product frontend — React, Vue, HTML/CSS, client logic, and production support.
            Live references from Walnut Team:
          </p>
          <FrontendWork />
        </div>
      </section>
      <section className="section" id="experience">
        <div className="container">
          <p className="kicker">Experience</p>
          <h2 className="section__title">Recent roles</h2>
          <ExperienceList />
        </div>
      </section>
      <section className="section" id="contact">
        <div className="container">
          <p className="kicker">Contact</p>
          <h2 className="section__title">Email, Telegram, or a call</h2>
          <p className="section__lede">
            Best way to reach me is email; Telegram and WhatsApp work too, and I am happy to set up a call. Based in Bangkok
            (UTC+7), working remotely with teams in Europe and Asia. {site.availability}.
          </p>
          <div className={styles.contact}>
            <a className="btn btn--primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn btn--ghost" href={site.telegramUrl}>
              Telegram {site.telegramHandle}
            </a>
            <a className="btn btn--ghost" href={site.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn--ghost" href={site.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
