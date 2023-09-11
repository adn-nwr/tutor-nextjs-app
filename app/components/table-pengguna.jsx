"use client";

import { useRouter } from "next/navigation";

export function TablePengguna({ listPengguna = [] }) {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.refresh()}>Refresh Halaman</button>
      <button onClick={() => router.push("/pengaturan/pengguna")}>
        Refresh Data
      </button>
      <br />
      <br />
      <table border={1} cellPadding={2} cellSpacing={2}>
        <thead>
          <tr>
            <th>userId</th>
            <th>userNama</th>
            <th>userLastLogin</th>
          </tr>
        </thead>
        <tbody>
          <TableBodyPengguna listPengguna={listPengguna} />
        </tbody>
      </table>
    </>
  );
}

function TableBodyPengguna({ listPengguna }) {
  if (listPengguna.length == 0)
    return (
      <tr>
        <td colSpan="3" align="center">
          Data tidak ditemukan !
        </td>
      </tr>
    );
  else
    return (
      <>
        {listPengguna.map((pengguna, idx) => (
          <tr key={idx}>
            <td>{pengguna.userId}</td>
            <td>{pengguna.userNama}</td>
            <td>{pengguna.userLastLogin}</td>
          </tr>
        ))}
      </>
    );
}
