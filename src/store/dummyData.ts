/* ===== USER ===== */
export interface User {
  id: number;
  name: string;
  email: string;
  role_id: number;
  role_name: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "SuperAdmin",
    email: "superadmin@example.com",
    role_id: 1,
    role_name: "admin",
  },
  {
    id: 2,
    name: "Admin",
    email: "admin@example.com",
    role_id: 1,
    role_name: "admin",
  },
  {
    id: 3,
    name: "SuperOperator",
    email: "superoperator@example.com",
    role_id: 2,
    role_name: "operator",
  },
  {
    id: 4,
    name: "Operator",
    email: "operator@example.com",
    role_id: 2,
    role_name: "operator",
  },
  {
    id: 5,
    name: "Pimpinan",
    email: "pimpinan@example.com",
    role_id: 3,
    role_name: "pimpinan",
  },
];

/* ===== ROLE ===== */
export interface Role {
  id: number;
  name: string;
}

export const roles: Role[] = [
  {
    id: 1,
    name: "admin",
  },
  {
    id: 2,
    name: "operator",
  },
  {
    id: 3,
    name: "pimpinan",
  },
];

/* ===== URL ===== */
export interface Url {
  id: number;
  category: "Master" | "General" | "Navbar" | "All";
  name: string;
  url: string;
}
export const urls: Url[] = [
  {
    id: 1,
    category: "Navbar",
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    category: "Navbar",
    name: "Transaction",
    url: "/transaction",
  },
  {
    id: 3,
    category: "Navbar",
    name: "Order Detail",
    url: "/details",
  },
  {
    id: 4,
    category: "Master",
    name: "User Registration",
    url: "/user",
  },
  {
    id: 5,
    category: "Master",
    name: "Role Name",
    url: "/role",
  },
  {
    id: 6,
    category: "Master",
    name: "Url Named",
    url: "/url",
  },
  {
    id: 7,
    category: "Master",
    name: "Permission",
    url: "/permission",
  },
  {
    id: 8,
    category: "General",
    name: "Product Category",
    url: "/category",
  },
  {
    id: 9,
    category: "General",
    name: "Product Available",
    url: "/product",
  },
  {
    id: 10,
    category: "General",
    name: "Product Variant",
    url: "/variant",
  },
  {
    id: 11,
    category: "General",
    name: "Discount Setting",
    url: "/discount",
  },
  {
    id: 12,
    category: "General",
    name: "Discount Condition",
    url: "/condition",
  },
];

/* ===== PERMISSION ===== */
export interface Permission {
  id: number;
  role_id: number;
  role_name: string;
  urls: string[];
}
export const permissions: Permission[] = [
  {
    id: 1,
    role_id: 1,
    role_name: "admin",
    urls: [""],
  },
  {
    id: 2,
    role_id: 2,
    role_name: "operator",
    urls: [""],
  },
  {
    id: 3,
    role_id: 3,
    role_name: "pimpinan",
    urls: [""],
  },
];

export interface Product {
  id: number;
  name: string;

  category_id: number;
  category_name?: string;

  variant_id: number;
  variant_name?: string;

  price: string;
  adjust_price?: number;

  disc?: number;
  tax?: number;

  subtotal?: number;
  total?: number;

  qty_cart?: number;

  description: string;
}

export const products: Product[] = [
  // MIE
  {
    id: 1,
    name: "Mie Gacoan",
    category_id: 1,
    category_name: "Mie",
    variant_id: 1,
    variant_name: "Original",
    price: "12000",
    description: "Mie asin pedas khas Gacoan",
  },
  {
    id: 2,
    name: "Mie Hompimpa",
    category_id: 1,
    category_name: "Mie",
    variant_id: 1,
    variant_name: "Original",
    price: "12000",
    description: "Mie manis pedas",
  },
  {
    id: 3,
    name: "Mie Suit",
    category_id: 1,
    category_name: "Mie",
    variant_id: 1,
    variant_name: "Original",
    price: "11000",
    description: "Mie asin tanpa cabai",
  },

  // DIMSUM
  {
    id: 4,
    name: "Udang Keju",
    category_id: 2,
    category_name: "Dimsum",
    variant_id: 1,
    variant_name: "Original",
    price: "11000",
    description: "Udang goreng isi keju",
  },
  {
    id: 5,
    name: "Udang Rambutan",
    category_id: 2,
    category_name: "Dimsum",
    variant_id: 1,
    variant_name: "Original",
    price: "11000",
    description: "Udang goreng crispy",
  },
  {
    id: 6,
    name: "Lumpia Udang",
    category_id: 2,
    category_name: "Dimsum",
    variant_id: 1,
    variant_name: "Original",
    price: "11000",
    description: "Lumpia isi udang",
  },
  {
    id: 7,
    name: "Siomay",
    category_id: 2,
    category_name: "Dimsum",
    variant_id: 1,
    variant_name: "Original",
    price: "11000",
    description: "Siomay ayam",
  },
  {
    id: 8,
    name: "Pangsit Goreng",
    category_id: 2,
    category_name: "Dimsum",
    variant_id: 1,
    variant_name: "Original",
    price: "11000",
    description: "Pangsit goreng crispy",
  },
  {
    id: 9,
    name: "Ceker",
    category_id: 2,
    category_name: "Dimsum",
    variant_id: 1,
    variant_name: "Pedas",
    price: "11000",
    description: "Ceker ayam pedas",
  },

  // MINUMAN
  {
    id: 10,
    name: "Es Genderuwo",
    category_id: 3,
    category_name: "Minuman",
    variant_id: 1,
    variant_name: "Dingin",
    price: "9000",
    description: "Minuman susu coklat",
  },
  {
    id: 11,
    name: "Es Pocong",
    category_id: 3,
    category_name: "Minuman",
    variant_id: 1,
    variant_name: "Dingin",
    price: "9000",
    description: "Minuman susu vanilla",
  },
  {
    id: 12,
    name: "Es Tuyul",
    category_id: 3,
    category_name: "Minuman",
    variant_id: 1,
    variant_name: "Dingin",
    price: "9000",
    description: "Minuman green tea",
  },
  {
    id: 13,
    name: "Lemon Tea",
    category_id: 3,
    category_name: "Minuman",
    variant_id: 1,
    variant_name: "Dingin",
    price: "8000",
    description: "Teh lemon segar",
  },
  {
    id: 14,
    name: "Teh Manis",
    category_id: 3,
    category_name: "Minuman",
    variant_id: 1,
    variant_name: "Dingin",
    price: "6000",
    description: "Teh manis dingin",
  },
  {
    id: 15,
    name: "Air Mineral",
    category_id: 3,
    category_name: "Minuman",
    variant_id: 1,
    variant_name: "Botol",
    price: "5000",
    description: "Air mineral botol",
  },
];

export interface Category {
  id: number;
  name: string;
  description: string;
}
export const categories: Category[] = [
  {
    id: 1,
    name: "Mie",
    description: "",
  },
  {
    id: 2,
    name: "Dimsum",
    description: "",
  },
  {
    id: 3,
    name: "Minuman",
    description: "",
  },
];

export interface Variant {
  id: number;
  name: string;
  product_id: number;
  product_name: Product["name"];
  adjust_price: number;
}

export const variants: Variant[] = [
  // Mie Gacoan
  {
    id: 1,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 0",
    adjust_price: 0,
  },
  {
    id: 2,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 1",
    adjust_price: 0,
  },
  {
    id: 3,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 2",
    adjust_price: 0,
  },
  {
    id: 4,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 3",
    adjust_price: 0,
  },
  {
    id: 5,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 4",
    adjust_price: 0,
  },
  {
    id: 6,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 5",
    adjust_price: 2000,
  },
  {
    id: 7,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 6",
    adjust_price: 2000,
  },
  {
    id: 8,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 7",
    adjust_price: 2000,
  },
  {
    id: 9,
    product_id: 1,
    product_name: "Mie Gacoan",
    name: "Level 8",
    adjust_price: 2000,
  },

  // Mie Hompimpa
  {
    id: 10,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 0",
    adjust_price: 0,
  },
  {
    id: 11,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 1",
    adjust_price: 0,
  },
  {
    id: 12,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 2",
    adjust_price: 0,
  },
  {
    id: 13,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 3",
    adjust_price: 0,
  },
  {
    id: 14,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 4",
    adjust_price: 0,
  },
  {
    id: 15,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 5",
    adjust_price: 2000,
  },
  {
    id: 16,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 6",
    adjust_price: 2000,
  },
  {
    id: 17,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 7",
    adjust_price: 2000,
  },
  {
    id: 18,
    product_id: 2,
    product_name: "Mie Hompimpa",
    name: "Level 8",
    adjust_price: 2000,
  },

  // Mie Suit
  {
    id: 19,
    product_id: 3,
    product_name: "Mie Suit",
    name: "Level 0",
    adjust_price: 0,
  },
];

export interface Discount {
  id: number;
  name: string;
  type: "PERCENT" | "FIXED";
  percentage: string;
  amount: string;

  is_stackable: string;
  priority: string;
  max_discount: string;

  apply_to: "ORDER" | "PRODUCT";

  is_active: string;

  start_at: string;
  end_date: string;
}

export const discounts: Discount[] = [
  // ======================
  // ORDER - PERCENT
  // ======================
  {
    id: 1,
    name: "Promo Opening 10%",
    type: "PERCENT",
    percentage: "10",
    amount: "0",
    is_stackable: "true",
    priority: "1",
    max_discount: "0",
    apply_to: "ORDER",
    is_active: "true",
    start_at: "2026-01-01",
    end_date: "2026-01-31",
  },
  {
    id: 2,
    name: "Member Discount 5%",
    type: "PERCENT",
    percentage: "5",
    amount: "0",
    is_stackable: "false",
    priority: "2",
    max_discount: "0",
    apply_to: "ORDER",
    is_active: "true",
    start_at: "2026-01-01",
    end_date: "2026-12-31",
  },
  {
    id: 3,
    name: "Weekend Sale 15%",
    type: "PERCENT",
    percentage: "15",
    amount: "0",
    is_stackable: "true",
    priority: "3",
    max_discount: "30000",
    apply_to: "ORDER",
    is_active: "true",
    start_at: "2026-01-01",
    end_date: "2026-12-31",
  },

  // ======================
  // ORDER - FIXED
  // ======================
  {
    id: 4,
    name: "Potongan 20RB",
    type: "FIXED",
    percentage: "0",
    amount: "20000",
    is_stackable: "false",
    priority: "1",
    max_discount: "20000",
    apply_to: "ORDER",
    is_active: "true",
    start_at: "2026-01-01",
    end_date: "2026-02-01",
  },

  // ======================
  // PRODUCT - FIXED
  // ======================
  {
    id: 5,
    name: "Diskon Dimsum 5RB",
    type: "FIXED",
    percentage: "0",
    amount: "5000",
    is_stackable: "true",
    priority: "1",
    max_discount: "5000",
    apply_to: "PRODUCT",
    is_active: "true",
    start_at: "2026-01-01",
    end_date: "2026-03-01",
  },

  // ======================
  // PRODUCT - PERCENT
  // ======================
  {
    id: 6,
    name: "Mie Gacoan 20%",
    type: "PERCENT",
    percentage: "20",
    amount: "0",
    is_stackable: "false",
    priority: "1",
    max_discount: "0",
    apply_to: "PRODUCT",
    is_active: "true",
    start_at: "2026-01-01",
    end_date: "2026-01-31",
  },
  {
    id: 7,
    name: "Minuman Hemat 10%",
    type: "PERCENT",
    percentage: "10",
    amount: "0",
    is_stackable: "true",
    priority: "2",
    max_discount: "10000",
    apply_to: "PRODUCT",
    is_active: "true",
    start_at: "2026-01-01",
    end_date: "2026-12-31",
  },
];

export interface DiscountCondition {
  id: number;

  discount_id: number;
  discount_name: string;

  product_id: number;
  product_name: string;

  min_quantity: string;
}

export const discountConditions: DiscountCondition[] = [
  {
    id: 1,
    discount_id: 5,
    discount_name: "Diskon Dimsum 5RB",
    product_id: 4,
    product_name: "Udang Keju",
    min_quantity: "2",
  },
  {
    id: 2,
    discount_id: 5,
    discount_name: "Diskon Dimsum 5RB",
    product_id: 7,
    product_name: "Siomay",
    min_quantity: "3",
  },
  {
    id: 2,
    discount_id: 6,
    discount_name: "Mie Gacoan 20%",
    product_id: 1,
    product_name: "Mie Gacoan",
    min_quantity: "1",
  },
  {
    id: 3,
    discount_id: 7,
    discount_name: "Minuman Hemat 10%",
    product_id: 10,
    product_name: "Es Genderuwo",
    min_quantity: "2",
  },
  {
    id: 4,
    discount_id: 7,
    discount_name: "Minuman Hemat 10%",
    product_id: 13,
    product_name: "Lemon Tea",
    min_quantity: "2",
  },
];
