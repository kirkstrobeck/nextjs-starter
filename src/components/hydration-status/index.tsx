import { useEffect, useState } from 'react';

const Base = () => {
  const [isHydrated, setIsHydrated] = useState<boolean>();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <p>Hydration: {isHydrated ? 'Complete' : 'Pending'}</p>;
};

export default Base;
