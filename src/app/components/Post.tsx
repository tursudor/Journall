import PostNavButton from "./PostNavButton";

export default function Post({ title, body, id}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <PostNavButton id={id} />
    </div>
  )
}