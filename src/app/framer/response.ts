import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function Handler(req: NextApiRequest, res: NextApiResponse){
    console.log('Data', req.body)
}