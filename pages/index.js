import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-8 py-2 ${inter.className}`}
    >
      <section className="text-center my-2">
        <h1 className="text-4xl font-bold">Presenting $ANKY: A new story</h1>
        <p className="text-xl mt-4">
          Discover a new narrative for humanity at the intersection of
          creativity, technology, and human values.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 aspect-square m-4 relative rounded-2xl">
            <Image src="/images/1.jpeg" fill />
          </div>
          <div className="w-1/2 aspect-square m-4 relative rounded-2xl">
            <Image src="/images/2.png" fill />
          </div>
        </div>
        <Link href="/about">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </Link>
      </section>

      {/* About Anky Section */}
      <section className="my-10 md:px-48">
        <h2 className="text-3xl font-bold">About Anky</h2>
        <p className="mt-2">
          Anky is a visionary project designed to weave together blockchain
          technology and community spirit. Our mission is to create a platform
          where creativity and technological innovation intersect, fostering a
          global community grounded in human values.
        </p>
        <p className="mt-2">
          At the heart of Anky lies the belief that technology can and should be
          a force for good, connecting people across borders and cultures, and
          empowering individuals through education, creativity, and shared
          purpose.
        </p>
      </section>

      {/* $ANKY Tokenomics Section */}
      <section className="my-10 md:px-48">
        <h2 className="text-3xl font-bold">$ANKY Tokenomics</h2>
        <p className="mt-2">
          The $ANKY token, inspired by the golden ratio, is more than just a
          cryptocurrency; it's a symbol of harmony and balance. With a total
          supply mirroring this natural constant, $ANKY is at the core of our
          ecosystem.
        </p>
        <p className="mt-2">
          Token distribution follows a unique sojourn-based release cycle,
          reflecting our commitment to long-term growth and sustainability.
          Token holders are not just investors; they are active participants in
          shaping the future of Anky.
        </p>
      </section>

      {/* Community and DAO Section */}
      <section className="my-10 md:px-48">
        <h2 className="text-3xl font-bold">Community and DAO</h2>
        <p className="mt-2">
          Our Decentralized Autonomous Organization (DAO) puts decision-making
          power into the hands of the Anky community. Every token holder can
          propose initiatives and vote on key decisions, ensuring that Anky's
          path forward is shaped democratically and transparently by its most
          vital stakeholders — its community.
        </p>
        <p className="mt-2">
          Join us and become part of a movement that values creativity,
          collaboration, and collective wisdom.
        </p>
      </section>

      {/* AI and Blockchain Integration Section */}
      <section className="my-10 md:px-48">
        <h2 className="text-3xl font-bold">AI and Blockchain Integration</h2>
        <p className="mt-2">
          In Anky, AI is more than just technology; it's your partner in
          navigating the blockchain space. Imagine an AI-driven accountability
          system that helps you stay on track with your investments and
          community engagements, ensuring a harmonious balance between
          technological advancements and human-centric values.
        </p>
      </section>

      {/* Education and Creativity Hub Section */}
      <section className="my-10 md:px-48">
        <h2 className="text-3xl font-bold">Education and Creativity Hub</h2>
        <p className="mt-2">
          Anky centers around the globe serve as hubs for learning and
          creativity. These community-driven spaces offer resources and
          workshops on blockchain technology, fostering a culture of innovation,
          learning, and artistic expression.
        </p>
        <p className="mt-2">
          By joining Anky, you're not just accessing a platform; you're becoming
          part of a global network committed to driving positive change through
          creative and technological empowerment.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center my-10">
        <button
          onClick={() => alert("join the movement!")}
          className="bg-purple-500 text-white py-2 px-4 rounded"
        >
          Join the Movement
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center my-10">
        <p>Contact us at jp@anky.lat</p>
        <p>Follow us on @ankytheape</p>
        <p>none of this is financial advice</p>
      </footer>
    </main>
  );
}
