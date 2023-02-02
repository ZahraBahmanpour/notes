import Link from "next/link";
import styles from "./Note.module.css";

export default function Note({ id, title, body, createdAt }) {
  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{body}</h5>
        <p>{new Date(createdAt).toDateString()}</p>
      </div>
    </Link>
  );
}
