import {FormControl,FormLabel,Heading,Container, Input} from "@chakra-ui/react"

export default function Contact(){
    return(
        <Container className='h-screen'>
            <Heading>Contact</Heading>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name"></Input>
            </FormControl>
        </Container>
    //     <div className="my-12 z-10 relative text-center" id="contact"><h1 className="text-8xl p-8 neon heading h-screen flex justify-center items-center" >
    //     Contact
    // </h1>
    //         <div  className=" flex  flex-col justify-center flex-wrap items-center">
    //             {/* <div  className="flex flex-col gap-8 items-center neon-border2 py-10 px-48 rounded-xl">
                    
    //                 <input type="text"  className="bg-transparent border-b-2"></input>
    //             <div className="flex gap-4">
    //                     <div>Name:</div>
    //                 <input type="text"  className="bg-transparent border-b-2"></input>
    //                 </div>
    //                 <div className="flex gap-4">
    //                     <div>Email:</div>
    //                 <input type="email"  className="bg-transparent border-b-2"></input>
    //                 </div>
                    
    //                 <div className="flex gap-4">
    //                     <div>Subject:</div>
    //                 <input type="text"  className="bg-transparent border-b-2"></input>
    //                 </div>
    //                 <div className="flex gap-4">
    //                     <div>Message:</div>
    //                 <textarea  className="bg-transparent border-b-2 content-start"></textarea>
    //                 </div>
    //                 <button type="submit" className="neon2 border-2 px-4 py-2 rounded border-white" >Submit</button>
    //             </div> */}
    //             <div className="m-16 bg-black px-80 rounded-xl py-8 border-2">
    //                 Or you can connect with me on:
    //                 <div className="flex gap-8 my-4 justify-center">
    //                     <Link href="https://github.com/Ayirr" target="_blank"><img src="git.png" className="w-8 invert"/></Link>
    //                     <Link href='https://www.instagram.com/reahhh.h/' target="_blank"> <img src="insta.png" className="w-8 invert"></img></Link>
    //                     <Link href='https://www.reddit.com/user/Strong_Candy_1449' target="_blank"><img src="reddit.png" className="w-8 invert"/></Link>
    //                     <Link href='discordapp.com/users/907639882837557359' target="_blank"><img src="discord.png" className="w-8 invert"/></Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    )
}