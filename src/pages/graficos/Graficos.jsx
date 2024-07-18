import React from 'react'
import BasicBar from '../../components/charts/BasicBar'
import ColumnStacked from '../../components/charts/ColumnStacked'
import Patterned from '../../components/charts/Patterned'
import Donut from '../../components/charts/Donut'

const Graficos = () => {
    return (
        <>
            <section className="mt-20">
                <div className="container px-6 py-10 mx-auto">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <BasicBar />
                        <ColumnStacked />
                        <Patterned />
                        <Donut />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Graficos
