import styles from './Map.module.scss';

export default function Map() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a
        href="https://yandex.ru/maps/org/strayk/205918721725/?utm_medium=mapframe&utm_source=maps"
        className={styles.main}
        style={{ top: '0px' }}
      >
        Страйк
      </a>
      <a
        href="https://yandex.ru/maps/977/republic-of-crimea/category/bowling/184106360/?utm_medium=mapframe&utm_source=maps"
        className={styles.main}
        style={{ top: '14px' }}
      >
        Боулинг-клуб в Республике Крым
      </a>
      <a
        href="https://yandex.ru/maps/977/republic-of-crimea/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps"
        className={styles.main}
        style={{ top: '28px' }}
      >
        Кафе в Республике Крым
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?display-text=strike%20%D0%B1%D0%BE%D1%83%D0%BB%D0%B8%D0%BD%D0%B3%20%D1%8F%D0%BB%D1%82%D0%B0&ll=34.077848%2C44.427355&mode=search&oid=205918721725&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ6ZYDjXDEFAEbfte9RfeUZAEhIJ%2BWcG8YEdxz8Rwktw6gPJsz8iBgABAgMEBSgKOABAhLMHSAFqAnJ1nQHNzEw9oAEAqAEAvQEAb8CHwgEGva3Zjf8F6gEA8gEA%2BAEAggIec3RyaWtlINCx0L7Rg9C70LjQvdCzINGP0LvRgtCwigIAkgIFMTE0NzCaAgxkZXNrdG9wLW1hcHM%3D&sll=34.077848%2C44.427355&sspn=0.014090%2C0.006085&text=strike%20%D0%B1%D0%BE%D1%83%D0%BB%D0%B8%D0%BD%D0%B3%20%D1%8F%D0%BB%D1%82%D0%B0&z=16.68"
        width="560"
        height="400"
        frameBorder="1"
        allowFullScreen={true}
        style={{ position: 'relative', width: '90%', margin: '0 auto' }}
      ></iframe>
    </div>
  );
}
