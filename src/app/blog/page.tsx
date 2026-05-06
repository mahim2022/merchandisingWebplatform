import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Practical apparel sourcing guides on MOQ, capacity, compliance, and product planning. Built to help buyers move faster from research to inquiry.",
  path: "/blog",
  keywords: [
    "apparel sourcing blog",
    "garment manufacturing guides",
    "MOQ compliance capacity articles",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Blog",
  path: "/blog",
});

export default function BlogPage() {
  const blogPosts = getBlogPosts();
  const featuredPost = blogPosts[0];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Blog / Guides
            </Badge>
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-foreground lg:text-6xl">
              Practical apparel sourcing guides for buyers
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:text-xl">
              Short, useful articles about MOQ, capacity, compliance, and product
              planning. Each post supports a core service page so readers can move
              from research to action.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:px-8 lg:py-14">
        <div className="space-y-10">
          <Card className="overflow-hidden border-border">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.heroAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
                priority
              />
            </div>
            <CardContent className="p-6 lg:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="secondary">Featured</Badge>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground lg:text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={`/blog/${featuredPost.slug}`} size="sm">
                  Read article
                </CTAButton>
                <CTAButton href={featuredPost.supportPage.href} variant="outline" size="sm">
                  Open supporting page
                </CTAButton>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.slug} className="overflow-hidden border-border transition-shadow hover:shadow-md">
                <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
                  <div className="relative min-h-[180px] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.heroAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span>{post.readTime}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="normal-case tracking-normal">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mb-5 text-sm leading-7 text-muted-foreground lg:text-base">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Read article <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      <Link
                        href={post.supportPage.href}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        Supporting page: {post.supportPage.label}
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <aside className="space-y-6 self-start lg:sticky lg:top-24">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                About this blog
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                This is a buyer-focused guide section, not a news feed. The articles
                are meant to answer common sourcing questions and connect into the
                main manufacturing pages.
              </p>
              <p>
                If you are still comparing options, start with the guides. If you are
                ready to confirm production details, move to the inquiry page.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                Core topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>MOQ and launch planning</p>
              <p>Capacity and lead times</p>
              <p>Compliance and quality control</p>
              <p>Knit, woven, and denim selection</p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="space-y-4 p-6">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Need a quick answer?
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Send your product details, order quantity, and delivery window. We
                will confirm feasibility within 24 hours.
              </p>
              <CTAButton href="/inquiry" size="sm" className="w-full">
                Request Production Evaluation
              </CTAButton>
            </CardContent>
          </Card>
        </aside>
      </section>
    </div>
  );
}
