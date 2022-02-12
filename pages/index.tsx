import BaseFrame from 'root/src/components/base-frame';

import Button from 'root/src/components/button';

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
        <Button
          onClick={() => {
            window.alert('Build something awesome 🚀');
          }}
        />
      </div>
    </section>
  </BaseFrame>
);

export default Base;
