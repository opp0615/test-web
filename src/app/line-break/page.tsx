"use client";

export default function LinkBreak() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col max-w-[600px] gap-[20px]">
        <span className="break-words">{LOREM_IPSUM}</span>
        <span className="break-words">{ONLY_NUBMER}</span>
        <span className="break-words">{ONLY_SPECIAL}</span>
        <span className="break-words">{ONLY_ALPHABET}</span>
      </div>
    </main>
  );
}

const LOREM_IPSUM = `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`;

const ONLY_NUBMER =
  "112361123651125631213912441894189441923112653112635123411236112365112563121391244189418944192311265311263512341123611236511256312139124418941894419231126531126351234";
const ONLY_SPECIAL =
  "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$";
const ONLY_ALPHABET =
  "etryeuiiosdfghjknmbvcxzxertyuihgtrtyhetryeuiiosdfghjknmbvcxzxertyuihgtrtyhetryeuiiosdfghjknmbvcxzxertyuihgtrtyhetryeuiiosdfghjknmbvcxzxertyuihgtrtyhetryeuiiosdfghjknmbvcxzxertyuihgtrtyh";
