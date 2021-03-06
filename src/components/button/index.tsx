const Base = ({
  background,
  text,
  onClick,
}: {
  background?: string;
  onClick: (event: React.MouseEvent) => void;
  text?: string;
}) => (
  <button
    css={{
      background: background || 'blue',
      border: 'none',
      borderRadius: 10,
      color: 'white',
      fontSize: 20,
      fontWeight: 600,
      padding: '20px 30px',
    }}
    onClick={onClick}
    type="button"
  >
    {text || 'Get started'}
  </button>
);

export default Base;
