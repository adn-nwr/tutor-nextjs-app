import { ambilListPengguna } from "../../../../lib/pengguna";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

export default async function Pengguna() {
  const DATA = await ambilListPengguna();
  return (
    <>
      <h1>Pengaturan - Pengguna</h1>
      <TablePengguna listPengguna={JSON.parse(JSON.stringify(DATA))} />
    </>
  );
}

function TablePengguna({ listPengguna = [] }) {
  return (
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
