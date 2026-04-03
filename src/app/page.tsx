import { ActionButton, LogoDark } from "@/components/gaming";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <section className="flex flex-1 flex-col items-center justify-center gap-10 bg-gaming-surface px-6 py-16">
        <LogoDark href="/" />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ActionButton variant="primary">Get Started</ActionButton>
          <ActionButton variant="white">Get Started</ActionButton>
        </div>
      </section>
    </div>
  );
}
