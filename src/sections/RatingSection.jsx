import { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaUserCircle, FaTooth, FaQuoteLeft } from "react-icons/fa";

const RatingSection = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("reviews") || "[]");
      setReviews(Array.isArray(stored) ? stored : []);
    } catch (err) {
      console.error("Failed to load reviews:", err);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating < 1) return;

    const newReview = {
      rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);

    setRating(0);
    setHover(0);
    setComment("");
  };

  const average = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg">
            <FaTooth className="text-white text-2xl" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Patient Reviews
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Share your experience with our clinic.
          </p>

        </div>


        <div className="grid lg:grid-cols-3 gap-8">


          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

              {/* AVERAGE */}
              {average && (
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-6 flex justify-between items-center">

                  <div>
                    <p className="text-slate-300 text-sm uppercase tracking-wider mb-1">
                      Overall Rating
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        {average}
                      </span>
                      <span className="text-slate-400">/ 5</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`text-lg ${star <= Math.round(average)
                            ? "text-yellow-400"
                            : "text-slate-600"
                          }`}
                      />
                    ))}
                  </div>

                </div>
              )}


              {/* FORM */}
              <div className="p-8">

                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* STAR RATING */}
                  <div className="text-center">

                    <label className="block text-lg font-semibold text-slate-800 mb-4">
                      How was your visit?
                    </label>

                    <div className="flex justify-center gap-3">

                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setRating(value)}
                          onMouseEnter={() => setHover(value)}
                          onMouseLeave={() => setHover(0)}
                          className="p-2 rounded-full outline-none focus:outline-none focus:ring-0"
                        >

                          <FaStar
                            className={`w-12 h-12 transition-all duration-200 ${value <= (hover || rating)
                                ? "text-yellow-400 scale-110"
                                : "text-slate-300"
                              }`}
                          />

                        </button>
                      ))}

                    </div>

                  </div>


                  {/* COMMENT */}
                  <div>

                    <textarea
                      rows={4}
                      maxLength={350}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Tell us about your visit..."
                      className="w-full rounded-2xl border-2 border-slate-200 px-5 py-4 text-slate-700 focus:border-slate-700 focus:ring-2 focus:ring-slate-300 outline-none resize-none bg-slate-50"
                    />

                    <div className="text-right text-xs text-slate-400 mt-1">
                      {comment.length} / 350
                    </div>

                  </div>


                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={rating < 1}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 ${rating >= 1
                        ? "bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:brightness-110"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                      }`}
                  >

                    <FaCheckCircle />
                    Submit Review

                  </button>

                </form>


                {/* SUCCESS */}
                {submitted && (

                  <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-4 flex items-center gap-4">

                    <FaCheckCircle className="text-emerald-600 text-xl" />

                    <div>
                      <p className="font-bold text-emerald-800">
                        Thank you for your feedback!
                      </p>
                      <p className="text-emerald-600 text-sm">
                        Your review helps us improve.
                      </p>
                    </div>

                  </div>

                )}

              </div>
            </div>
          </div>


          {/* RIGHT SIDE REVIEWS */}
          <div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">

              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FaQuoteLeft className="text-slate-600" />
                Recent Reviews
              </h3>


              {reviews.length === 0 ? (

                <div className="text-center py-12 text-slate-400">
                  <FaUserCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p>No reviews yet</p>
                </div>

              ) : (

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

                  {reviews.slice().reverse().slice(0, 8).map((review, i) => (

                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border">

                      <div className="flex justify-between mb-2">

                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar
                              key={index}
                              className={`w-4 h-4 ${index + 1 <= review.rating
                                  ? "text-yellow-400"
                                  : "text-slate-200"
                                }`}
                            />
                          ))}
                        </div>

                        <span className="text-xs text-slate-400">
                          {review.date}
                        </span>

                      </div>

                      <p className="text-sm text-slate-600">
                        {review.comment || "No comment provided"}
                      </p>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RatingSection;