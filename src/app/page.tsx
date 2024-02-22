/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import GeneratePostButton from "./components/GeneratePostButton";

export default function Home() {
  return (
    <>
      <h1>Welcome back to your journal</h1>
      <p>Here We'll put the daily posts</p>
      <GeneratePostButton />
    </>
  );
}
