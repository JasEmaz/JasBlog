-- Enable RLS for all tables
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies for posts table
CREATE POLICY "Allow public read access to posts" ON posts FOR SELECT USING (true);
CREATE POLICY "Allow authenticated users to create posts" ON posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow author to update their own posts" ON posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Allow author to delete their own posts" ON posts FOR DELETE USING (auth.uid() = author_id);

-- Policies for comments table
CREATE POLICY "Allow public read access to comments" ON comments FOR SELECT USING (true);
CREATE POLICY "Allow authenticated users to create comments" ON comments FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow author to update their own comments" ON comments FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Allow author to delete their own comments" ON comments FOR DELETE USING (auth.uid() = author_id);

-- Policies for profiles table
CREATE POLICY "Allow public read access to profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Allow user to create their own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Allow user to update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
