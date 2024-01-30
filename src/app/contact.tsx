'use client'
import { FormEvent,useState } from "react";
import { Link } from "react-scroll";

export default function Contact(){
    const [isSubmitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    // const onSubmit = async (e: FormEvent)=>{
    //     e.preventDefault()
    //     try{
    //         const res = await fetch('/api/contact',{
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 message,
    //             }),
    //             headers:{
    //                 'content-type': 'application/json',
    //             },
    //         })
    //         if(res.status===200){
    //             i
    //         }
    //     }catch(err){
    //         console.error('Err',err)
    //     }
    // }

    return(
        <div className="my-12 z-10 relative text-center" id="contact">
            <div className="text-4xl my-12 text-center">Contact</div>
            <div  className=" flex  flex-col justify-center flex-wrap items-center">
                <form  className="flex flex-col gap-8 items-center">
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" className="bg-transparent border-2"></input>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" className="bg-transparent border-2"></input>
                    <textarea value={message}  onChange={(e)=> setMessage(e.target.value)} placeholder="message" className="bg-transparent border-2 content-start"></textarea>
                    <button type="submit" className="border-2 px-4 py-2 rounded border-white" >Submit</button>
                </form>
                <div className="m-16">
                    Or you can connect with me on:
                    <div className="flex gap-8 my-4 justify-center">
                        <Link href="https://github.com/Ayirr" target="_blank"><img src="git.png" className="w-8 invert"/></Link>
                        <Link href='https://www.instagram.com/reahhh.h/' target="_blank"> <img src="insta.png" className="w-8 invert"></img></Link>
                        <Link href='https://www.reddit.com/user/Strong_Candy_1449' target="_blank"><img src="reddit.png" className="w-8 invert"/></Link>
                        <Link href='discordapp.com/users/907639882837557359' target="_blank"><img src="discord.png" className="w-8 invert"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}