import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "063a7b48-714e-482c-bd3a-6043a4df1543");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
       toast.error(data.message);
        setResult("");
      }
    };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center py-20 p-6 lg:px-32w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center mb-6">
        Ready to make a move? Let's build your future together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              required
              name="Name"
              className="w-full border border-gray-300 py-3 rounded px-4 mt-2"
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 py-3 rounded px-4 mt-2"
              type="Email"
              placeholder="Your Email"
              required
              name="Email"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 py-3 rounded px-4 mt-2 h-48 resize-none"
            name="message"
            placeholder=" Message"
          ></textarea>
        </div>
        <button className="bg-blue-600 cursor-pointer text-white py-2 px-12 mb-10 rounded">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact
