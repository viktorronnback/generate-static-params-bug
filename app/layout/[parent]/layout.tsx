export function generateStaticParams() {
  return [{ parent: "parent1" }, { parent: "parent2" }];
}

export default function Layout({ children }) {
  return <div>{children}</div>;
}
