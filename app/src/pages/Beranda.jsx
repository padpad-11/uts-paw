import mahasiswa from "../../mahasiswa.json"
import { Link } from "react-router-dom"
import useKoleksi from "../hooks/useKoleksi.js"

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map(item => item.kategori)).size

  return (
    <section>
      <h1>Portofolio Proyek</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <p>
          Ada {items.length} proyek dari {jumlahKategori} kategori.
        </p>
        )}
        Lihat <Link to="/koleksi">daftar proyek</Link> untuk detailnya.
    </section>
  )
}