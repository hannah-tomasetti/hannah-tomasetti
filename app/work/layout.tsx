import Nav from "@/components/Nav";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
