import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  SparklesIcon,
  ArrowRightIcon,
  MenuIcon,
  XIcon,
  LinkedinIcon,
  MailIcon
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { 
  getPostBySlug, 
  BlogPost,
  blogPosts
} from '../data/blogData';
import { PlainButton } from '../components/PlainButton';

// Helper to extract headings from content
const extractHeadings = (content: string) => {
  const headingRegex = /<h2>(.*?)<\/h2>/g;
  const matches = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    matches.push({ text, id });
  }
  return matches;
};

// Helper to add IDs to headings in content
const addHeadingIds = (content: string) => {
  return content.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h2 id="${id}">${text}</h2>`;
  });
};

// Get last 3 blogs (excluding current)
const getLastThreeBlogs = (currentSlug: string) => {
  const sorted = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return sorted.filter(post => post.slug !== currentSlug).slice(0, 3);
};

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [lastThreePosts, setLastThreePosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState<{ text: string; id: string }[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [contentWithIds, setContentWithIds] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const found = getPostBySlug(slug || '');
      if (found) {
        setPost(found);
        // Get last 3 blogs excluding current
        const lastThree = getLastThreeBlogs(slug || '');
        setLastThreePosts(lastThree);
        const extracted = extractHeadings(found.content);
        setHeadings(extracted);
        setContentWithIds(addHeadingIds(found.content));
      } else {
        navigate('/blogs');
      }
      setLoading(false);
    }, 300);
  }, [slug, navigate]);

  // Intersection Observer for active heading
  useEffect(() => {
    if (!post || !contentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66% 0px' }
    );

    const timer = setTimeout(() => {
      const headingElements = contentRef.current?.querySelectorAll('h2');
      headingElements?.forEach((h) => observer.observe(h));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [post, contentWithIds]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveHeading(id);
      setMobileTocOpen(false);
    }
  };

  const handleRelatedClick = (relatedSlug: string) => {
    navigate(`/blog/${relatedSlug}`);
  };

  if (loading) {
    return (
      <main className="w-full bg-[#f6f7f5] px-4 py-4 text-[#17362f] sm:px-6 sm:py-6 lg:px-[50px] lg:py-[50px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[24px] bg-white px-5 py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#4e7b64] border-t-transparent"></div>
            <p className="mt-4 text-[#718078]">Loading article...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="w-full bg-[#f6f7f5] px-4 py-4 text-[#17362f] sm:px-6 sm:py-6 lg:px-[50px] lg:py-[50px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[24px] bg-white px-5 py-20 text-center">
            <h2 className="font-display text-2xl font-semibold text-[#17362f]">Article Not Found</h2>
            <p className="mt-2 text-[#718078]">The article you're looking for doesn't exist.</p>
            <Link to="/blogs" className="mt-4 inline-block text-[#4e7b64] hover:underline">
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f6f7f5] text-[#17362f] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7  ">
        {/* THUMBNAIL IMAGE */}
        {post.image && (
          <div className="overflow-hidden rounded-[24px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        )}

        {/* Main Content with Table of Contents + Right Sidebar */}
        <div className="relative flex flex-col sm:flex-row gap-8">
          {/* Mobile TOC Toggle - Hidden on sm and above */}
          {headings.length > 0 && (
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="sm:hidden fixed bottom-6 right-6 z-50 rounded-full bg-[#4e7b64] p-3 text-white shadow-lg hover:bg-[#3a624f] transition-colors"
            >
              {mobileTocOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          )}

          {/* LEFT - Table of Contents (Visible on sm and above, hidden below sm) */}
          {headings.length > 0 && (
            <aside className="hidden sm:block w-48 md:w-64 shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#4e7b64] mb-4">
                  On this page
                </p>
                <nav className="space-y-2">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`block text-sm transition-all duration-200 text-left w-full ${
                        activeHeading === heading.id
                          ? 'text-[#4e7b64] font-semibold pl-3 border-l-2 border-[#4e7b64]'
                          : 'text-[#718078] hover:text-[#17362f] pl-3 border-l-2 border-transparent hover:border-[#d0dcd4]'
                      }`}
                    >
                      {heading.text}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Mobile TOC Overlay - Only below sm */}
          {mobileTocOpen && headings.length > 0 && (
            <div className="sm:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileTocOpen(false)}>
              <div className="absolute bottom-24 left-4 right-4 bg-white rounded-[20px] p-6 shadow-xl max-h-[60vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#4e7b64] mb-4">
                  On this page
                </p>
                <nav className="space-y-3">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`block text-sm transition-all duration-200 text-left w-full ${
                        activeHeading === heading.id
                          ? 'text-[#4e7b64] font-semibold'
                          : 'text-[#718078] hover:text-[#17362f]'
                      }`}
                    >
                      {heading.text}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* CENTER - Blog Content */}
          <article className="flex-1 overflow-hidden rounded-[24px] bg-white px-[32px] py-[32px]">
            <div className="mx-auto ">
              {/* Category and Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-[#4e7b64] uppercase tracking-[0.08em]">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#d0dcd4]"></span>
                <span className="text-xs text-[#718078]">{post.date}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              {/* Author info under title */}
              <div className="flex items-center gap-3 mt-4">
                <div className="h-10 w-10 rounded-full bg-[#4e7b64] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#17362f]">{post.author}</p>
                  <p className="text-xs text-[#718078]">{post.readTime}</p>
                </div>
              </div>

              {/* Content */}
              <div 
                ref={contentRef}
                className="mt-8 blog-content"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* AUTHOR SECTION AT BOTTOM */}
              <div className="mt-12 rounded-[20px] bg-[#eef3f0] p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="h-16 w-16 rounded-full bg-[#4e7b64] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-[#17362f]">
                      {post.author}
                    </h3>
                    {post.authorBio && (
                      <p className="text-sm text-[#4d6259] mt-1">{post.authorBio}</p>
                    )}
                    <div className="flex items-center gap-4 mt-3">
                      <a 
                        href="https://linkedin.com/in/marksiegel" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#4e7b64] hover:text-[#3a624f] transition-colors"
                      >
                        <LinkedinIcon size={16} />
                        Follow on LinkedIn
                      </a>
                      <a 
                        href="/contact" 
                        className="inline-flex items-center gap-2 text-sm text-[#4e7b64] hover:text-[#3a624f] transition-colors"
                      >
                        <MailIcon size={16} />
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT - Sidebar (Hidden on sm, visible on lg) */}
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Follow on LinkedIn */}
              <div className="rounded-[20px] bg-white p-6 text-center border border-[#e8edea]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef3f0] text-[#4e7b64]">
                  <LinkedinIcon size={24} />
                </div>
                <h3 className="font-display mt-3 text-sm font-semibold text-[#17362f]">
                  Follow Mark on LinkedIn
                </h3>
                <p className="mt-1 text-xs text-[#718078]">
                  Get daily insights on mindset, leadership, and transformation.
                </p>
                <a 
                  href="https://linkedin.com/in/marksiegel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4e7b64] px-4 py-2 text-xs font-bold text-white hover:bg-[#3a624f] transition-colors"
                >
                  <LinkedinIcon size={14} />
                  Follow
                </a>
              </div>

              {/* CTA */}
              <div className="rounded-[20px] bg-[#17362f] p-6 text-center border border-[#17362f]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4e7b64]/20 text-[#d7e9dc]">
                  <SparklesIcon size={24} />
                </div>
                <h3 className="font-display mt-3 text-sm font-semibold text-white">
                  Ready to Transform Your Mindset?
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  Book a free Discovery Call and get unstuck.
                </p>
                <a 
                  href="/contact" 
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4e7b64] px-4 py-2 text-xs font-bold text-white hover:bg-[#3a624f] transition-colors"
                >
                  Book Your Free Call
                  <ArrowRightIcon size={12} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Last 3 Blogs - Styled like Articles section */}
        {lastThreePosts.length > 0 && (
          <section className="overflow-hidden rounded-[24px] bg-white px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20">
            <div className="mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
                    Recent Articles
                  </p>
                  <h2 className="font-display mt-1 text-2xl font-semibold text-[#17362f] sm:text-3xl">
                    Continue Reading
                  </h2>
                </div>
                <PlainButton href={`/blog/${post.slug}`}>
                  View More
                </PlainButton>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {lastThreePosts.map((related) => (
                  <div 
                    key={related.id} 
                    onClick={() => handleRelatedClick(related.slug)}
                    className="group rounded-[16px] border border-[#e8edea] overflow-hidden hover:border-[#4e7b64] transition-all duration-300 cursor-pointer"
                  >
                    {related.image && (
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <span className="text-xs font-medium text-[#4e7b64] uppercase tracking-[0.08em]">
                        {related.category}
                      </span>
                      <h3 className="font-display mt-1 text-sm font-semibold text-[#17362f] group-hover:text-[#4e7b64] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#718078]">{related.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>

      {/* Blog Content Styles */}
      <style>{`
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #17362f;
          line-height: 1.3;
          scroll-margin-top: 80px;
        }

        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #17362f;
        }

        .blog-content p {
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 1rem;
          color: #4d6259;
        }

        .blog-content strong {
          font-weight: 700;
          color: #17362f;
        }

        .blog-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .blog-content ul li {
          font-size: 1rem;
          line-height: 1.8;
          color: #4d6259;
          margin-bottom: 0.5rem;
        }

        .blog-content ol {
          list-style: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .blog-content ol li {
          font-size: 1rem;
          line-height: 1.8;
          color: #4d6259;
          margin-bottom: 0.5rem;
        }

        .blog-content blockquote {
          border-left: 4px solid #4e7b64;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #17362f;
        }

        .blog-content a {
          color: #4e7b64;
          text-decoration: underline;
        }

        .blog-content a:hover {
          color: #3a624f;
        }
      `}</style>
    </main>
  );
}