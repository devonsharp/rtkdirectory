
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  readTime: string;
}

const BlogPostHeader = ({ title, date, readTime }: BlogPostHeaderProps) => {
  return (
    <>
      <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <div className="flex items-center text-gray-500 space-x-2 mb-6">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </header>
    </>
  );
};

export default BlogPostHeader;
