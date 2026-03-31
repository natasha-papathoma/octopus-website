import PageHero from "@/components/ui/PageHero";

export default function GamePage() {
  return (
    <>
      <PageHero title="Octopus Game" description="An interactive educational game built with Phaser.js — coming soon." bgColor="#A2C617" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto text-center">
        <div className="bg-off-white rounded-3xl p-16 max-w-[600px] mx-auto">
          <span className="text-6xl mb-6 block">🎮</span>
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-text-mid leading-relaxed mb-6">
            The Octopus educational game is currently being developed. It will feature
            interactive challenges based on the Octopus framework — exploring historical
            eras through gamified learning mechanics.
          </p>
          <p className="text-sm text-text-light">
            Built with Phaser.js · Expected 2027
          </p>
        </div>
      </section>
    </>
  );
}
