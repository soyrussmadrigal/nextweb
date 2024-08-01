import Link from "next/link";
export default function StoreLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Store Layout</h3>
        <ul>
          <li>
            <Link href="/store/">Store</Link>
          </li>
          <li>
            <Link href="/store/categories/">Categories</Link>
          </li>
          <li>
            <Link href="/store/categories/laptop/">Laptop</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
