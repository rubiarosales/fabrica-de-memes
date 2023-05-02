
import React, { useState } from 'react'; //Importacion
import html2canvas from 'html2canvas';
import '../Estilos/imgmeme.css';

const Imgmeme = () => {

    const [textomeme, setTextomeme] = useState(); //Declaracion
    const [textomeme2, setTextomeme2] = useState();
    const [imgmeme, setImgmeme] = useState();
    const [postexto, setPostexto] = useState();
    const [postexto2, setPostexto2] = useState();
    const [colortexto, setColortexto] = useState();
    const [colortexto2, setColortexto2] = useState();
    // const memeBox = document.querySelector(".memeBox");


    const textmeme = (e) => {
        setTextomeme(e.target.value);
        console.log(e.target.value);
    }

    const textmeme2 = (e) => {
        setTextomeme2(e.target.value);
        console.log(e.target.value);
    }

    const colortext = (e) => {
        setColortexto(e.target.value);
        console.log(e.target.value);
    }

    const colortext2 = (e) => {
        setColortexto2(e.target.value);
        console.log(e.target.value);
    }

    const selectPostext = (e) => {
        setPostexto(e.target.value);
        let pos = e.target.value;
        console.log(pos);
    }
    const selectPostext2 = (e) => {
        setPostexto2(e.target.value);
        let pos = e.target.value;
        console.log(pos);
    }


    // switch (selectPostext) {
    //     case 'up':
    //         //  textoP.className="texto-up";
    //         return console.log("texto-up");
    //         break;
    //     case 'mid':
    //         // textoP.className="texto-mid";
    //         return console.log("texto-mid");
    //         break;
    //     case 'down':
    //         // textoP.className="texto-down";
    //         return console.log("texto-down");
    //         break;
    //     default:
    //     //  textoP.className="texto-up";
    // }



    const selectImg = (e) => {
        setImgmeme(e.target.value);
        console.log(e.target.value);
        // memeBox.classList.remove("hidden");

    }


    const descarga = (e) => {
        html2canvas(document.getElementById("exportar")).then(function (canvas) {
            // document.body.appendChild(canvas);
            let img = canvas.toDataURL("memesImg/jpg");
            let link = document.createElement("a");
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });
    }


    return (
        <div>
            <h1>Creá tu propio meme</h1>
            <h4>Escribí tu frase y descargalo</h4>
            <div className="d-flex  align-items-center flex-column col-12">
                <form className='d-flex col-md-8 m-1'>
                    <select onChange={selectImg} className="form-select m-1" aria-label="Default select example">
                        <option selected >Selecciona una imagen para tu meme</option>

                        <option value={6}>Futurama</option>
                        <option value={7}>Bob Esponja</option>
                        <option value={8}>Señora</option>
                        <option value={9}>Calamardo</option>
                    </select>
                </form>
                <form className='d-flex col-md-8 m-1 '>
                    <select onChange={selectPostext} className="form-select m-1" aria-label="Default select example">
                        <option selected>Posición del texto</option>
                        <option value={'up'}>Arriba</option>
                        <option value={'mid'}>Centro</option>
                        <option value={'down'}>Abajo</option>

                    </select>
                    <input onChange={textmeme} className='form-control m-1 ' type='text' placeholder='Escribí tu frase y selecciona un color' />
                    <input onChange={colortext} type='color' name='Color de texto' className='colorInput' />

                </form>
                <form className='d-flex col-md-8 m-1 '>
                    <select onChange={selectPostext2} className="form-select m-1" aria-label="Default select example">
                        <option selected>Posición del texto</option>
                        <option value={'up'}>Arriba</option>
                        <option value={'mid'}>Centro</option>
                        <option value={'down'}>Abajo</option>

                    </select>
                    <input onChange={textmeme2} className='form-control m-1 ' type='text' placeholder='Escribí tu frase y selecciona un color' />
                    <input onChange={colortext2} type='color' name='Color de texto' className='colorInput' />
                </form>

            </div>



            <figure className='text-center  memeBox' id='exportar'>
            
                <img src={`/memesImg/${imgmeme}.jpg`}  alt="meme"/>
                <p className={`texto-meme ${postexto}`} style={{ "color": `${colortexto}` }} >{textomeme}</p>
                <p className={`texto-meme ${postexto2}`} style={{ "color": `${colortexto2}` }} >{textomeme2}</p>

            </figure>

            <button className='down-btn btn btn-light' onClick={descarga}>Descargar</button>

        </div>
    )
}

export default Imgmeme;
