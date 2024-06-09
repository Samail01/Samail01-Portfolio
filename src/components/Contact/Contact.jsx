const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-light px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <form className="space-y-8">
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:flex-row">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-left mb-2 text-lg font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-left mb-2 text-lg font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 "
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-left mb-2 text-lg font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 "
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-navbar text-black text-lg font-semibold rounded focus:outline-none focus:ring-2 "
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
