import { createClient } from 'contentful';
import type { ContentfulProduct, Product, ProductSkeleton } from '@/types';

const client = createClient({
  space: '5uek20g5xpta',
  accessToken: 'ZJAnUgWPrLrqdFCJB8tjsO1NAm4MtD_NEZ6v4369aVk',
  host: 'cdn.contentful.com',
});

// Helper to extract plain text from Contentful Rich Text Document
function documentToPlainText(doc: any): string {
  if (!doc || !doc.content) return '';
  return doc.content.reduce((text: string, node: any) => {
    if (node.nodeType === 'text') {
      return text + node.value;
    }
    if (node.content) {
      return text + documentToPlainText(node);
    }
    return text;
  }, '');
}

function mapProduct(item: ContentfulProduct): Product {
  const fields = item.fields;
  const imageUrl = fields.image; // Direct string URL now
  
  // Handle description: if it's a document (object), extract text. If string, use as is.
  let description = '';
  if (typeof fields.description === 'string') {
      description = fields.description;
  } else if (fields.description && fields.description.nodeType === 'document') {
      description = documentToPlainText(fields.description);
  }

  const galleryUrls =
    fields.gallery
      ?.map((g) => g.fields?.file?.url)
      .filter((url): url is string => !!url)
      .map((url) => `https:${url}`) || [];

  return {
    id: item.sys.id,
    name: fields.name || '',
    slug: fields.slug || fields.name?.toLowerCase().replace(/\s+/g, '-') || item.sys.id, // Fallback for slug
    price: fields.price || 0,
    description: description,
    shortDescription: fields.shortDescription || description.slice(0, 100) + '...',
    category: fields.category || 'Unisex',
    volume: fields.volume || '50ml',
    notes: fields.notes || '',
    image: imageUrl ? imageUrl : '/placeholder-perfume.jpg', 
    gallery: galleryUrls,
    featured: fields.featured === 'Yes', // Convert "Yes"/"No" string to boolean
    inStock: fields.inStock ?? true,
  };
}

export async function getProducts(): Promise<Product[]> {
  const entries = await client.getEntries<ProductSkeleton>({
    content_type: 'parfumes', // Updated content type ID
  });
  return (entries.items as unknown as ContentfulProduct[]).map(mapProduct);
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const entry = await client.getEntry(id);
    return mapProduct(entry as unknown as ContentfulProduct);
  } catch {
    return null;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const entries = await client.getEntries<ProductSkeleton>({
    content_type: 'parfumes',
    'fields.featured': 'Yes', // Updated filter value
  });
  return (entries.items as unknown as ContentfulProduct[]).map(mapProduct);
}
