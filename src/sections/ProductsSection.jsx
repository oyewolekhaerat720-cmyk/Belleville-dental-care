import { useMemo, useState } from "react"
import { FaCheckCircle, FaShoppingCart, FaTooth, FaStar, FaTimes } from "react-icons/fa"

function ProductsSection({ products = [], activeProduct, setActiveProduct }) {
  const [productRatings, setProductRatings] = useState({})
  const [submittedRatings, setSubmittedRatings] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [addedMessage, setAddedMessage] = useState("")

  const handleRatingSelect = (productId, rating) => {
    setProductRatings((prev) => ({
      ...prev,
      [productId]: rating,
    }))
  }

  const handleSubmitRating = (productId) => {
    if (!productRatings[productId]) return

    setSubmittedRatings((prev) => ({
      ...prev,
      [productId]: productRatings[productId],
    }))
  }

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })

    setAddedMessage(`${product.title} added to cart.`)

    setTimeout(() => {
      setAddedMessage("")
    }, 2500)
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }, [cartItems])

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const numericPrice = Number(String(item.price).replace(/[^\d.]/g, ""))
      return sum + numericPrice * item.quantity
    }, 0)
  }, [cartItems])

  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
              Oral Care
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Belleville Products</h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Explore oral care products including toothpaste, whitening kits, orthodontic care
              products, kids dental products and electrical accessories recommended by our dentists.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(p.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeProduct === p.id
                  ? "bg-slate-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            {products.map(
              (p) =>
                activeProduct === p.id && (
                  <div key={p.id}>
                    <div className="mb-6 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
                      Featured Product
                    </div>

                    <h3 className="mb-4 text-3xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mb-6 text-lg text-gray-600">{p.desc}</p>

                    <ul className="mb-8 space-y-3">
                      {p.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <FaCheckCircle className="text-xs" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4 flex flex-wrap items-center gap-6">
                      <span className="text-3xl font-bold text-slate-900">{p.price}</span>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(p)}
                        className="flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-slate-700 hover:shadow-xl"
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                    </div>

                    {addedMessage && (
                      <div className="mb-8 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                        {addedMessage}
                      </div>
                    )}

                    {/* Product Rating */}
                    <div className="rounded-2xl border border-gray-200 bg-stone-50 p-6">
                      <h4 className="mb-2 text-lg font-bold text-slate-900">Rate this Product</h4>
                      <p className="mb-4 text-sm text-gray-600">
                        Users can enter ratings for the products displayed on the website.
                      </p>

                      <div className="mb-4 flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingSelect(p.id, star)}
                            className="transition hover:scale-110"
                            aria-label={`Rate ${star} star`}
                          >
                            <FaStar
                              className={`text-xl ${star <= (productRatings[p.id] || 0)
                                ? "text-yellow-400"
                                : "text-gray-300"
                                }`}
                            />
                          </button>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleSubmitRating(p.id)}
                          className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                          Submit Rating
                        </button>

                        {productRatings[p.id] ? (
                          <span className="text-sm font-medium text-slate-700">
                            Selected rating: {productRatings[p.id]}/5
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500">No rating selected yet</span>
                        )}
                      </div>

                      {submittedRatings[p.id] && (
                        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                          Thanks. You rated this product {submittedRatings[p.id]}/5.
                        </p>
                      )}
                    </div>
                  </div>
                )
            )}

            {/* Cart Summary */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-bold text-slate-900">Cart Summary</h4>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-white">
                  {cartCount} item{cartCount === 1 ? "" : "s"}
                </span>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500">No products added yet.</p>
              ) : (
                <>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between gap-4 rounded-xl bg-stone-50 px-4 py-3"
                      >
                        <div>
                          <h5 className="font-semibold text-slate-900">{item.title}</h5>
                          <p className="text-sm text-gray-500">
                            {item.price} × {item.quantity}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-sm text-red-500 transition hover:text-red-600"
                          aria-label={`Remove ${item.title}`}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
                    <span className="text-sm font-medium text-gray-600">Estimated Total</span>
                    <span className="text-lg font-bold text-slate-900">
                      ₦{cartTotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 rounded-full bg-amber-100 opacity-50 blur-3xl" />
            <div className="relative rounded-3xl bg-stone-100 p-8 shadow-inner">
              {products.map(
                (p) =>
                  activeProduct === p.id && (
                    <div
                      key={p.id}
                      className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
                    >
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="text-center">
                          <FaTooth className="mx-auto mb-4 text-6xl text-slate-200" />
                          <p className="text-sm text-gray-400">Product Visualization</p>
                        </div>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection;