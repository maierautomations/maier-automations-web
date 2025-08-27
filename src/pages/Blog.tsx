import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ChevronRight, Search } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  teaser_text: string;
  cover_image_url: string;
  read_time_minutes: number;
  featured: boolean;
  created_at: string;
  profiles?: {
    full_name: string;
    username: string;
  } | null;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  
  const postsPerPage = 6;

  useEffect(() => {
    fetchPosts();
    fetchFeaturedPosts();
  }, [currentPage, searchTerm]);

  const fetchPosts = async () => {
    setLoading(true);
    
    let query = supabase
      .from('blog_posts')
      .select(`
        id,
        slug,
        title,
        teaser_text,
        cover_image_url,
        read_time_minutes,
        featured,
        created_at
      `)
      .eq('published', true)
      .eq('featured', false)
      .order('created_at', { ascending: false });

    if (searchTerm) {
      query = query.or(`title.ilike.%${searchTerm}%,teaser_text.ilike.%${searchTerm}%`);
    }

    // Get total count for pagination
    const { count } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true })
      .eq('published', true)
      .eq('featured', false);

    if (count) {
      setTotalPages(Math.ceil(count / postsPerPage));
    }

    const { data, error } = await query
      .range((currentPage - 1) * postsPerPage, currentPage * postsPerPage - 1);

    if (!error && data) {
      setPosts(data as BlogPost[]);
    }
    
    setLoading(false);
  };

  const fetchFeaturedPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        id,
        slug,
        title,
        teaser_text,
        cover_image_url,
        read_time_minutes,
        featured,
        created_at
      `)
      .eq('published', true)
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(3);

    if (!error && data) {
      setFeaturedPosts(data as BlogPost[]);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd. MMMM yyyy', { locale: de });
  };

  const getAuthorName = (post: BlogPost) => {
    return post.profiles?.full_name || post.profiles?.username || 'Maier Automations';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                KI-Automatisierung{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Entdecken Sie die neuesten Trends, Best Practices und Einblicke 
                in die Welt der KI-Automatisierung, n8n-Workflows und RAG-Agenten.
              </p>

              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Blog durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Empfohlene Artikel
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="cursor-pointer hover:shadow-lg transition-shadow group"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    {post.cover_image_url && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">Empfohlen</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.read_time_minutes || 5} Min. Lesezeit
                        </div>
                      </div>
                      
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription>
                        {post.teaser_text}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.created_at)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {getAuthorName(post)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {featuredPosts.length > 0 && (
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Alle Artikel
              </h2>
            )}
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="aspect-video bg-muted rounded-t-lg"></div>
                    <CardHeader>
                      <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-6 bg-muted rounded w-full mb-2"></div>
                      <div className="h-4 bg-muted rounded w-full"></div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  Keine Artikel gefunden
                </h3>
                <p className="text-muted-foreground">
                  {searchTerm 
                    ? `Keine Artikel für "${searchTerm}" gefunden.`
                    : "Noch keine Blog-Artikel veröffentlicht."
                  }
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {posts.map((post) => (
                    <Card 
                      key={post.id} 
                      className="cursor-pointer hover:shadow-lg transition-shadow group"
                      onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                      {post.cover_image_url && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={post.cover_image_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.read_time_minutes || 5} Min. Lesezeit
                          </div>
                        </div>
                        
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        
                        <CardDescription>
                          {post.teaser_text}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.created_at)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {getAuthorName(post)}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      Vorherige
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <Button
                          key={i + 1}
                          variant={currentPage === i + 1 ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </Button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Nächste
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}