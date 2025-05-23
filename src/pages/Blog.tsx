import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import AsciiBorder from "@/components/AsciiBorder";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "wouter";

interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  public_reactions_count: number;
  comments_count: number;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "kanak | blog";
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=kanakos01");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto">
          <AsciiBorder position="top" />
          <div className="text-center text-primary py-8">Loading articles...</div>
          <AsciiBorder position="bottom" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto">
          <AsciiBorder position="top" />
          <div className="text-center text-destructive py-8">Error: {error}</div>
          <AsciiBorder position="bottom" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AsciiBorder position="top" />
        </motion.div>

        <div className="px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-primary glow">blogs</h1>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/70 text-primary hover:bg-primary/30 hover:border-primary hover:text-primary hover-glow transition-all duration-300 h-8 px-3"
              asChild
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                home
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            {articles.map((article) => (
              <article
                key={article.id}
                className="p-4 border border-dashed border-primary/70 relative hover-neon transition-all duration-300 group"
              >
                <div className="mt-2 flex flex-col md:flex-row gap-4">
                  {article.cover_image && (
                    <div className="md:w-1/3">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover-glow transition-all duration-300"
                      >
                        <img
                          src={article.cover_image}
                          alt={article.title}
                          className="w-full h-48 object-cover rounded-lg transition-all duration-300"
                        />
                      </a>
                    </div>
                  )}
                  <div className="md:w-2/3">
                    <h2 className="text-primary text-sm font-semibold mb-2">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary hover-glow"
                      >
                        {article.title.toLowerCase()}
                      </a>
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.description.toLowerCase()}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tag_list.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="text-primary">
                        {format(new Date(article.published_at), "MMM d, yyyy").toLowerCase()}
                      </span>
                      <span>•</span>
                      <span>🕒 {article.reading_time_minutes} min read</span>
                      <span>•</span>
                      <span>❤️ {article.public_reactions_count}</span>
                      <span>•</span>
                      <span>💬 {article.comments_count}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Footer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <AsciiBorder position="bottom" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog; 