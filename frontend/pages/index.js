import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Jumbotron from '../components/Jumbotron';
import ProductItem from '../components/ProductItem';
import { Categories } from '../data/Categories';
import Category from '../components/Category';
import { retrieveAllProblems } from '../redux-toolkit-state/slices/ProblemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Loaders from '../components/Loaders';
import Link from 'next/link';


const Home = () => {
  const dispatch = useDispatch();

  const { problems, success, loading, error } = useSelector((state) => state.problems);


  useEffect(() => {
    dispatch(retrieveAllProblems());
  }, [])


  return (
    <div>
      <Jumbotron />

      <h4 className='mt-5 mb-5 font-bold'>Recent Problems</h4>
      {
        loading ? <Loaders /> :
          <div class="grid sm:grid-cols-5 gap-4  mt-5">
            <div className='col-span-3'>
              {
                problems && problems.map((problem, ind) => {
                  return (
                    <>
                    <Link href={{ pathname: "/problem/problemPage", query: { pid: problem._id } }}><a>{problem.prb_name}</a></Link>
                       <br></br>
                    </>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )


}

export default Home;
