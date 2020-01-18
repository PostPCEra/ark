import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';

import { Http } from '../../lib';
import { Link } from '../../components';
import { User } from '../../interfaces';

const http = new Http();


const Login2 = () => {
  
  // login.tsx has  async .. at onsubmit and then  Await ...
  // const onSubmit = async (e: FormEvent<HTMLFormElement>) => {

    // await http.get('products');

  // )

  return (
    <div> 
        <h1> I am here in  /auth/page2.tsx file  6666........</h1> 
        
    </div>
  )
};

export default Login2;
