"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function CommentForm({ onSubmit }: { onSubmit?: (text: string) => void }) {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className="space-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
          // TODO: integrate with Supabase insert into comments table
          onSubmit?.(text);
          setText("");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <label className="sr-only" htmlFor="comment">Write a comment</label>
      <Textarea
        id="comment"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        minLength={2}
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={submitting || text.trim().length < 2}>Post Comment</Button>
      </div>
    </form>
  );
}


