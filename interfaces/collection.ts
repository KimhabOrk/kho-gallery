export interface Look {
  id: string
  image: string
}

export interface Brand {
  id: number
  name: string
  logo: string
  bio: string
}

export interface Collection {
  id: number
  brand: string
  name: string
  season: string
  type: string
  videoUrl?: string
  coverImage: string
  looks: Look[]
}

export interface BrandData {
  brands: Brand[]
}

export interface CollectionData {
  collections: Collection[]
}
