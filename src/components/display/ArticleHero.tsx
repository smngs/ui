import React from "react";

interface ArticleHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  tags?: string[];
  date?: string | Date;
  description?: string;
}

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function ArticleHero({
  title,
  image,
  imageAlt = "",
  category,
  tags,
  date,
  description,
  className = "",
  ...props
}: ArticleHeroProps) {
  return (
    <div className={`smngs-article-hero ${className}`.trim()} {...props}>
      {image && (
        <div className="smngs-article-hero-image-wrap">
          <img src={image} alt={imageAlt} className="smngs-article-hero-image" />
        </div>
      )}
      <div className="smngs-article-hero-body">
        <div className="smngs-article-hero-meta">
          {category && <span className="smngs-article-hero-category">{category}</span>}
          {date && <time className="smngs-article-hero-date">{formatDate(date)}</time>}
        </div>
        <h1 className="smngs-article-hero-title">{title}</h1>
        {description && <p className="smngs-article-hero-description">{description}</p>}
        {tags && tags.length > 0 && (
          <div className="smngs-article-hero-tags">
            {tags.map((tag) => (
              <span key={tag} className="smngs-article-hero-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
