import { Inter } from "next/font/google";
import { ChatUI } from "./chat-ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <p>dfdasf</p> <p>dfad</p> <p>fddasf</p> <p>fddasf</p>
      <p>fddasf</p>
      <p>
        fddasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        explicabo expedita, vitae libero odio laboriosam itaque fugit
        perspiciatis sequi inventore aut doloremque vel ab assumenda eveniet
        dicta eos a iure.
      </p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <p>fddasf</p>
      <div
        className={`min-h-screen fixed bottom-10 right-10 items-end hidden md:flex ${inter.className}`}
      >
        <ChatUI />
      </div>
    </div>
  );
}
