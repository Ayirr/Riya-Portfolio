import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { motion } from "framer-motion";

const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then(async (res) => {
    const responseData = await res.json();
    if (!res.ok) {
      console.error("API Error Response:", responseData);
      throw new Error(responseData.message || "Failed to send message");
    }
    return responseData;
  });
  
const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="z-10 relative min-h-screen flex flex-col items-center justify-center p-4" id='contact'>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 2}}}
        viewport={{ once: false }}
        className="w-full max-w-md"
      >
        <h1 className="text-8xl p-8 neon heading text-center mb-8">Contact</h1>
        
        <div className="neon-border2 p-8 rounded-xl bg-black/50 backdrop-blur-sm">
      {error && (
        <div className="text-red-400 mb-4 text-center">
          {error}
        </div>
      )}

      <div className="mb-5">
        <label className="block text-white mb-2">Name *</label>
        <input
          type="text"
          name="name"
          className={`w-full p-3 bg-transparent border-2 rounded text-white ${
            touched.name && !values.name ? 'border-red-400' : 'border-cyan-400'
          }`}
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.name && !values.name && (
          <div className="text-red-400 text-sm mt-1">Required</div>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-white mb-2">Email *</label>
        <input
          type="email"
          name="email"
          className={`w-full p-3 bg-transparent border-2 rounded text-white ${
            touched.email && !values.email ? 'border-red-400' : 'border-cyan-400'
          }`}
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.email && !values.email && (
          <div className="text-red-400 text-sm mt-1">Required</div>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-white mb-2">Subject *</label>
        <input
          type="text"
          name="subject"
          className={`w-full p-3 bg-transparent border-2 rounded text-white ${
            touched.subject && !values.subject ? 'border-red-400' : 'border-cyan-400'
          }`}
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.subject && !values.subject && (
          <div className="text-red-400 text-sm mt-1">Required</div>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-white mb-2">Message *</label>
        <textarea
          type="text"
          name="message"
          rows={4}
          className={`w-full p-3 bg-transparent border-2 rounded text-white resize-none ${
            touched.message && !values.message ? 'border-red-400' : 'border-cyan-400'
          }`}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.message && !values.message && (
          <div className="text-red-400 text-sm mt-1">Required</div>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full p-3 border-2 border-white rounded neon2 transition-all ${
          isLoading || !values.name || !values.email || !values.subject || !values.message
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-white hover:text-black'
        }`}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
      >
        {isLoading ? 'Sending...' : 'Submit'}
      </motion.button>
        </div>
      </motion.div>
    </div>
  );
}