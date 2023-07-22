

import { NextResponse } from 'next/server';
import connect from '@/utils/dbConnect';
import bodyParser from 'body-parser';

export const config = {
  api: {
    bodyParser: false, // Disable built-in bodyParser
  },
};

export default async function handler(req, res) {
  // Use body-parser middleware to parse the request body
  bodyParser.json()(req, res, async () => {
    try {
      // Now you can access data from req.body
      const email = req.body.email;

      // Connect to the database if needed (e.g., using your connect() function)
      await connect();

      // Perform any operations with the email data
      // ...

      // Respond with the email data
      return NextResponse.json({ name: email });
    } catch (error) {
      console.error('Error processing the request:', error);
      return NextResponse.error(error);
    }
  });
}





