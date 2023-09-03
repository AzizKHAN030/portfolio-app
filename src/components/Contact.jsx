import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { EarthCanvas } from "./canvas"
import { cv, email, github, linkedin, phone } from "../assets"

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_v5f90cf', 'template_gknbqjb', {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: 'Azizbek',
      to_email: 'khan.ak33.ak47@gmail.com'
    }, '-dha4BsHWAt7fHc7b').then(() => {
      setLoading(false);
      setForm({ name:'', email:'', message:'' });
      alert("Thanks! I will get back to you soon");
    },(error) => {
      setLoading(false);
      alert("Something went wrong. Please try again later");
    })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left","tween",0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div>
        <ul className="flex flex-wrap">
  <li className="mb-1 w-full sm:w-1/2">
    <a href="linkedin.com/in/azizbek-rasulov-982717228" target="_blank" className="flex items-center">
      <span className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2">
        <img src={linkedin} className="w-[80%] h-[80%] object-contain" />
      </span> Linkedin
    </a>
  </li>
  <li className="mb-1 w-full sm:w-1/2">
    <a href="tel:+998903590066" className="flex items-center">
      <span className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2">
        <img src={phone} className="w-[80%] h-[80%] object-contain" />
      </span>
      +998903590066
    </a>
  </li>
  <li className="mb-1 w-full sm:w-1/2">
    <a href="mailto: khan.ak33.ak47@gmail.com" rel="noreferrer" className="flex items-center">
      <span className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2">
        <img src={email} className="w-[80%] h-[80%] object-contain" />
      </span>
      Email
    </a>
  </li>
  <li className=" mb-1 w-full sm:w-1/2">
    <a href="/cv.pdf" className="flex items-center" target="_blank">
      <span className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2">
        <img src={cv} className="w-[80%] h-[80%] object-contain" />
      </span>
      CV
    </a>
  </li>
</ul>



        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              style={{resize:"none"}}
            />
          </label>
          <button 
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary w-fit rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")