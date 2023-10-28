type HeaderProps = { title: string; category: string };

const Header = ({ title, category }: HeaderProps) => {
  return (
    <div className="mb-10">
      <p className="text-3xl font-extrabold tracking-tight text-state-900">
        {title}
      </p>
      <p className="text-gray-400">{category}</p>
    </div>
  );
};

export default Header;
