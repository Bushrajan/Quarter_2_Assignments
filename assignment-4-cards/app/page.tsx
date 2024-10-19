import Image from "next/image";
import Card from "./components/page";

export default function Home() {
  return (
    <>
      <div className="flex text-center justify-center mt-10 flex-wrap ">

        <div className="col">
          <Card name="Tuba" age={15} id={789} rollno="09" DOB="20-11-2009" Class="GIAIC" email="Tuba09@gmail.com" />
        </div>
        <div className="col">
          <Card name="John" age={20} id={545} rollno="02" DOB="20-11-2005" Class="GIAIC" email="John05@gmail.com" />
        </div>
        <div className="col">
          <Card name="Sofy" age={19} id={125} rollno="05" DOB="20-11-2004" Class="GIAIC" email="Sofy01@gmail.com" />
        </div>

      </div>
    </>
  );
}



