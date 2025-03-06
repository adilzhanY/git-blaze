export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="font-montserrat bg-black">{children}</main>;
}
