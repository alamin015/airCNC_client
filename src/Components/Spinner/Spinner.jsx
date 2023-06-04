import React from 'react';
import { TbFidgetSpinner } from "react-icons/tb";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Spinner = () => {
  return (
    <CgSpinnerTwoAlt className='text-center mx-auto animate-spin' size={22} />
  )
}

export default Spinner