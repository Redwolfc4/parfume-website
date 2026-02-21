import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, User, WishlistItem } from '@/types';

// ─── Cart Store ───
interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.product.id === product.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
          });
        } else {
          set({ items: [...items, { product, quantity }] });
        }
      },
      removeItem: (productId) =>
        set({ items: get().items.filter((i) => i.product.id !== productId) }),
      updateQuantity: (productId, quantity) =>
        set({
          items: get().items.map((i) =>
            i.product.id === productId ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        }),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    { name: 'aura-cart' }
  )
);

// ─── Auth Store ───
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string, _password: string) => {
        // Mock login
        set({
          user: { id: '1', name: 'User', email, phone: '', address: '' },
          isAuthenticated: true,
        });
        return true;
      },
      register: (name: string, email: string, _password: string) => {
        set({
          user: { id: Date.now().toString(), name, email, phone: '', address: '' },
          isAuthenticated: true,
        });
        return true;
      },
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (data) => {
        const user = get().user;
        if (user) set({ user: { ...user, ...data } });
      },
    }),
    { name: 'aura-auth' }
  )
);

// ─── Wishlist Store ───
interface WishlistState {
  items: WishlistItem[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (productId) =>
        set({
          items: [...get().items, { productId, addedAt: new Date().toISOString() }],
        }),
      removeFromWishlist: (productId) =>
        set({ items: get().items.filter((i) => i.productId !== productId) }),
      isInWishlist: (productId) =>
        get().items.some((i) => i.productId === productId),
    }),
    { name: 'aura-wishlist' }
  )
);

// ─── UI Store ───
interface UIState {
  isMobileMenuOpen: boolean;
  isCartDrawerOpen: boolean;
  toggleMobileMenu: () => void;
  toggleCartDrawer: () => void;
  closeMobileMenu: () => void;
  closeCartDrawer: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isMobileMenuOpen: false,
  isCartDrawerOpen: false,
  toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  toggleCartDrawer: () => set((s) => ({ isCartDrawerOpen: !s.isCartDrawerOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  closeCartDrawer: () => set({ isCartDrawerOpen: false }),
}));
