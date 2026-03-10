import { useMemo, useState } from "react"

function GallerySection({ galleryImages = [] }) {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(galleryImages.map((image) => image.category))]
    return ["all", ...uniqueCategories]
  }, [galleryImages])

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages
    return galleryImages.filter((image) => image.category === activeCategory)
  }, [galleryImages, activeCategory])

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Gallery
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Our Dental Environment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our clinic spaces, treatment areas, team moments and patient-centered care
            environment.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${activeCategory === category
                ? "bg-slate-800 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredImages.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-sm">
                    {image.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{image.alt}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Belleville Dental gallery showcase.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-stone-50 px-6 py-16 text-center">
            <h3 className="text-xl font-semibold text-slate-900"></h3>
            <p className="mt-3 text-gray-600">
              No images available for the selected category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection;