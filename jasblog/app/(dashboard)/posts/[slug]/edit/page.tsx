"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function EditPostPage() {
  const params = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    // TODO: fetch post by id from Supabase and populate state
    const timeout = setTimeout(() => {
      setTitle("Sample Post Title");
      setContent("MDX content placeholder...");
      setTags(["demo", "mdx"]);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [params.slug]);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Edit Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="title">Title</label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="content">Content (MDX)</label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your MDX here..." className="min-h-[300px]" />
            {/* TODO: Replace Textarea with a real MDX editor component */}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} variant="secondary">#{t}</Badge>
              ))}
            </div>
            <Input placeholder="Add tag and press Enter" onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const value = (e.target as HTMLInputElement).value.trim();
                if (value && !tags.includes(value)) setTags([...tags, value]);
                (e.target as HTMLInputElement).value = "";
              }
            }} />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="meta">
              <AccordionTrigger>Metadata</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Canonical URL" />
                  <Input placeholder="Cover Image URL" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-end gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button>Update Post</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


