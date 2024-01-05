import Link from 'next/link';
import { Layout } from './layout';

const ToolCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full p-4 min-w-72">
      <div className="text-center shadow-lg flex flex-col w-full border-2 border-black rounded-md p-4 text-xl font-bold hover:shadow-md transition-all">
        {children}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-row flex-wrap py-24">
        <Link href="/tokenization">
          <ToolCard>💵 Tokenizers</ToolCard>
        </Link>
        <Link href="/">
          <ToolCard>🌌 Universe creation (Coming soon)</ToolCard>
        </Link>
      </div>
    </Layout>
  );
}
