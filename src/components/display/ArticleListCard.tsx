import React from "react";

interface ArticleListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  tags?: string[];
  date?: string | Date;
  description?: string;
  href?: string;
}

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function ArticleListCard({
  title,
  image,
  imageAlt = "",
  category,
  tags,
  date,
  description,
  href,
  className = "",
  ...props
}: ArticleListCardProps) {
  const inner = (
    <>
      {image && (
        <div className="smngs-article-list-card-image-wrap">
          <img src={image} alt={imageAlt} className="smngs-article-list-card-image" />
        </div>
      )}
      <div className="smngs-article-list-card-body">
        <div className="smngs-article-list-card-meta">
          {category && <span className="smngs-article-list-card-category">{category}</span>}
          {date && <time className="smngs-article-list-card-date">{formatDate(date)}</time>}
        </div>
        <p className="smngs-article-list-card-title">{title}</p>
        {description && <p className="smngs-article-list-card-description">{description}</p>}
        {tags && tags.length > 0 && (
          <div className="smngs-article-list-card-tags">
            {tags.map((tag) => (
              <span key={tag} className="smngs-article-list-card-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const cls = `smngs-article-list-card ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} {...(props as React.HTMLAttributes<HTMLAnchorElement> & { href?: string })}>
        {inner}
      </a>
    );
  }

  return (
    <div className={cls} {...props}>
      {inner}
    </div>
  );
}
