import React from 'react'

import logo_copade from "../../src/img/copade.png";

const PaginasExternas = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={logo_copade}
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Copade</p>
              <p className="mb-4 text-xs text-gray-800">Product Manager</p>
              <p className="text-sm tracking-wide text-gray-800">
                Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                cuppa unhand me sir hadn't done it in donkey's years sod's law.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={logo_copade}
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Copade</p>
              <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
              <p className="text-sm tracking-wide text-gray-800">
                Secondary fermentation degrees plato units of bitterness, cask
                conditioned ale ibu real ale pint glass craft beer. krausen goblet
                grainy ibu.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={logo_copade}
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Copade</p>
              <p className="mb-4 text-xs text-gray-800">Human Resources</p>
              <p className="text-sm tracking-wide text-gray-800">
                I just closed my eyes and in a nanosecond I cured myself from this
                ridiculous model of disease, addiction and obsession.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={logo_copade}
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Copade</p>
              <p className="mb-4 text-xs text-gray-800">Good guy</p>
              <p className="text-sm tracking-wide text-gray-800">
                Est Schlitz shoreditch fashion axe. Messenger bag cupidatat
                Williamsburg sustainable aliqua, umami shabby chic artisan duis
                pickled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaginasExternas