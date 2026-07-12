export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorBio?: string;
  featured: boolean;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'the-decision-that-changes-everything',
    title: 'The Decision That Changes Everything',
    excerpt: 'Most business problems aren\'t business problems. They\'re decision problems.',
    content: `
      <p>Most business problems aren't business problems. They're decision problems.</p>
      <p>You have the strategy. You have the team. You have the resources. But you keep hesitating. Second-guessing. Waiting for the "right" moment that never comes.</p>
      <p>Here's the truth: The decision that changes everything is the one you keep delaying.</p>
      <h2>The Cost of Indecision</h2>
      <p>Every day you wait is a day you lose momentum. Opportunities pass. Competitors move ahead. And your confidence slowly erodes.</p>
      <p>Indecision isn't neutral — it's a decision to stay stuck. And it costs you more than you realize.</p>
      <h2>Why We Get Stuck</h2>
      <p>Most people think indecision is about not having enough information. It's not. It's about fear — fear of making the wrong choice, fear of consequences, fear of what others will think.</p>
      <p>But here's what I've learned after 29+ years of helping business owners: The right decision at the right time changes everything.</p>
      <h2>The Framework for Decisive Action</h2>
      <ol>
        <li><strong>Clarify the question:</strong> What are you really deciding?</li>
        <li><strong>Identify the fear:</strong> What's actually holding you back?</li>
        <li><strong>Reframe the risk:</strong> What's the cost of not deciding?</li>
        <li><strong>Take aligned action:</strong> Move forward with confidence.</li>
      </ol>
      <p>Your business is waiting for you to decide. Your life is waiting for you to decide. The only question is: Will you?</p>
      <p>If you're ready to stop hesitating and start leading, I'm here to help.</p>
    `,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    category: 'Decision Making',
    date: 'June 15, 2025',
    readTime: '5 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: true,
    tags: ['Decision Making', 'Leadership', 'Mindset']
  },
  {
    id: 2,
    slug: 'how-to-stop-overthinking-and-start-leading',
    title: 'How to Stop Overthinking and Start Leading',
    excerpt: 'Overthinking is the silent killer of business growth.',
    content: `
      <p>Overthinking is the silent killer of business growth. It drains your energy, steals your time, and prevents you from taking the action that matters.</p>
      <p>In this article, I'll show you how to quiet the noise and make decisions with confidence and speed.</p>
      <h2>The Overthinking Trap</h2>
      <p>You analyze every angle. You consider every possible outcome. You wait for more data, more input, more certainty.</p>
      <p>But certainty never comes. And while you're waiting, opportunities are passing you by.</p>
      <h2>How to Break Free</h2>
      <p>The key to stopping overthinking isn't thinking less — it's thinking differently. Here's how:</p>
      <ul>
        <li>Set a decision deadline and stick to it.</li>
        <li>Focus on what you can control.</li>
        <li>Trust your gut — it's smarter than you think.</li>
        <li>Reframe failure as feedback, not defeat.</li>
      </ul>
      <p>Leadership isn't about being perfect. It's about being decisive. When you lead with clarity, others follow.</p>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    category: 'Leadership',
    date: 'June 10, 2025',
    readTime: '4 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: false,
    tags: ['Leadership', 'Overthinking', 'Productivity']
  },
  {
    id: 3,
    slug: 'the-secret-to-unshakeable-confidence',
    title: 'The Secret to Unshakeable Confidence',
    excerpt: 'Confidence isn\'t something you have — it\'s something you build.',
    content: `
      <p>Confidence isn't something you have — it's something you build. And it's built through consistent action, not wishful thinking.</p>
      <h2>What Confidence Really Is</h2>
      <p>Confidence is the belief that you can handle whatever comes your way. It's not about never failing — it's about knowing you'll survive and grow from it.</p>
      <h2>How to Build It</h2>
      <ul>
        <li>Take small risks every day.</li>
        <li>Celebrate your wins, no matter how small.</li>
        <li>Learn from failure instead of fearing it.</li>
        <li>Surround yourself with people who believe in you.</li>
      </ul>
      <p>Remember: Confidence is a skill, not a personality trait. And like any skill, it can be developed with practice.</p>
    `,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    category: 'Confidence',
    date: 'June 5, 2025',
    readTime: '6 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: false,
    tags: ['Confidence', 'Mindset', 'Personal Growth']
  },
  {
    id: 4,
    slug: 'why-smb-owners-burn-out-and-how-to-prevent-it',
    title: 'Why SMB Owners Burn Out and How to Prevent It',
    excerpt: 'Burnout isn\'t a badge of honor — it\'s a business problem.',
    content: `
      <p>Burnout isn't a badge of honor — it's a business problem. And it's costing you more than you realize.</p>
      <p>When you're burned out, you can't think clearly. You can't make good decisions. You can't lead effectively.</p>
      <h2>The Warning Signs</h2>
      <ul>
        <li>Constant exhaustion that rest doesn't fix.</li>
        <li>Cynicism and detachment from your work.</li>
        <li>Reduced performance and productivity.</li>
        <li>Feeling like nothing you do is enough.</li>
      </ul>
      <h2>How to Prevent It</h2>
      <p>Prevention is better than cure. Here's how to protect yourself:</p>
      <ul>
        <li>Set boundaries and stick to them.</li>
        <li>Delegate what you don't need to do.</li>
        <li>Prioritize sleep, exercise, and time off.</li>
        <li>Get help before you hit the wall.</li>
      </ul>
      <p>Your business needs you healthy. Don't wait until it's too late.</p>
    `,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    category: 'Burnout',
    date: 'May 28, 2025',
    readTime: '7 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: false,
    tags: ['Burnout', 'Wellness', 'Leadership']
  },
  {
    id: 5,
    slug: 'nlp-techniques-for-better-communication',
    title: 'NLP Techniques for Better Communication',
    excerpt: 'Communication is the foundation of leadership.',
    content: `
      <p>Communication is the foundation of leadership. If you can't communicate effectively, you can't lead effectively.</p>
      <h2>What is NLP?</h2>
      <p>Neuro-Linguistic Programming (NLP) is the study of how language and communication affect the mind and behavior. It's a powerful tool for improving how you connect with others.</p>
      <h2>Key Techniques</h2>
      <ul>
        <li><strong>Rapport building:</strong> Mirror body language and speech patterns.</li>
        <li><strong>Reframing:</strong> Change the meaning of a situation by changing the frame.</li>
        <li><strong>Anchoring:</strong> Associate a trigger with a desired emotional state.</li>
        <li><strong>Meta-model:</strong> Ask questions to uncover deeper meaning.</li>
      </ul>
      <p>Master these techniques and watch your communication — and your leadership — transform.</p>
    `,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80',
    category: 'NLP',
    date: 'May 20, 2025',
    readTime: '5 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: false,
    tags: ['NLP', 'Communication', 'Leadership']
  },
  {
    id: 6,
    slug: 'the-power-of-subconscious-reprogramming',
    title: 'The Power of Subconscious Reprogramming',
    excerpt: 'Your subconscious mind is running the show.',
    content: `
      <p>Your subconscious mind is running the show. And most of the time, you don't even know it.</p>
      <p>95% of your thoughts, beliefs, and behaviors are driven by your subconscious. That's why willpower alone rarely works — you're fighting against a much deeper program.</p>
      <h2>How to Reprogram</h2>
      <ul>
        <li>Identify the limiting belief.</li>
        <li>Understand where it came from.</li>
        <li>Create a new empowering belief.</li>
        <li>Install it through repetition and emotion.</li>
      </ul>
      <p>When you change your subconscious programming, you change your life. It's that simple — and that powerful.</p>
    `,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    category: 'Mindset',
    date: 'May 15, 2025',
    readTime: '6 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: false,
    tags: ['Mindset', 'Subconscious', 'Transformation']
  },
  {
    id: 7,
    slug: 'how-to-handle-high-stakes-conversations',
    title: 'How to Handle High-Stakes Conversations',
    excerpt: 'High-stakes conversations can make or break your business.',
    content: `
      <p>High-stakes conversations can make or break your business. Learn the framework for handling them with grace and authority.</p>
      <h2>The Framework</h2>
      <ul>
        <li>Prepare with clarity.</li>
        <li>Stay calm under pressure.</li>
        <li>Listen more than you speak.</li>
        <li>Speak with conviction.</li>
      </ul>
      <p>When you master high-stakes conversations, you master your business.</p>
    `,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    category: 'Communication',
    date: 'May 10, 2025',
    readTime: '4 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: false,
    tags: ['Communication', 'Leadership', 'Negotiation']
  },
  {
    id: 8,
    slug: 'the-entrepreneurs-guide-to-work-life-harmony',
    title: 'The Entrepreneur\'s Guide to Work-Life Harmony',
    excerpt: 'Work-life balance is a myth. Work-life harmony is real.',
    content: `
      <p>Work-life balance is a myth. Work-life harmony is real. Learn how to build a business that supports your life without sacrificing success.</p>
      <h2>What is Work-Life Harmony?</h2>
      <p>Harmony is about integration, not separation. It's about creating a life where work and personal life complement each other, not compete.</p>
      <h2>How to Achieve It</h2>
      <ul>
        <li>Define what matters most.</li>
        <li>Set boundaries that protect your priorities.</li>
        <li>Delegate what you don't need to do.</li>
        <li>Build systems that support your lifestyle.</li>
      </ul>
      <p>Success without fulfillment is failure. Build a business that supports the life you want to live.</p>
    `,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    category: 'Balance',
    date: 'May 5, 2025',
    readTime: '5 min read',
    author: 'Mark H. Siegel',
    authorBio: 'Mark H. Siegel is a Personal Mind Trainer, NLP Master Trainer, and Hypnosis Expert with over 29 years of experience helping business owners transform their mindset.',
    featured: false,
    tags: ['Balance', 'Wellness', 'Leadership']
  }
];

// Helper functions
export const getFeaturedPost = (): BlogPost => {
  return blogPosts.find(post => post.featured) || blogPosts[0];
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (post: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, limit);
};

export const getAllCategories = (): string[] => {
  return ['All', ...new Set(blogPosts.map(post => post.category))];
};

export const getFilteredPosts = (searchTerm: string, category: string): BlogPost[] => {
  return blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || post.category === category;
    return matchesSearch && matchesCategory && !post.featured;
  });
};