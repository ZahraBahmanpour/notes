import styles from "../Notes.module.css";
import { getNotes } from "../page";

async function getNote(id) {
  const res = await fetch(
    `https://6300a18859a8760a757d441c.mockapi.io/posts/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }) {
  const note = await getNote(params.id);
  const { id, title, body, createdAt } = note;
  return (
    <div>
      <h1>notes/{id}</h1>
      <div className={styles.note}>
        <h3>{title}</h3>
        <h5>{body}</h5>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getNotes();

  return posts.map((post) => ({
    id: post.id,
  }));
}
