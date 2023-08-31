import dbPool from "../../../../lib/db";

export default async function Artikel({ params }) {
  const [DATA] = await dbPool.query(
    `SELECT * FROM tb_barang WHERE brgKode="${params.artikel_id}"`
  );
  return (
    <>
      <h1>Artikel: {params.artikel_id}</h1>
      <h2>Nama: {DATA[0].brgNama}</h2>
      <h2>Harga: {DATA[0].brgHarga}</h2>
    </>
  );
}
