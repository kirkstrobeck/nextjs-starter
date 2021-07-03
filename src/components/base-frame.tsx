import GlobalStyles from 'root/src/global-styles';

const Base = ({ children }: { children: React.ReactNode }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default Base;
