import React from "react";
import filho from "./componete_filho";

function pai() {

    return (
        <>
            <h1>Componente pai</h1>
            <filho text={"Valor do pai para filho"}>
            </filho>
        </>
    )

}
export default pai