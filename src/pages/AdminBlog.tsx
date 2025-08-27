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
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminBlog() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
      return;
    }
    if (user) {
      fetchPosts();
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

  if (authLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Blog-Verwaltung</h1>
            <Button onClick={() => { setShowForm(true); setEditingPost(null); }}>
              <Plus className="w-4 h-4 mr-2" />
              Neuer Artikel
            </Button>
          </div>

          {showForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{editingPost ? 'Artikel bearbeiten' : 'Neuer Artikel'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Titel</Label>
                      <Input name="title" defaultValue={editingPost?.title} required />
                    </div>
                    <div>
                      <Label htmlFor="slug">URL-Slug</Label>
                      <Input name="slug" defaultValue={editingPost?.slug} required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="teaser_text">Teaser</Label>
                    <Textarea name="teaser_text" defaultValue={editingPost?.teaser_text} />
                  </div>
                  
                  <div>
                    <Label htmlFor="cover_image_url">Cover Bild URL</Label>
                    <Input name="cover_image_url" defaultValue={editingPost?.cover_image_url} />
                  </div>
                  
                  <div>
                    <Label htmlFor="content_markdown">Inhalt (Markdown)</Label>
                    <Textarea name="content_markdown" rows={10} defaultValue={editingPost?.content_markdown} />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="read_time_minutes">Lesezeit (Min.)</Label>
                      <Input name="read_time_minutes" type="number" defaultValue={editingPost?.read_time_minutes || 5} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox name="published" defaultChecked={editingPost?.published} />
                      <Label>Veröffentlicht</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox name="featured" defaultChecked={editingPost?.featured} />
                      <Label>Empfohlen</Label>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button type="submit">Speichern</Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Abbrechen
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{post.title}</h3>
                      <p className="text-muted-foreground text-sm">{post.teaser_text}</p>
                      <div className="flex gap-2 mt-2">
                        {post.published && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Veröffentlicht</span>}
                        {post.featured && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Empfohlen</span>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => navigate(`/blog/${post.slug}`)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => { setEditingPost(post); setShowForm(true); }}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="w-4 h-4" />
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