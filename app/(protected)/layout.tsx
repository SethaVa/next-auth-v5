import { Navbar } from "./_components/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-tr from-purple-500 via-indigo-500 to-sky-500">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
