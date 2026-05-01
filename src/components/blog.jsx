// --- addubg code ---
function BlogSection() {
  return (
    <div className="bg-gray-900 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <p className="text-indigo-400 text-sm font-medium uppercase">Blog list</p>
          <h2 className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl">Plan your upcoming journey.</h2>
          <p className="text-gray-400 text-xl">
            Explore new destinations, indulge in local cuisines, and immerse yourself in diverse cultures.
          </p>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card card-border shadow-none bg-white/5 border-white/10">
            <figure>
              <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-36.png" alt="Modern house" />
            </figure>
            <div className="card-body gap-3">
              <h5 className="card-title text-xl text-white">Laws of Transfer of Immovable Property</h5>
              <p className="mb-5 text-gray-400">
                Experience the charm of this lovely and cozy apartment, featuring warm decor and inviting spaces.
              </p>
              <div className="card-actions">
                <a href="#" className="btn btn-primary btn-gradient">
                  Read More
                  <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-border shadow-none bg-white/5 border-white/10">
            <figure>
              <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-37.png" alt="Traditional house" />
            </figure>
            <div className="card-body gap-3">
              <h5 className="card-title text-xl text-white">Thane Development Plan 2026</h5>
              <p className="mb-5 text-gray-400">
                Discover a unique nook in the heart of the city, offering convenience and access to attractions.
              </p>
              <div className="card-actions">
                <a href="#" className="btn btn-primary btn-gradient">
                  Read More
                  <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card card-border shadow-none bg-white/5 border-white/10">
            <figure>
              <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-38.png" alt="Modern house with pool" />
            </figure>
            <div className="card-body gap-3">
              <h5 className="card-title text-xl text-white">What is a Property Sale Agreement?</h5>
              <p className="mb-5 text-gray-400">
                Welcome to this charming independent house bedroom, featuring a spacious layout and cozy furnishings.
              </p>
              <div className="card-actions">
                <a href="#" className="btn btn-primary btn-gradient">
                  Read More
                  <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}