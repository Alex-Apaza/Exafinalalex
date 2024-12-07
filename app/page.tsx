import Image from "next/image";
import Curvada from "@/componentes/Curvada";
import Puxada from "@/componentes/Puxada";
import Unilateral from "@/componentes/Unilateral";

export default function Home() {
  return (
    <div>
      <Puxada/>
      <Curvada/>
      <Unilateral/>

    </div>
  );
}
