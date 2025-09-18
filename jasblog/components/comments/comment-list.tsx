import { Card, CardContent } from "@/components/ui/card";

export interface CommentItem {
  id: string;
  author: { name: string };
  content: string;
  createdAt: string;
}

export function CommentList({ comments = [] as CommentItem[] }: { comments?: CommentItem[] }) {
  if (!comments.length) {
    return <p className="text-sm text-muted-foreground">No comments yet. Be the first to comment.</p>;
  }

  return (
    <div className="space-y-3">
      {comments.map((c) => (
        <Card key={c.id}>
          <CardContent className="flex flex-col gap-1 p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{c.author.name}</span>
              <time dateTime={c.createdAt}>{new Date(c.createdAt).toLocaleString()}</time>
            </div>
            <p className="text-sm leading-relaxed">{c.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


