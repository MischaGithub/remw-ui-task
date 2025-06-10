interface HeaderProps {
  postcode: string;
  area: string;
  setPostcode: (value: string) => void;
  setArea: (value: string) => void;
}

const Header = ({ postcode, area, setPostcode, setArea }: HeaderProps) => {
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

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-neon-pink"
              placeholder="Postcode"
            />
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Area"
            />
          </div>
          <button className="bg-gradient-to-r from-neon-pink to-neon-blue px-4 py-2 rounded-lg text-sm font-medium text-black hover:opacity-90 transition-all duration-300 shadow-neon-pink">
            Update Location
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
