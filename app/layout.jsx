export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <a href="/">Halaman Utama</a>
          </li>
          <li>
            <a href="/tentang">Tentang</a>
          </li>
          <li>
            <a href="/pengaturan">Pengaturan</a>
            <ul>
              <li>
                <a href="/pengaturan/pengguna">Pengguna</a>
              </li>
              <li>
                <a href="/pengaturan/umum">Umum</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/login">Login Pengguna</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
