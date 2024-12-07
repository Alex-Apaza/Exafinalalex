import Image from "next/image";
import Curvada from "@/componentes/Curvada";
import Puxada from "@/componentes/Puxada";
import Unilateral from "@/componentes/Unilateral";
import Levantamiento from "@/componentes/Levantamiento";
import "./page.css"

export default function Home() {
  return (
    <div>
      <p className="text">info</p>
      <div className="datitos">
      <h2 className="tituloejer">Ejercicios</h2>
      <p className="text">item</p>
      </div>
      <Puxada/>
      <Curvada/>
      <Unilateral/>
      <Levantamiento/>
    </div>
  );
}
