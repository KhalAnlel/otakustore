"use client"
import { Input } from '@nextui-org/react'
import React from 'react'
import SearchMag from '../icons/searchMag'

const Search = () => {
  return (
    <Input
    classNames={{
      base: "max-w-full md:max-w-[20rem] h-10",
      mainWrapper: "h-full",
      input: "text-small",
      inputWrapper:
        "h-full font-normal text-black bg-transparent dark:text-white border-1 dark:border-white border-slate-900",
    }}
    placeholder="Type to search..."
    size="sm"
    startContent={<SearchMag/>}
    type="search"
  />
  )
}

export default Search