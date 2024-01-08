import { Input } from '@nextui-org/react'
import React from 'react'

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
    startContent={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    }
    type="search"
  />
  )
}

export default Search