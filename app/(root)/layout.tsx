export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen w-full">{children}</main>;
}
