// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';



export class Product {
  uid?: string;
  nom?: string;
  prix?: number;
  salePrice?: number;
  discount?: number;
  images?: string;
  small?: Array<string>;
  shortDetails?: string;
  description?: string;
  stock?: number;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  category?: string;
  datePost?:Date;
  tags?: ProductTags[];
  colors?: ProductColor[];

  constructor(
    uid?: string,
    nom?: string,
    prix?: number,
    salePrice?: number,
    discount?: number,
    images?: string,
    small?: Array<string>,
    shortDetails?: string,
    description?: string,
    stock?: number,
    newPro?: boolean,
    brand?: string,
    sale?: boolean,
    category?: string,
    datePost?:Date,
    tags?: ProductTags[],
    colors?: ProductColor[]
  ) {
    this.uid = uid;
    this.nom = nom;
    this.prix = prix;
    this.salePrice = salePrice;
    this.discount = discount;
    this.images = images;
    this.shortDetails = shortDetails;
    this.description = description;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.sale = sale;
    this.category = category;
    this.datePost = datePost;
    this.tags = tags;
    this.colors = colors;
    this.small = small;
  }

 }
  // Color Filter
  export interface ColorFilter {
    color?: ProductColor;
  }
