import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import BaseCanvas from "~/components/canvas/BaseCanvas";
import DOM from "~/components/dom/DOM";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grass Tests" },
    { name: "description", content: "Welcome to Grass Tests!" },
  ];
}

export default function Home() {
  return (
    <>
      <BaseCanvas />
      <DOM />
    </>
  );
}
