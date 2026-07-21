import { useState } from 'react';
import { 
  ClockIcon, 
  UserIcon
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { PlainButton } from '../components/PlainButton';
import { Newsletter } from '../components/Newsletter';
import { BlogCard } from '../components/BlogCard';
import { 
  blogPosts,
  getAllCategories, 
  getFilteredPosts 
} from '../data/blogData';

export function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get the latest blog (most recent date)
  const latestPost = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })[0];

  const categories = getAllCategories();
  const filteredPosts = getFilteredPosts(searchTerm, selectedCategory);

  return (
    <main className="w-full bg-[#f6f7f5] text-[#001e61] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]">

        {/* Hero Section - Latest Blog */}
        <section className="overflow-hidden rounded-[24px] bg-[#eee] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-[20px] overflow-hidden bg-[#eef3f0]">
                {latestPost.image ? (
                  <img
                    src={latestPost.image}
                    alt={latestPost.title}
                    className="h-full w-full object-cover"
                    style={{ maxHeight: '400px', minHeight: '300px' }}
                  />
                ) : (
                  <div 
                    className="flex items-center justify-center bg-[#eef3f0]"
                    style={{ maxHeight: '400px', minHeight: '300px' }}
                  >
                    <span className="text-[#000000] font-medium">No image</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-[#000] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Latest
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-[#000000] uppercase tracking-[0.08em]">
                  {latestPost.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#d0dcd4]"></span>
                <span className="text-xs text-[#718078]">{latestPost.date}</span>
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#001e61] sm:text-4xl lg:text-5xl">
                {latestPost.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#4d6259] sm:text-lg">
                {latestPost.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-5">
                <div className="flex items-center gap-2 text-sm text-[#718078]">
                  <UserIcon size={16} />
                  <span>{latestPost.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#718078]">
                  <ClockIcon size={16} />
                  <span>{latestPost.readTime}</span>
                </div>
              </div>
              <div className="mt-6">
                <PlainButton href={`/blog/${latestPost.slug}`}>
                  Read Full Article
                </PlainButton>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="overflow-hidden rounded-[24px] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#000000]">
                Articles
              </p>
              <h2 className="font-display mt-1 text-2xl font-semibold text-[#001e61] sm:text-3xl">
                Insights for Clearer Thinking
              </h2>
            </div>
            <span className="text-sm text-[#718078]">
              {filteredPosts.length} articles
            </span>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#001e61] text-white'
                      : 'bg-white text-[#4d6259] hover:bg-[#eef3f0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 text-sm border border-[#d0dcd4] rounded-full bg-white text-[#001e61] placeholder-[#a0b0a8] focus:outline-none focus:ring-2 focus:ring-[#000] sm:w-64"
            />
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#718078]">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>

        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}