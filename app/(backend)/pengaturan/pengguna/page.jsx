import { ambilListPengguna } from "../../../lib/pengguna";
import { TablePengguna } from "../../../components/table-pengguna";

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
