import BaseFrame from 'root/src/components/base-frame';
import Button from 'root/src/components/button';
import HydrationStatus from 'root/src/components/hydration-status';

const Base = () => (
  <BaseFrame>
    <section
      css={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100vw',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <div>
        <HydrationStatus />
        <Button
          onClick={() => {
            window.alert('Build something awesome 🚀');
          }}
        />
        <p
          css={{
            marginTop: 50,
          }}
        >
          <a href="https://github.com/kirkstrobeck/nextjs-starter/">
            https://github.com/kirkstrobeck/nextjs-starter/
          </a>
        </p>
      </div>
    </section>
  </BaseFrame>
);

export default Base;
