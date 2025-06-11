const Header = () => {
  return (
    <header className="max-w-6xl mx-auto mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-neon-pink to-neon-blue w-12 h-12 rounded-xl flex items-center justify-center text-black font-bold text-xl">
            WW
          </div>
          <h1 className="ml-3 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue">
            We Want Waste
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
