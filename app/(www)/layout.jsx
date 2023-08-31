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
          <li>
            <Link href="/artikel/">Artikel Pengguna</Link>
            <ul>
              <li>
                <Link href="/artikel/BSWABU40KG">PCC UK 40 KG</Link>
              </li>
              <li>
                <Link href="/artikel/BSWABU50KG">PCC UK 50 KG</Link>
              </li>
              <li>
                <Link href="/artikel/BSWSAPUAN">SEMEN SAPUAN</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/halaman/">Halaman Pengguna</Link>
            <ul>
              <li>
                <Link href="/halaman/BSWABU40KG">PCC UK 40 KG</Link>
              </li>
              <li>
                <Link href="/halaman/BSWABU50KG">PCC UK 50 KG</Link>
              </li>
              <li>
                <Link href="/halaman/BSWSAPUAN">SEMEN SAPUAN</Link>
              </li>
            </ul>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
