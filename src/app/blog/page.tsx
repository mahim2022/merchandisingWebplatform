import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import StatCard from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";
import { BookOpen, Sparkles, Target, ArrowRight } from "lucide-react";
import { StatCardData } from "@/types";

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
  const supportingPosts = blogPosts.slice(1);

  const blogStats: StatCardData[] = [
    {
      label: "Guides Live",
      value: `${blogPosts.length}`,
      description: "Buyer-intent articles ready to index",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      label: "Focus Topics",
      value: "4",
      description: "MOQ, capacity, compliance, product mix",
      icon: <Target className="h-6 w-6" />,
    },
    {
      label: "Content Goal",
      value: "Support",
      description: "Each post points into a money page",
      icon: <Sparkles className="h-6 w-6" />,
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Blog / Knowledge Hub
          </Badge>
          <h1 className="mb-6 text-pop">
            Practical apparel sourcing insights for buyers and sourcing teams
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-muted-foreground">
            Each guide is written to answer a real buyer question, then point the
            reader toward the right manufacturing page, capacity information, or
            inquiry path.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href="/inquiry" size="lg">
              Request Production Evaluation
            </CTAButton>
            <CTAButton href="/capabilities" variant="outline" size="lg">
              Explore Manufacturing Capabilities
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section-container pattern-dots">
        <div className="section-header">
          <h2 className="text-pop">How this blog is structured</h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Short, actionable articles that support the pages buyers already need.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogStats.map((metric, index) => (
            <StatCard key={index} data={metric} />
          ))}
        </div>
      </section>

      <section className="section-container gradient-subtle">
        <div className="section-header">
          <h2 className="text-pop">Featured guide</h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Start with the article that helps buyers understand launch risk and order size.
          </p>
        </div>

        <Card className="overflow-hidden border-border shadow-lg">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.heroAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>
            <CardContent className="flex flex-col justify-center p-8 lg:p-10">
              <Badge className="mb-4 w-fit">{featuredPost.category}</Badge>
              <h3 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground">
                {featuredPost.title}
              </h3>
              <p className="mb-6 text-lg leading-8 text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <div className="mb-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>{featuredPost.readTime}</span>
                <span>•</span>
                <span>Supports {featuredPost.supportPage.label.toLowerCase()}</span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href={`/blog/${featuredPost.slug}`}>
                  Read the guide
                </CTAButton>
                <CTAButton href={featuredPost.supportPage.href} variant="outline">
                  {featuredPost.supportPage.label}
                </CTAButton>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      <section className="section-container">
        <div className="section-header">
          <h2 className="text-pop">All articles</h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Browse the full set of launch-ready guides.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {supportingPosts.map((post) => (
            <Card key={post.slug} className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-0">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="mb-5 text-sm leading-7 text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mb-6 text-sm font-medium text-foreground/85">
                  Supports: {post.supportPage.label}
                </p>
                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <CTAButton href={`/blog/${post.slug}`} size="sm">
                    Read guide
                  </CTAButton>
                  <Link
                    href={post.supportPage.href}
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Supporting page <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-container gradient-accent">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm lg:p-12">
          <Badge variant="secondary" className="mb-4">
            Next step
          </Badge>
          <h2 className="mb-4 text-pop">Need a sourcing answer faster?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-muted-foreground">
            Use the blog for research, then move into the inquiry flow when you
            are ready to check capabilities, capacity, and lead time.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
