import { UnityButton, UnityLogoDark, UnityPrimaryButton } from "@/components/unity";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <section
        className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16"
        style={{ backgroundColor: "#1c1c1c" }}
      >
        <UnityLogoDark href="/" />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <UnityPrimaryButton>Get Started</UnityPrimaryButton>
          <UnityButton variant="white">Get Started</UnityButton>
        </div>
      </section>
    </div>
  );
}
