import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsCard from "@/components/ui/NewsCard";
import { fallbackNews } from "@/lib/fallback-data";

const emojis = ["🚀", "📝", "🎮", "📖", "🖥️", "🎓", "🏫", "🎉", "📢"];

export default async function NewsPage() {
  let news: any[] = [];
  try {
    const { getNewsPosts } = await import("@/lib/strapi");
    const res = await getNewsPosts();
    if (res.data && res.data.length > 0) {
      news = res.data.map((item: any) => item.attributes ? { id: item.id, ...item.attributes } : item);
    }
  } catch { /* use fallback */ }

  if (news.length === 0) {
    news = fallbackNews;
  }

  return (
    <>
      <PageHero title="News & Updates" description="Follow the Octopus project as it unfolds — milestones, events, publications, and stories from the partnership." bgColor="#443B5E" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <SectionHeader tag="All Posts" title="Project Blog" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {news.map((post, i) => (
            <NewsCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              date={post.date}
              excerpt={typeof post.body === 'string' ? post.body : Array.isArray(post.body) ? post.body.map((b: any) => b.children?.map((c: any) => c.text).join('')).join(' ') : ''}
              thumbnail={post.thumbnail}
              emoji={emojis[i % emojis.length]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
