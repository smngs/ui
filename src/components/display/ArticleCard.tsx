import React from "react";

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  tags?: string[];
  date?: string | Date;
  href?: string;
  compact?: boolean;
}

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function ArticleCard({
  title,
  image,
  imageAlt = "",
  category,
  tags,
  date,
  href,
  compact = false,
  className = "",
  ...props
}: ArticleCardProps) {
  const inner = (
    <>
      {image && (
        <div className="smngs-article-card-image-wrap">
          <img src={image} alt={imageAlt} className="smngs-article-card-image" />
        </div>
      )}
      <div className="smngs-article-card-body">
        {category && (
          <span className="smngs-article-card-category">{category}</span>
        )}
        <p className="smngs-article-card-title">{title}</p>
        {tags && tags.length > 0 && (
          <div className="smngs-article-card-tags">
            {tags.map((tag) => (
              <span key={tag} className="smngs-article-card-tag">{tag}</span>
            ))}
          </div>
        )}
        {date && (
          <time className="smngs-article-card-date">{formatDate(date)}</time>
        )}
      </div>
    </>
  );

  const cls = `smngs-article-card${compact ? " smngs-article-card-compact" : ""} ${className}`.trim();

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
