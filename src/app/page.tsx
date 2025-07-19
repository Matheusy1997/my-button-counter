'use client'
import Image from "next/image";
import { useState } from "react";
import Display from "../../components/Display";
import Button from "../../components/Button";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Display count={count}></Display>
      <div>
        <Button type="subtract" onClick={() => setCount(count - 1)}>Subtract</Button>
        <Button type="reset" onClick={() => setCount(0)}>Reset</Button>
        <Button type="add" onClick={() => setCount(count + 1)}>Add</Button>
      </div>
    </div>
  );
}
