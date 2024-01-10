export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-tr from-purple-500 via-indigo-500 to-sky-500">
      {children}
    </div>
  );
}
