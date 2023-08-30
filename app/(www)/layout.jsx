import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <Link href="/">Halaman Utama</Link>
          </li>
          <li>
            <Link href="/login">Login Pengguna</Link>
          </li>
          <li>
            <Link href="/signup">Daftar Pengguna</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
