import { BlogPost } from '../data/blogData';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-[20px] border border-[#e8edea] bg-[#fbfcfa] overflow-hidden hover:border-[#000] transition-all duration-300">
      {/* Image - Clickable */}
      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      
      <div className="p-5">
        {/* Category - After image, before heading */}
        <span className="text-xs font-medium text-[#000000] uppercase tracking-[0.08em] bg-[#e5e5e5] rounded-md px-2 py-1">
          {post.category}
        </span>
        
        {/* Title - Clickable */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-display mt-2 text-lg font-semibold text-[#001e61] group-hover:text-[#000000] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        {/* Excerpt */}
        <p className="mt-2 text-sm leading-relaxed text-[#4d6259] line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Author, Date, Read Time - Bottom */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#718078] border-t border-[#e8edea] pt-4">
          <span className="font-medium text-[#001e61]">
            {post.author}
          </span>
          <div className="flex items-center gap-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#d0dcd4]"></span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}