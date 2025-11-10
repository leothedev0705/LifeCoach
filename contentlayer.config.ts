import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'

export const Program = defineDocumentType(() => ({
  name: 'Program',
  filePathPattern: `programs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the program',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'Short description of the program',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'Cover image URL',
      required: true,
    },
    duration: {
      type: 'string',
      description: 'Program duration',
      required: true,
    },
    price: {
      type: 'string',
      description: 'Program price',
      required: true,
    },
    category: {
      type: 'enum',
      options: ['personal', 'group', 'corporate'],
      description: 'Program category',
      required: true,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the program is featured',
      default: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Program tags',
      default: [],
    },
    order: {
      type: 'number',
      description: 'Display order',
      default: 0,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').pop(),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/programs/${doc._raw.flattenedPath.split('/').pop()}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'Short description of the post',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'Cover image URL',
      required: true,
    },
    publishDate: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    author: {
      type: 'string',
      description: 'Post author',
      default: 'Anita D\'Souza',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Post tags',
      default: [],
    },
    featured: {
      type: 'boolean',
      description: 'Whether the post is featured',
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').pop(),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.split('/').pop()}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Program, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-light',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
    ],
  },
}) 