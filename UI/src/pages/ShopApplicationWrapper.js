import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'
import { useSelector } from 'react-redux'

const ShopApplicationWrapper = () => {
  // TODO use of useSelector for loading status
  const isLoading = useSelector((state)=> state?.commonState?.loading);
  return (
    <div>
        <Navigation />
        {/*Renders the child route component */}
        {/* TODO might need more understanding */}
        <Outlet />
        {isLoading && <Spinner />}
    </div>
  )
}

export default ShopApplicationWrapper