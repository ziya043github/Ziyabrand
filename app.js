const state = { cart: [] }
const IMG = (id) => `https://images.unsplash.com/photo-${id}?w=600&h=720&fit=crop&q=85`

// 28 məhsul — saytla eyni məlumatlar
const products = [
  { id: 'm1', title: 'Klassik Kişi Gödəkçəsi', price: 89, oldPrice: 120, discount: 26, category: 'men', brand: 'Ziya Essentials', rating: 4.8, sold: 12453, desc: 'Yüksək keyfiyyətli parça, klassik dizayn. Gündəlik və iş üçün ideal. 100% pamuk, ölçü: S, M, L, XL.', main: IMG('1594938298603-c8148c4dae35'), alt: IMG('1620799140408-edc6dcb6d633') },
  { id: 'm2', title: 'Premium Kişi Palto', price: 159, oldPrice: 210, discount: 24, category: 'men', brand: 'Ziya Premium', rating: 4.9, sold: 5678, desc: 'İtalyan parçadan yüngül palto. İlk bahar üçün ideal. Sulu və küləyə davamlı.', main: IMG('1591047139829-d91aecb6caea'), alt: IMG('1544022613-e87ca75a784a') },
  { id: 'm3', title: 'Oversize Kişi Sviter', price: 79, oldPrice: 95, discount: 17, category: 'men', brand: 'Ziya Street', rating: 4.7, sold: 18934, desc: 'Rahat oversize kəsik, yumşaq triko parça. Uniseks, rahat geyim.', main: IMG('1620799140188-3b2a02fd9a77'), alt: IMG('1576566588028-4147f3842f27') },
  { id: 'm4', title: 'Smart Casual Şalvar', price: 69, oldPrice: 89, discount: 22, category: 'men', brand: 'Ziya Basics', rating: 4.6, sold: 15234, desc: 'Chino üslubunda smart-casual şalvar. Çox rəng seçimi. Hər gün üçün.', main: IMG('1624378439583-faa8d0e768af'), alt: IMG('1594938298603-c8148c4dae35') },
  { id: 'm5', title: 'Dəri Kişi Kurtka', price: 249, oldPrice: 320, discount: 22, category: 'men', brand: 'Ziya Premium', rating: 4.9, sold: 3456, desc: 'Əsl dəri, klassik dizayn. Qış üçün isti və davamlı. Premium keyfiyyət.', main: IMG('1551106652-a8bdf0fc8ca6'), alt: IMG('1544022613-e87ca75a784a') },
  { id: 'm6', title: 'Polo Köynək', price: 54, oldPrice: 70, discount: 23, category: 'men', brand: 'Ziya Sport', rating: 4.7, sold: 22145, desc: 'Nəfəs alan pamuk parça. İdman və gündəlik üçün. Rahat kəsik.', main: IMG('1576566588028-4147f3842f27'), alt: IMG('1620799140188-3b2a02fd9a77') },
  { id: 'm7', title: 'Kişi Jeans', price: 84, oldPrice: 110, discount: 24, category: 'men', brand: 'Ziya Denim', rating: 4.8, sold: 28567, desc: 'Slim fit jeans, elastik denim. Uzunömürlü və moda üslubunda.', main: IMG('1624378439583-faa8d0e768af'), alt: IMG('1594938298603-c8148c4dae35') },
  { id: 'm8', title: 'Kişi Blazer', price: 139, oldPrice: 180, discount: 23, category: 'men', brand: 'Ziya Formal', rating: 4.9, sold: 6789, desc: 'Klassik blazer, iş və xüsusi gecələr üçün. Yüksək keyfiyyətli parça.', main: IMG('1594938298603-c8148c4dae35'), alt: IMG('1620799140408-edc6dcb6d633') },
  { id: 'w1', title: 'Zərif Parlaq Ətək', price: 119, oldPrice: 150, discount: 21, category: 'women', brand: 'Ziya Woman', rating: 4.9, sold: 9876, desc: 'Parlaq parça, əsas kolleksiya. Xüsusi gecələr üçün. Zərif və şık dizayn.', main: IMG('1595777457583-95e059d581b8'), alt: IMG('1566174053879-31528523f8ae') },
  { id: 'w2', title: 'Kətan Qadın Bluzka', price: 64, oldPrice: 85, discount: 25, category: 'women', brand: 'Ziya Nature', rating: 4.8, sold: 21345, desc: 'Təbii kətan parça, yaz-yay üçün. Nəfəs alan material, rahat.', main: IMG('1564257631407-4deb1f99d992'), alt: IMG('1558618666-fcd25c85cd64') },
  { id: 'w3', title: 'Lüks Qadın Palto', price: 199, oldPrice: 260, discount: 23, category: 'women', brand: 'Ziya Premium', rating: 5, sold: 4567, desc: 'İtalyan parçadan lüks palto. Çox illik istifadə. Premium keyfiyyət.', main: IMG('1544022613-e87ca75a784a'), alt: IMG('1594938298603-c8148c4dae35') },
  { id: 'w4', title: 'Rəngli Qadın Köynək', price: 54, oldPrice: 72, discount: 25, category: 'women', brand: 'Ziya Essentials', rating: 4.7, sold: 29876, desc: 'Yüngül parça, rəngli naxışlar. Gündəlik kombinasiya üçün.', main: IMG('1576566588028-4147f3842f27'), alt: IMG('1564257631407-4deb1f99d992') },
  { id: 'w5', title: 'Qadın Abaya Libas', price: 139, oldPrice: 180, discount: 23, category: 'women', brand: 'Ziya Evening', rating: 4.9, sold: 5432, desc: 'Ənənəvi abaya, müasir dizayn. Yüksək keyfiyyətli parça.', main: IMG('1595777457583-95e059d581b8'), alt: IMG('1566174053879-31528523f8ae') },
  { id: 'w6', title: 'Qadın Triko Sviter', price: 74, oldPrice: 95, discount: 22, category: 'women', brand: 'Ziya Comfort', rating: 4.8, sold: 18234, desc: 'Yumşaq triko, rahat kəsik. Qış üçün ideal. Çox rəng.', main: IMG('1564257631407-4deb1f99d992'), alt: IMG('1576566588028-4147f3842f27') },
  { id: 'w7', title: 'Qadın Jeans', price: 79, oldPrice: 105, discount: 25, category: 'women', brand: 'Ziya Denim', rating: 4.7, sold: 31234, desc: 'High waist jeans, elastik denim. Gündəlik və moda üslubu.', main: IMG('1566174053879-31528523f8ae'), alt: IMG('1595777457583-95e059d581b8') },
  { id: 'w8', title: 'Qadın Blazer', price: 129, oldPrice: 170, discount: 24, category: 'women', brand: 'Ziya Formal', rating: 4.9, sold: 9876, desc: 'Elegant blazer, iş və xüsusi günlər üçün. Premium parça.', main: IMG('1544022613-e87ca75a784a'), alt: IMG('1564257631407-4deb1f99d992') },
  { id: 'k1', title: 'Uşaq Sviter', price: 39, oldPrice: 52, discount: 25, category: 'kids', brand: 'Ziya Kids', rating: 4.9, sold: 14567, desc: 'Uşaq dərisi üçün yumşaq triko. Hipoallergenik material. 2-10 yaş.', main: IMG('1519457431-44ccd64a579b'), alt: IMG('1503919545889-aef636e10ad4') },
  { id: 'k2', title: 'Uşaq Köynək', price: 34, oldPrice: 45, discount: 24, category: 'kids', brand: 'Ziya Kids', rating: 4.8, sold: 19876, desc: 'Rahat və davamlı. Tez quruyan parça. Gündəlik üçün ideal.', main: IMG('1503919545889-aef636e10ad4'), alt: IMG('1519457431-44ccd64a579b') },
  { id: 'k3', title: 'Uşaq Palto', price: 79, oldPrice: 105, discount: 25, category: 'kids', brand: 'Ziya Kids', rating: 4.9, sold: 6789, desc: 'Qış üçün isti və su keçirməyən. 2–8 yaş üçün.', main: IMG('1519238263530-99bdd11df2ea'), alt: IMG('1522771930-78848d9293e8') },
  { id: 'k4', title: 'Uşaq Jeans', price: 44, oldPrice: 58, discount: 24, category: 'kids', brand: 'Ziya Kids', rating: 4.7, sold: 22345, desc: 'Davamlı uşaq jeans. Rahat və yuyulmada davamlı.', main: IMG('1503919545889-aef636e10ad4'), alt: IMG('1519457431-44ccd64a579b') },
  { id: 'k5', title: 'Uşaq Dəsti', price: 64, oldPrice: 85, discount: 25, category: 'kids', brand: 'Ziya Kids', rating: 4.8, sold: 11234, desc: 'Bluzka və şort dəsti. Yüngül və rahat. Yaz-yay üçün.', main: IMG('1519238263530-99bdd11df2ea'), alt: IMG('1519457431-44ccd64a579b') },
  { id: 'k6', title: 'Uşaq Kurtka', price: 89, oldPrice: 115, discount: 23, category: 'kids', brand: 'Ziya Kids', rating: 4.9, sold: 8765, desc: 'Qış kurtka, isti və su keçirməyən. 3-12 yaş.', main: IMG('1522771930-78848d9293e8'), alt: IMG('1519238263530-99bdd11df2ea') },
  { id: 'a1', title: 'Dəri Qolbaq', price: 59, oldPrice: 78, discount: 24, category: 'accessories', brand: 'Ziya Accessories', rating: 4.7, sold: 12456, desc: 'Əsl dəri, minimalist dizayn. Kişi və qadın üçün.', main: IMG('1523275335684-37898b6baf30'), alt: IMG('1584917865442-de89df76afd3') },
  { id: 'a2', title: 'Günəş Gözlüyü', price: 129, oldPrice: 165, discount: 22, category: 'accessories', brand: 'Ziya Premium', rating: 4.8, sold: 4567, desc: 'UV qoruma, hafif çərçivə. Klassik və müasir dizayn.', main: IMG('1572635196237-14b3f281503f'), alt: IMG('1511499767150-a48a237f0083') },
  { id: 'a3', title: 'Dəri Çanta', price: 149, oldPrice: 195, discount: 24, category: 'accessories', brand: 'Ziya Premium', rating: 4.9, sold: 5678, desc: 'Əsl dəri, laptop bölməli. İş və gündəlik üçün.', main: IMG('1584917865442-de89df76afd3'), alt: IMG('1548036328-c9fa89d128fa') },
  { id: 'a4', title: 'Kaşmir Şal', price: 44, oldPrice: 60, discount: 27, category: 'accessories', brand: 'Ziya Basics', rating: 4.8, sold: 23456, desc: 'Yun və kaşmir qarışığı. Qış aksesuarı. Yumşaq və isti.', main: IMG('1520903920243-00d872a2d1c9'), alt: IMG('1576871337632-b9aef4c17ab9') },
  { id: 'a5', title: 'Dəri Kəmər', price: 39, oldPrice: 52, discount: 25, category: 'accessories', brand: 'Ziya Accessories', rating: 4.7, sold: 19876, desc: 'Əsl dəri kəmər. Uniseks. Gündəlik və iş üçün.', main: IMG('1551106652-a8bdf0fc8ca6'), alt: IMG('1523275335684-37898b6baf30') },
  { id: 'a6', title: 'Qadın Əl Çantası', price: 94, oldPrice: 125, discount: 25, category: 'accessories', brand: 'Ziya Woman', rating: 4.8, sold: 14567, desc: 'Zərif əl çantası, əsl dəri. Gündəlik kombinasiya üçün.', main: IMG('1584917865442-de89df76afd3'), alt: IMG('1548036328-c9fa89d128fa') }
]

function renderProducts() {
  const grid = document.getElementById('product-grid')
  if (!grid) return
  grid.innerHTML = products.map((p, idx) => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media">
        <span class="product-badge">-${p.discount}%</span>
        <img class="main" src="${p.main}" alt="${p.title}" loading="lazy">
        <img class="alt" src="${p.alt}" alt="${p.title}">
        <div class="product-quick-add">
          <button class="btn primary" data-id="${p.id}">Səbətə at</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <span class="product-rating">${p.rating}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-prices">
          <span class="product-price">${p.price.toFixed(2)} ₼</span>
          <span class="product-old-price">${p.oldPrice.toFixed(2)} ₼</span>
        </div>
        <span class="product-sold">${p.sold.toLocaleString('az-AZ')}+ alınıb</span>
      </div>
    </article>
  `).join('')

  grid.querySelectorAll('.product-quick-add .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      addToCart(btn.dataset.id)
    })
  })

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.product-quick-add')) return
      openProductModal(card.dataset.id)
    })
  })
}

function openProductModal(productId) {
  const p = products.find(x => x.id === productId)
  if (!p) return
  const body = document.getElementById('product-modal-body')
  if (!body) return
  const sold = (p.sold || 0).toLocaleString('az-AZ')
  body.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-media">
        <img src="${p.main}" alt="${p.title}">
      </div>
      <div class="product-modal-info">
        <span class="product-modal-brand">${p.brand}</span>
        <h2 class="product-modal-title">${p.title}</h2>
        <div class="product-modal-meta">
          <span class="product-modal-rating">★ ${p.rating}</span>
          <span class="product-modal-sold">${sold}+ alınıb</span>
        </div>
        <div class="product-modal-prices">
          <span class="product-modal-price">${p.price.toFixed(2)} ₼</span>
          <span class="product-modal-old">${p.oldPrice.toFixed(2)} ₼</span>
          <span class="product-modal-badge">-${p.discount}%</span>
        </div>
        <p class="product-modal-desc">${p.desc || 'Yüksək keyfiyyətli məhsul. Detallı məlumat üçün bizimlə əlaqə saxlayın.'}</p>
        <label>Ölçü:</label>
        <select class="product-modal-size">
          <option>Ölçü seçin</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button class="btn primary product-modal-add" data-id="${p.id}">Səbətə əlavə et</button>
      </div>
    </div>
  `
  body.querySelector('.product-modal-add')?.addEventListener('click', (e) => {
    e.stopPropagation()
    addToCart(p.id)
    bumpCart()
  })
  document.getElementById('product-modal')?.classList.add('open')
  document.body.style.overflow = 'hidden'
}

function closeProductModal() {
  document.getElementById('product-modal')?.classList.remove('open')
  document.body.style.overflow = ''
}

function addToCart(productId) {
  const p = products.find(x => x.id === productId)
  if (!p) return
  const existing = state.cart.find(x => x.id === productId)
  if (existing) existing.qty += 1
  else state.cart.push({ ...p, qty: 1 })
  updateCartUI()
  bumpCart()
}

function updateCartItemQty(productId, delta) {
  const item = state.cart.find(x => x.id === productId)
  if (!item) return
  item.qty += delta
  if (item.qty <= 0) {
    state.cart = state.cart.filter(x => x.id !== productId)
  }
  updateCartUI()
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(x => x.id !== productId)
  updateCartUI()
}

function updateCartUI() {
  const total = state.cart.reduce((a, i) => a + (i.qty || 1), 0)
  const sum = state.cart.reduce((a, i) => a + (i.price * (i.qty || 1)), 0)
  const c1 = document.getElementById('cart-count')
  const c2 = document.getElementById('floating-cart-count')
  if (c1) c1.textContent = String(total)
  if (c2) c2.textContent = String(total)
  const totalEl = document.querySelector('.cart-total strong')
  if (totalEl) totalEl.textContent = `${sum.toFixed(2)} ₼`
  const body = document.getElementById('cart-items')
  if (!body) return
  if (state.cart.length === 0) {
    body.innerHTML = '<p style="color:var(--muted);padding:1rem">Səbət boşdur</p>'
    return
  }
  body.innerHTML = state.cart.map(i => `
    <div class="cart-item" data-id="${i.id}">
      <img class="cart-item-img" src="${i.main}" alt="${i.title}">
      <div class="cart-item-info">
        <h4>${i.title}</h4>
        <div class="cart-item-price">${(i.price * (i.qty || 1)).toFixed(2)} ₼</div>
        <div class="cart-item-actions">
          <div class="cart-item-qty">
            <button type="button" class="qty-minus" data-id="${i.id}" aria-label="Azalt">−</button>
            <span>${i.qty || 1}</span>
            <button type="button" class="qty-plus" data-id="${i.id}" aria-label="Artır">+</button>
          </div>
          <button type="button" class="cart-item-remove" data-id="${i.id}">Sil</button>
        </div>
      </div>
    </div>
  `).join('')

  body.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => updateCartItemQty(btn.dataset.id, -1))
  })
  body.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => updateCartItemQty(btn.dataset.id, 1))
  })
  body.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id))
  })
}

function bumpCart() {
  const btn = document.getElementById('floating-cart')
  if (btn) btn.animate([
    { transform: 'translateY(0) scale(1)' },
    { transform: 'translateY(-4px) scale(1.06)' },
    { transform: 'translateY(0) scale(1)' }
  ], { duration: 400, easing: 'ease-out' })
}

function toggleCart() {
  document.getElementById('cart-drawer')?.classList.toggle('open')
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts()
  updateCartUI()
  document.getElementById('product-count').textContent = products.length + ' məhsul'
})

document.getElementById('floating-cart')?.addEventListener('click', toggleCart)
document.getElementById('header-cart-btn')?.addEventListener('click', toggleCart)
document.getElementById('cart-close')?.addEventListener('click', toggleCart)
document.getElementById('cart-backdrop')?.addEventListener('click', toggleCart)
document.getElementById('product-modal-close')?.addEventListener('click', closeProductModal)
document.getElementById('product-modal-backdrop')?.addEventListener('click', closeProductModal)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('product-modal')?.classList.contains('open')) closeProductModal()
    else if (document.getElementById('cart-drawer')?.classList.contains('open')) toggleCart()
  }
})

window.addEventListener('scroll', () => {
  document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 20)
}, { passive: true })
