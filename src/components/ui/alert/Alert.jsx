import React from 'react'

const Alert = (props) => {

    return (
        <>
            {props.showAlert ? (
                <div
                    className={
                        `transition ease-in-out delay-150 bg-blue-500 text-white px-2 py-4 border-0 rounded fixed top-20 right-4 mb-4 bg-green-500/70 z-50 ${props.fadeOut ? 'opacity-0' : 'opacity-100'
                        }`
                    }
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize"> Url de Servicio Copiado! </b>
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-80 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => props.setShowAlert(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </>
    );
};


export default Alert
