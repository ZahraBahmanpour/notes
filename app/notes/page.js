import styles from "./Notes.module.css";
import Note from "../../components/note";
// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

async function getNotes() {
  const res = await fetch("https://6300a18859a8760a757d441c.mockapi.io/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} {...note} />;
        })}
      </div>
    </div>
  );
}
