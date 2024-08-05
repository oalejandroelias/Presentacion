import React from 'react'

const Select = (props) => {
    return (
        <div className="flex justify-center m-5">
            <div className="mb-3 xl:w-96">
                <label for="country" className="block text--d font-medium">Atributo</label>
                <select
                    id="test"
                    className="w-full rounded bg-transparent border border-black dark:border-white focus:border-nqn-verde dark:focus:border-nqn-verde outline-none text-black dark:text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    aria-label="Default select example"
                // value={option}
                // onChange={handleChange}
                >
                    <option selected value="nada">
                        Seleccionar...
                    </option>
                    {
                        props.options.map((opcion) =>
                            <option value={opcion}>{opcion}</option>
                        )}
                </select>
            </div>
        </div>
    )
}

export default Select
