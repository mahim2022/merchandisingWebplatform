import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTAButton from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  getContactEmail,
  getLogoUrl,
  getSiteName,
  getSiteUrl,
} from "@/lib/seo";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { ArrowLeft, CalendarDays, Clock3, Tag } from "lucide-react";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog Post",
      description: "Not found.",
      path: `/blog/${slug}`,
    });
  }

  const baseMetadata = buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: "article",
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteName = getSiteName();
  const siteUrl = getSiteUrl();
  const logoUrl = getLogoUrl();
  const contactEmail = getContactEmail();

  const breadcrumbSchema = buildBreadcrumbSchema({
    title: post.title,
    path: `/blog/${post.slug}`,
  });

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: new URL(post.heroImage, siteUrl).toString(),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      ...(logoUrl ? { logo: { "@type": "ImageObject", url: logoUrl } } : {}),
    },
    mainEntityOfPage: new URL(`/blog/${post.slug}`, siteUrl).toString(),
  };

  const relatedPosts = getBlogPosts().filter((entry) => post.relatedSlugs.includes(entry.slug));

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock3 className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-pop">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={post.supportPage.href}>
              {post.supportPage.label}
            </CTAButton>
            <CTAButton href="/inquiry" variant="outline">
              Request Production Evaluation
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
          <article className="space-y-8">
            <Card className="overflow-hidden">
              <div className="relative h-[280px] overflow-hidden sm:h-[360px] lg:h-[420px]">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
              <CardContent className="pt-6">
                <p className="text-lg leading-8 text-muted-foreground">{post.intro}</p>
              </CardContent>
            </Card>

            {post.sections.map((section) => (
              <Card key={section.heading}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                    {section.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.callout ? (
                    <div className="rounded-xl border border-border bg-muted/40 p-5 text-base leading-7 text-foreground/85">
                      {section.callout}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}

            <Card className="gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                  Key takeaways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base leading-8 text-muted-foreground">
                  {post.takeaways.map((takeaway) => (
                    <li key={takeaway}>• {takeaway}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  Supporting page
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {post.supportPage.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-muted-foreground">
                  Use this article to prepare, then move into the relevant service page
                  for capability, capacity, or compliance details.
                </p>
                <CTAButton href={post.supportPage.href} size="sm" className="w-full">
                  Open supporting page
                </CTAButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                  Related guides
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block rounded-xl border border-border bg-background p-4 transition-colors hover:bg-accent"
                  >
                    <p className="text-xs font-medium uppercase tracking-wide text-primary">
                      {relatedPost.category}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-foreground">
                      {relatedPost.title}
                    </p>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight text-primary-foreground">
                  Need a fast sourcing answer?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-primary-foreground/90">
                  Send your tech pack, order quantity, and target delivery window.
                  We will confirm feasibility within 24 hours.
                </p>
                <CTAButton href="/inquiry" variant="secondary" size="sm" className="w-full">
                  Request Evaluation
                </CTAButton>
                <p className="text-xs text-primary-foreground/80">{contactEmail}</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  );
}
