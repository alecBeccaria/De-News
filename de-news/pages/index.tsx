import type { GetServerSideProps,NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Component } from 'react'
import Gun, { IGun } from 'gun'
import {useRouter} from 'next/router';
import Home from './Home';



const getPath = () => {
  const router = useRouter()
  return router.pathname;
}

export class Index extends Component {
    gun: IGun
    constructor(props: any) {
    super(props); { 
      this.gun=Gun(getPath+'/gun');
       //To have access to gun object in browser console
    }
  }
  
  


  

  render() {
    return (
      <Home gun={this.gun} />
    );
  }
}


export default Index;
