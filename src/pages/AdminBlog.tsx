import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, Trash2, Eye, ArrowLeft, ShieldAlert } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminBlog() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [checkingAccess, setCheckingAccess] = useState(true);

  const checkUserAccess = async (userId: string) => {
    setCheckingAccess(true);
    const { data: hasAdminRole } = await supabase.rpc('has_role', {
      _user_id: userId,
      _role: 'admin'
    });
    
    const { data: hasEditorRole } = await supabase.rpc('has_role', {
      _user_id: userId,
      _role: 'editor'
    });

    const access = hasAdminRole || hasEditorRole;
    setHasAccess(access);
    setCheckingAccess(false);
    
    if (!access) {
      toast({
        title: "Zugriff verweigert",
        description: "Sie haben keine Berechtigung für den Admin-Bereich.",
        variant: "destructive",
      });
      setTimeout(() => navigate('/'), 2000);
    }
    
    return access;
  };

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
      return;
    }
    if (user) {
      checkUserAccess(user.id).then((access) => {
        if (access) {
          fetchPosts();
        }
      });
    }
  }, [user, authLoading, navigate]);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const getStr = (key: string) => (formData.get(key) as string) ?? "";
    const toBool = (key: string) => {
      const v = formData.get(key);
      return v === "on" || v === "true" || v === "1";
    };
    const readTime = parseInt(getStr('read_time_minutes') || '5', 10) || 5;
    
    const postData = {
      title: getStr('title'),
      slug: getStr('slug'),
      teaser_text: getStr('teaser_text'),
      content_markdown: getStr('content_markdown'),
      cover_image_url: getStr('cover_image_url'),
      published: toBool('published'),
      featured: toBool('featured'),
      read_time_minutes: readTime,
      author_id: user?.id as string
    };

    const { error } = editingPost
      ? await supabase.from('blog_posts').update(postData).eq('id', (editingPost as any).id)
      : await supabase.from('blog_posts').insert(postData);

    if (!error) {
      toast({
        title: editingPost ? "Artikel aktualisiert" : "Artikel erstellt",
        description: "Der Blog-Artikel wurde erfolgreich gespeichert.",
      });
      setShowForm(false);
      setEditingPost(null);
      fetchPosts();
    } else {
      toast({
        title: "Fehler",
        description: "Der Artikel konnte nicht gespeichert werden.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Artikel wirklich löschen?')) {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (!error) {
        fetchPosts();
        toast({ title: "Artikel gelöscht" });
      }
    }
  };

  if (authLoading || checkingAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Berechtigung wird überprüft...</p>
        </div>
      </div>
    );
  }

  if (hasAccess === false) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="p-6 text-center">
              <ShieldAlert className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Zugriff verweigert</h2>
              <p className="text-muted-foreground mb-4">
                Sie haben keine Berechtigung für den Admin-Bereich. Sie benötigen Admin- oder Editor-Rechte.
              </p>
              <Button onClick={() => navigate('/')} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gradient-subtle min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/blog')} className="self-start sm:self-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zum Blog
              </Button>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Blog-Verwaltung
              </h1>
            </div>
            <Button onClick={() => { setShowForm(true); setEditingPost(null); }} className="btn-modern shadow-soft">
              <Plus className="w-4 h-4 mr-2" />
              Neuer Artikel
            </Button>
          </div>

          {showForm && (
            <Card className="mb-12 card-glass shadow-elevated border-0">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {editingPost ? 'Artikel bearbeiten' : 'Neuer Artikel'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-sm font-medium text-foreground">Titel</Label>
                      <Input 
                        name="title" 
                        defaultValue={editingPost?.title} 
                        required 
                        className="h-11 rounded-lg border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug" className="text-sm font-medium text-foreground">URL-Slug</Label>
                      <Input 
                        name="slug" 
                        defaultValue={editingPost?.slug} 
                        required 
                        className="h-11 rounded-lg border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="teaser_text" className="text-sm font-medium text-foreground">Teaser</Label>
                    <Textarea 
                      name="teaser_text" 
                      defaultValue={editingPost?.teaser_text} 
                      rows={3}
                      className="rounded-lg border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cover_image_url" className="text-sm font-medium text-foreground">Cover Bild URL</Label>
                    <Input 
                      name="cover_image_url" 
                      defaultValue={editingPost?.cover_image_url} 
                      className="h-11 rounded-lg border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content_markdown" className="text-sm font-medium text-foreground">Inhalt (Markdown)</Label>
                    <Textarea 
                      name="content_markdown" 
                      rows={12} 
                      defaultValue={editingPost?.content_markdown} 
                      className="rounded-lg border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 font-mono text-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="read_time_minutes" className="text-sm font-medium text-foreground">Lesezeit (Min.)</Label>
                      <Input 
                        name="read_time_minutes" 
                        type="number" 
                        defaultValue={editingPost?.read_time_minutes || 5} 
                        className="h-11 rounded-lg border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-surface/50 border border-border/30">
                      <Checkbox 
                        name="published" 
                        defaultChecked={editingPost?.published}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                      />
                      <Label className="text-sm font-medium text-foreground">Veröffentlicht</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-surface/50 border border-border/30">
                      <Checkbox 
                        name="featured" 
                        defaultChecked={editingPost?.featured}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label className="text-sm font-medium text-foreground">Empfohlen</Label>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/30">
                    <Button type="submit" className="btn-modern shadow-soft flex-1 sm:flex-initial h-11 px-8">
                      Speichern
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                      className="h-11 px-8 rounded-lg border-border/50 hover:bg-surface/80"
                    >
                      Abbrechen
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="card-modern border-0 shadow-card hover:shadow-elevated">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-foreground leading-tight">{post.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{post.teaser_text}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {post.published && (
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full border border-green-200">
                            ✓ Veröffentlicht
                          </span>
                        )}
                        {post.featured && (
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                            ⭐ Empfohlen
                          </span>
                        )}
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-200">
                          {post.read_time_minutes || 5} Min. Lesezeit
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-3 lg:gap-2 min-w-fit">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="h-9 px-3 rounded-lg hover:bg-surface/80 flex-1 lg:flex-initial"
                      >
                        <Eye className="w-4 h-4 mr-2 lg:mr-0" />
                        <span className="lg:hidden">Anzeigen</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => { setEditingPost(post); setShowForm(true); }}
                        className="h-9 px-3 rounded-lg hover:bg-surface/80 flex-1 lg:flex-initial"
                      >
                        <Edit className="w-4 h-4 mr-2 lg:mr-0" />
                        <span className="lg:hidden">Bearbeiten</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDelete(post.id)}
                        className="h-9 px-3 rounded-lg hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 flex-1 lg:flex-initial"
                      >
                        <Trash2 className="w-4 h-4 mr-2 lg:mr-0" />
                        <span className="lg:hidden">Löschen</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}