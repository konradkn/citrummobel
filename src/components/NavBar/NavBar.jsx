import logo from "../../assets/company_logo/citrum_logo.png";

const NavBar = () => {
  return (
    <>
      <div className="w-screen bg-black text-slate-100 h-20 flex justify-left items-center p-4 sticky top-0 z-50">
        <div className="w-full flex justify-between">
          <div className="text-xl font-bold flex items-center">
            <h2>Citrum Mobel</h2>
          </div>
          <div className="flex items-center">
            <img src={logo} className="w-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
