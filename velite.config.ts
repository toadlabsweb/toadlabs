import { defineConfig, defineCollection, s } from "velite";
// import rehypeSlug from "rehype-slug";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const products = defineCollection({
  name: "Products",  
  pattern: "products/**/*.mdx", 
  schema: s
    .object({
      title: s.string().max(99), 
      subtitle: s.string().max(99),  
      slug: s.path(),
      published: s.boolean().default(true),
      weight: s.number(),
      image: s.string().optional(),
      description: s.excerpt().optional(),
      body: s.mdx(), 
    })
    .transform(computedFields),
});

const solutions = defineCollection({
  name: "Solutions",  
  pattern: "solutions/**/*.mdx", 
  schema: s
    .object({
      title: s.string().max(99), 
      subtitle: s.string().max(250),  
      slug: s.path(),
      published: s.boolean().default(true),
      weight: s.number(),
      image: s.string().optional(),
      youtubeID: s.string().optional(),
      description: s.excerpt().optional(),
      body: s.mdx(), 
    })
    .transform(computedFields),
});

const posts = defineCollection({
  name: "Post",  
  pattern: "posts/**/*.mdx", 
  schema: s
    .object({
      title: s.string().max(99),  
      slug: s.path(),
      published: s.boolean().default(true),
      date: s.isodate(),
      image: s.string().optional(),
      description: s.excerpt().optional(),
      body: s.mdx(), 
    })
    .transform(computedFields),
});

// const icon = s.enum([ '<Instagram/>', '<Facebook/>', '<Linkedin/>', '<Youtube/>', '<Mail/>', '<Phone/>', '<MapPin/>' ])

const options = defineCollection({
  name: 'Options',
  pattern: 'options/index.yml',
  single: true,
  schema: s.object({
    name: s.string().max(99),
    title: s.string().max(99),
    basepath: s.string().max(99),
    description: s.string().max(999).optional(),
    keywords: s.array(s.string()),
    author: s.object({ name: s.string(), email: s.string().email(), url: s.string().url() }),
    links: s.array(s.object({ name: s.string(), link: s.string() })),
    intro: s.object({ title: s.string(), video: s.string(), text: s.string() }),
    process: s.object({ title: s.string(), video: s.string(), steps: s.array(s.object({title: s.string(), text: s.string(),})) }),
    about: s.object({ title: s.string(),  text: s.array( s.string()) }),
    socials: s.array(s.object({ name: s.string(), icon: s.string().optional() , link: s.string().optional(), image: s.image().optional() })),
    contact: s.array(s.object({ text: s.array(s.string()), icon: s.string().optional() , link: s.string().optional() })),
    services: s.array(s.object({title: s.string(), subtitle: s.string(), image: s.string().optional(), href: s.string(), })),
    partners: s.array(s.object({title: s.string(), description: s.string(), link: s.string(), alt: s.string(), image: s.string()})),
  })
})

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { products, solutions, posts, options },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
