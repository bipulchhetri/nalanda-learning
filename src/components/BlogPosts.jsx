export default function BlogPosts() {
    return (
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-2xl text-blue-900 mb-2">
              <i className="far fa-book-open-reader"></i> Our Blog
            </span>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              Our Latest Blogs
            </h2>
            <p className="text-gray-500">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="relative bg-white rounded-[50px_50px_50px_0] p-5 mb-6 shadow-lg transition-transform hover:scale-105"
              >
                <div className="mb-3 text-gray-600">
                  <span className="inline-flex items-center gap-2">
                    <i className="far fa-map-marker-alt text-indigo-600"></i>
                    25/B Milford Road, New York
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-[40px_40px_40px_0] mb-4">
                  <img
                    src={`event/0${id}.jpg`}
                    alt="Event"
                    className="rounded-[40px_40px_40px_0] shadow-md transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <i className="far fa-calendar-alt text-indigo-600 mr-1"></i>
                      16 June, 2024
                    </span>
                    <span className="flex items-center">
                      <i className="far fa-clock text-indigo-600 mr-1"></i>
                      10.00AM - 04.00PM
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 hover:text-indigo-600">
                    <a href="#">High School Program 2024</a>
                  </h4>
                  <p className="text-gray-500 mb-5">
                    There are many variations of passages the majority have some injected humour.
                  </p>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
                    >
                      Read More 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  