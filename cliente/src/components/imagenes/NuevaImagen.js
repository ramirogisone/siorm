import React, {Fragment, useState} from 'react';

const NuevaImagen = () => {

/*     // state de imagen
    const [imagen, guardarImagen] = useState({
        nombre: '',
        descripcion: '',
        link: ''
    });

    const {nombre, descripcion, link} = imagen;

    // lee el contenido de los imputs
    const onChange = e => {
        guardarImagen({
            ...imagen,
            [e.target.name] : e.target.value
        })
    } 

    // cuando se presiona en agregar
    const onSubmitImagen = e => {
        e.preventDefault();

        // validar los campos

        // agregar al state

        // reiniciar form
    }*/

    return ( 
        <div className='formulario'>
            <form
                /* onSubmit={onSubmitImagen}
                className='formulario-nueva-imagen' */
            >
                <div className='contenedor-input'>
                    
                    <input 
                        type='text'
                        className='input-text'
                        // id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        /* value={nombre}
                        onChange={onChange} */
                    />
                    
                    
                    <input 
                        type='text'
                        className='input-text'
                        // id='descripcion'
                        name='descripcion'
                        placeholder='Descripción'
                        /* value={descripcion}
                        onChange={onChange} */
                    />
                    
                    <input 
                        type='text'
                        className='input-text'
                        // id='link'
                        name='link'
                        placeholder='Link'
                        /* value={link}
                        onChange={onChange} */
                    />
                    
                    <div className='contenedor-input'>
                    
                        <input 
                            type='submit'  
                            className='btn btn-primario btn-submit btn-block'
                            value='Agregar imágen'
                        />
                    
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default NuevaImagen;