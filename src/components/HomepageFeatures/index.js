import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'No plot claiming!',
    Img: require('@site/static/img/noclaiming.jpg').default,
    description: (
      <>
        Tired of random players griefing
        your beautiful castle but don't want to  be restricted to a claimed plot?
        We are a <span style={{fontWeight:"bold"}}> whitelisted community </span> and trust each other. 
        Therefore, we <span style={{fontWeight:"bold"}}> don't need any plot claiming system </span> and 
        you can build whereever you want, even Spawn itself! But for your ease of mind, our 
        plugins <span style={{fontWeight:"bold"}}> can rollback ANY malicious interaction 
        in the world</span>.
        We never had any game-breaking incident that 
        our experienced admins couldn't resolve in over 3 years running the server!
      </>
    ),
  },
  {
    title: 'Small and friendly community!',
    Img: require('@site/static/img/logo.png').default,
    description: (
      <>
        We are a <span style={{fontWeight:"bold"}}> small community of friends</span> that enjoy
        building epic based and creative Redstone contraptions.
        <span style={{fontWeight:"bold"}}> Some of us play over 3 years together </span>
        on this server and we've become good friends through joint adventures and building 
        projects. We're happy to invite new players to the community too. If you're 
        <span style={{fontWeight:"bold"}}> above age 15 </span> and
        reasonably <span style={{fontWeight:"bold"}}> mature </span> feel free to apply on our Discord! See you soon!
      </>
    ),
  },
  {
    title: 'Relaxed building, no PvP!',
    Img: require('@site/static/img/nopvp.jpg').default,
    description: (
      <>
        We're <span style={{fontWeight:"bold"}}> here to build amazing bases together and prefer a rather relaxed
        playing experience</span>. But if you need to flex some muscles with your friends you can do
        that of course. However, if you want to continue with your base uninteruptedly,
        you <span style={{fontWeight:"bold"}}> can toggle PvP off </span> with just a 
        single command!
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={Img} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
