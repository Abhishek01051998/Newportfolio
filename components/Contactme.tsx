import { motion } from 'framer-motion'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
    name:String;
    email:String;
    subject:String;
    message:String;
}
type Props={}

function Contactme({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs> = formdata => window.location.href=`mailto:abhishek.jain0105@gmail.com?subject=${formdata.subject}&body= Hi,My name is ${formdata.name}.${formdata.message}{forrmdata.message} ${formdata.email}`;
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:2
    }}
     className=' flex flex-col relative h-screen  text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className=' absolute top-24 uppercase tracking-[20px] text-white text-2xl px'>CONTACT ME</h3>
    <div className=' flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center '>I have got just what you Need.{"  "}<span className='text-grey-100'>Let's Talk</span></h4>
        <div className=' flex items-center  justify-center '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
<p className='text-2-xl'> +1-(732)-322-7565</p>
        </div>
        <div className=' flex items-center  justify-center '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
        <p className=' text-2-xl'>   abhishek.jain0105@gmail.com</p>


        </div>
        <form  onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto'>
            <div className=' flex space-x-2 '>
                <input  {...register('name')} placeholder='Name' className='contactinput' type="text" />
                <input  {...register('email')} placeholder='Email' className='contactinput' type="emailt" />
            </div>
            <input  {...register('subject')} placeholder='Subject' className='contactinput' type="text" />
            <textarea  {...register('message')} placeholder='Message' className='contactinput'></textarea>
            <button type="submit" className='text-bold text-lg bg-zinc-800 py-5 px-10 rounded-md'> Submit</button>
        </form>
    </div>
    </motion.div>
    )
}

export default Contactme