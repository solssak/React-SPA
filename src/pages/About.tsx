import { useRouter } from "../hook/useRouter";

export const About = () => {
  const { push } = useRouter();
  return (
    <>
      <h2>About Page</h2>
      <button onClick={() => push("/")}>Go to Root</button>
      <button>About Page</button>
    </>
  );
};
