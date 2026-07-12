import { PlainButton } from './PlainButton';
import { BlogPost } from '../data/blogData';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-[20px] border border-[#e8edea] bg-[#fbfcfa] overflow-hidden hover:border-[#4e7b64] transition-all duration-300">
      <div className="relative overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#4e7b64] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.08em]">
          {post.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-[#718078]">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-[#d0dcd4]"></span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-display mt-2 text-lg font-semibold text-[#17362f] group-hover:text-[#4e7b64] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4d6259] line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4">
          <PlainButton href={`/blog/${post.slug}`}>
            Read More
          </PlainButton>
        </div>
      </div>
    </article>
  );
}