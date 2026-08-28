interface CustomerPortalBtnProps {
  className?: string;
  name?: string;
  onClick?: () => void;
}

function Button({ className, name, onClick }: CustomerPortalBtnProps) {
  return (
    <button onClick={onClick} className={className}>
      <span>{name}</span>
    </button>
  );
}

export default Button;
